// SpinUp guardrails (Tai, 11-05). Model-independent safety for advice that could hurt someone: health, money, legal and tax,
// insurance, and physical safety. Plain code, so the same rules hold whichever AI model runs the Staff.
// This file is published with the demo (github.com/c4rm4boy/spinup), and every safety record carries its fingerprint, so anyone
// can check which rules were in force when a warning was shown or accepted.
//   - riskAreas(text): which high-stakes areas a goal, Pro or to-do touches (keyword rules, no AI)
//   - ackText(areas): the one-time acknowledgement for a high-stakes project
//   - brightLines(reply): specific doses, trades and certain-sounding legal deadlines, caught after the Pro answers
//   - GuardLog: the safety record, an append-only file where each entry carries the fingerprint (hash) of the one before it,
//     so changing or deleting an entry breaks every fingerprint after it (verify() finds where)
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

export const GUARD_VERSION = '1.0 (2026-11-05)';
// This file's own fingerprint: match it to the published copy to see exactly which rules were in force.
export const GUARD_SHA = createHash('sha256').update(fs.readFileSync(fileURLToPath(import.meta.url))).digest('hex').slice(0, 16);

export const AREAS = {
  health:    { emoji: '🩺', label: 'Health', pro: 'your doctor or pharmacist',
               re: /\b(health|medical|medicine|medication|meds|doctor|nurse|clinic|diagnos\w*|symptom\w*|disease|illness|injur\w*|pain|surgery|therapy|therapist|mental health|anxiety|depress\w*|diet|nutrition\w*|weight loss|supplement\w*|vitamin\w*|dose|dosage|pregnan\w*|allerg\w*|prescription\w*|pharmac\w*|fitness|workout|marathon|5k|hospital|insulin|blood pressure)\b/i },
  money:     { emoji: '💰', label: 'Money', pro: 'a licensed financial advisor or your accountant',
               re: /\b(debt|loan\w*|mortgage|refinanc\w*|invest\w*|stocks?|bonds?|etf\w*|crypto\w*|bitcoin|retire\w*|401\s?\(?k\)?|ira|roth|savings|budget\w*|credit card\w*|credit score|bankrupt\w*|portfolio|financ\w*|interest rate|pricing|margin\w*|cash flow|payroll|pension)\b/i },
  legal:     { emoji: '⚖️', label: 'Legal and tax', pro: 'a lawyer or a CPA',
               re: /\b(legal|law|lawyer|attorney|lawsuit|sue|court|contract\w*|lease|liabilit\w*|tax\w*|irs|llc|incorporat\w*|permit\w*|licen[cs]\w*|zoning|compliance|regulat\w*|custody|divorce|last will|estate plan\w*|living trust|probate|immigra\w*|visa|copyright|trademark)\b/i },
  insurance: { emoji: '🛡️', label: 'Insurance', pro: 'a licensed insurance agent',
               re: /\b(insur\w*|polic(y|ies)|deductible|premium\w*|claim\w*|coverage|underwrit\w*|medicare|medicaid)\b/i },
  safety:    { emoji: '⚠️', label: 'Physical safety', pro: 'a licensed contractor, electrician or engineer',
               re: /\b(electric\w*|wiring|breaker|gas line|structural|load[- ]bearing|roof\w*|asbestos|lead paint|mold|chemical\w*|propane|ladder|scaffold\w*|demolition|food safety|food truck|firearm\w*|hunting|boat\w*|diving|climb\w*)\b/i }
};
// Which areas a piece of text touches.
export function riskAreas(text) {
  const t = String(text || '');
  return Object.keys(AREAS).filter(k => AREAS[k].re.test(t));
}
export const areaLine = areas => areas.map(k => AREAS[k].emoji + ' ' + AREAS[k].label).join(' · ');
export const proFor = areas => [...new Set(areas.map(k => AREAS[k].pro))].join(', or ');

// Is this a Claude model? Other models may have fewer safety checks of their own, so SpinUp applies every guardrail everywhere.
export const isClaude = model => /^(claude|opus|sonnet|haiku)\b/i.test(String(model || ''));

// The one-time acknowledgement for a high-stakes project.
export function ackText(areas) {
  return `This project touches ${areas.map(k => AREAS[k].label.toLowerCase()).join(', ')}. Your Staff is AI, not a licensed ` +
    `${areas.map(k => ({ health: 'doctor', money: 'financial advisor', legal: 'lawyer or CPA', insurance: 'insurance agent', safety: 'contractor or engineer' })[k]).join(', ')}. ` +
    `AI can be wrong, out of date or miss your situation. Before you act on advice in these areas, check it with ${proFor(areas)}. ` +
    `You decide and you act; SpinUp only drafts.`;
}

// What every Pro is told, on every project.
export const PRO_RULES = `- Bright lines (never cross them, whatever you're asked): no medication doses, no advice to start, stop or change a medication or treatment, ` +
  `no "buy" or "sell" on a specific stock, fund or coin, and no legal or tax deadline stated as certain. Explain the general picture and send them to the right professional instead.`;

// Caught after the Pro answers. Each rule: what it looks like, and what the warning says.
const BRIGHT = [
  [/\b\d+(\.\d+)?\s?(mg|mcg|µg|milligrams?|micrograms?|iu|units?)\b/i, 'a specific dose'],
  [/\b(stop|quit|discontinue|skip|double|halve|reduce|increase)\s+(taking\s+)?(your\s+)?(medication|meds|medicine|insulin|prescription|dose|treatment|chemo\w*)\b/i, 'a change to a medication or treatment'],
  [/\b(buy|sell|short|dump|load up on)\s+(shares of|stock in|the stock|more of|some)?\s*\(?\$?[A-Z]{2,5}\)?\b(?!\s*(account|plan|card))/, 'a specific buy or sell'],
  [/\b(you (must|have to|need to) file (it )?by|the deadline is definitely|you will (definitely|certainly) (win|lose))\b/i, 'a legal or tax deadline or outcome stated as certain']
];
export function brightLines(reply) {
  return BRIGHT.filter(([re]) => re.test(String(reply || ''))).map(([, what]) => what);
}
export const brightWarning = hits => `⛔ SpinUp safety check: this answer includes ${hits.join(' and ')}. Don't act on it without a licensed professional. ` +
  `(This note is added by SpinUp's own rules, not by the AI.)`;

// ---------- The safety record ----------
// One line per event (an acknowledgement, a "reviewed by", an "I'm doing this without a professional", a bright-line catch).
// Each line has prev (the last line's hash) and hash = sha256(prev + the line without its hash). Append-only.
export class GuardLog {
  constructor(file) { this.file = file; }
  rows() {
    if (!fs.existsSync(this.file)) return [];
    return fs.readFileSync(this.file, 'utf8').split('\n').filter(Boolean).map(l => { try { return JSON.parse(l); } catch { return { broken: l }; } });
  }
  static hashOf(prev, body) { return createHash('sha256').update(prev + JSON.stringify(body)).digest('hex'); }
  add(entry) {
    const rows = this.rows(), last = rows[rows.length - 1], prev = (last && last.hash) || 'start';
    const body = { seq: rows.length + 1, at: new Date().toISOString(), guard: GUARD_VERSION, guardSha: GUARD_SHA, ...entry, prev };
    const row = { ...body, hash: GuardLog.hashOf(prev, body) };
    fs.appendFileSync(this.file, JSON.stringify(row) + '\n');
    return row;
  }
  // Walk the chain: { ok, entries, brokenAt (first bad entry), why }.
  verify() {
    const rows = this.rows(); let prev = 'start';
    for (let i = 0; i < rows.length; i++) {
      const r = rows[i];
      if (r.broken) return { ok: false, entries: rows.length, brokenAt: i + 1, why: 'an unreadable line' };
      const { hash, ...body } = r;
      if (r.prev !== prev) return { ok: false, entries: rows.length, brokenAt: r.seq || i + 1, why: 'it doesn\'t follow the entry before it (one was removed or reordered)' };
      if (GuardLog.hashOf(prev, body) !== hash) return { ok: false, entries: rows.length, brokenAt: r.seq || i + 1, why: 'its contents were changed' };
      if (r.seq !== i + 1) return { ok: false, entries: rows.length, brokenAt: i + 1, why: 'the numbering skips' };
      prev = hash;
    }
    return { ok: true, entries: rows.length, last: prev.slice(0, 16) };
  }
}
