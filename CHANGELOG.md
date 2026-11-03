# SpinUp changelog

SpinUp started on October 31, 2026 as "Cabinet Builder," a clickable mockup for one office remodel. Two days later it builds a team for any goal, puts that team to work, and lets you talk to each member one on one. Newest changes first.

**The chain today:** You (the CEO) → 🧭 Chief (your right hand) → Lead (the expert for this goal) → Pros (your Staff)

---

## v0.9.12 · Nov 3 · Real people on your Staff

- **Add the real people you work with** (in the full prototype): a mentor, your CPA, a contractor. They sit next to your AI Pros as **👤 REAL** cards, with role, company, how you know them, cost, notes, a log (meetings, advice, documents, costs) and the next touchpoint. Phone and email stay private: your AI Pros never see them.
- **💡 Who do I need?** Your Lead names the roles that genuinely need a human, and when. For a timber-frame home: a structural engineer, a soils firm for the karst, the county septic evaluator and a construction lender.
- **🗓 Prep a meeting:** one click asks your Lead for an agenda and the questions to ask.
- **The timeline adjusts for real people.** Adding someone usually moves the schedule, so your Lead reviews it against their availability and lead times and proposes changes you apply or keep: *"Bob can't get out to the land until about week 7… I'm pushing final plans and bids back one week… we still break ground on time."* You can also ask for a review anytime from the timeline.

## v0.9.11 · Nov 3 · Suspend, archive, delete

- **⏸ Suspend a project** (in the full prototype): it stays in your list but goes on hold. It isn't counted as waiting on you, and your Chief won't push it. Resume anytime.
- **Safer deletes:** type **Delete** to confirm. If the project has anything worth keeping (first deliverables, documents, chats, checked-off tasks), Chief says so and recommends **Archive instead**, which keeps everything but hides it.

## v0.9.10 · Nov 3 · Honest timelines

- **"Is there a deadline on this?"** Chief asks up front: within 6 months, a year, 2 years, as soon as possible, no rush, or a date you type.
- **The Lead's honest reality check.** After the Pros' questions, your Lead says how long this really takes for your scope, with the long poles spelled out, and gives you choices. Tested on a timber-frame home "within a year": *"I'll be straight with you: that's very ambitious… realistically about 22 months,"* then Realistic, Middle or Your deadline (which names the rush fees and risks).
- **Your choice shapes everything:** the plan, the Staff's timeline (now up to 3 years) and the project's priority. Pushing for faster than realistic makes it High priority on a strict schedule. You see it on the plan, the project page and the Chief page.

## v0.9.9 · Nov 3 · Chief on your phone

- **Chief on Telegram** (in the full prototype): your own private bot, run by SpinUp on your PC, answering only you.
  - Ask how your projects are going, and Chief answers knowing every Lead, Pro, task and next step.
  - Start a message with a Pro's name ("Dana, what should I focus on this week?") and it goes straight to that Pro's own session; the reply comes back labeled.
- **Name your Chief.** Give your Chief a name on the Chief page. It's used across SpinUp and becomes the bot's name on Telegram.
- **Connect from the page.** A Telegram badge sits next to your Chief's name: grey with a ＋ when it isn't connected, blue with a green dot when it's live. Click it to paste your bot token. SpinUp checks the token with Telegram, keeps it private on your PC and starts the bot right away; click again to switch bots or disconnect.
- **Your ticks count everywhere:** checking off your tasks is saved on your PC, so Chief knows what's done.

## v0.9.8 · Nov 2 · Chief thinks before it picks

- **No more keyword shortcuts.** Every goal now goes to Claude, and the built-in teams (office remodel, becoming a doctor) are just options Chief may choose when the goal truly fits. It judges meaning, not words:
  - "Become a pediatrician" gets the doctor team, though no keyword list had it.
  - "Find a good doctor for my dad" gets a Patient Advocate.
  - "Study for the AIGP exam" gets an AI governance certification coach.
- **"Right person for this?"** After introducing your Lead, Chief checks. Tap **Someone else**, or just type who you'd rather talk to ("an interior designer"), and Chief finds a different kind of expert. You get up to three tries.
- Without the helper running, SpinUp still uses its strict keyword check for the built-in teams.

## v0.9.7 · Nov 2 · The right Lead, every time

- **Fixed: "I want to become independently wealthy" got a general contractor.** The built-in remodel team was triggered by the word "den" hidden inside "indepen**den**tly". The built-in teams now match whole words only: the remodel team needs a space *and* a remodel word, and the doctor team needs "become a doctor", not "find a doctor". Everything else goes to Claude, which now picks a Certified Financial Planner for that goal.

## v0.9.6 · Nov 2 · Listen, and name your Staff

- **🔊 Read aloud on the project page,** in each person's voice. Click 🔊 to hear any Pro's chat reply, any first deliverable, or any document a Pro wrote; click again to stop. It uses the browser's own natural voices and skips tables and symbols. The public demo's project page has it too.
- **✏️ Rename anyone** (in the full prototype): click ✏️ next to a Pro's or the Lead's name. The new name takes effect from their very next reply ("I'm Bubba, your Rural Land & Site Evaluator…").

## v0.9.5 · Nov 2 · The Chief page

- **All your projects on one page** (in the full prototype). Chief's page puts you at the top, then a card for every project with:
  - its Lead and Pros;
  - what's waiting on you;
  - what the Staff does next;
  - how many files they've written.

  Chief's one-line read tells you which project needs you most.
- **Archive, restore and delete.** Archiving is one click and fully reversible. Deleting is permanent and asks you to type the project's name first. Demo projects stay apart and can't be deleted.
- **Linked everywhere:** from the SpinUp start page, and back from every project page.

## v0.9.4 · Nov 1 · A clearer label

- **The label at the top now says what SpinUp is: "An AI Staff for any goal."** It's on the demo, the project page and the videos.
- **No more blank space beside a big Staff.** On wide screens the conversation now stretches to match the Staff panel's height as Pros join, instead of stopping short.
- **"Switch to Microsoft Edge" banner.** The demo talks, and Edge has the most natural voices, so other browsers now show a banner with **Open in Edge** (on Windows it opens Edge straight to the demo) or **Copy link**. Dismiss it once and it stays gone.
- **An architecture page** (`architecture.html`) shows how SpinUp is built on one page: the browser pages, the local helper and its endpoints, Claude Code in two modes (locked-down one-shot calls and sandboxed Pro sessions), Claude Opus, where everything lives, how the demo and videos are made, and the guardrails.

## v0.9.3 · Nov 1 · Chief reacts, and the plan keeps growing

- **Chief reacts to your goal,** in a line that fits it, instead of always saying "Good one": "Your own coffee shop! Let's get you brewing," or, for something hard, "I'm so sorry. Let's get you real support, step by step." The line comes with the Lead, so it costs no extra call.
- **You can still add things after the plan.** At "Want me to put your Staff to work?", typing something new ("I also want a home gym in the garage") no longer counts as "not now." The Lead works it in, new Pros join and ask their questions, the plan is rewritten, and then the offer comes back.
- **The Chief page design is approved** (the org chart of all your projects, in the SOP). It gets built once there's a first real project.

## v0.9.2 · Nov 1 · Token tracker and "Try again"

- **A token tracker.** Every Claude call SpinUp makes is logged with its real token counts: finding the Lead, staffing, the plan, change orders, setup, each first deliverable, each chat message. Runs from before the tracker were filled in from Claude Code's saved transcripts.
- **What it costs, on many models.** The tracker prices one full run (start to first work), one chat message and all the work so far at API rates for Claude, OpenAI and Google models. On today's setup a full run is about 31¢ and a chat message about 7¢ at API prices.
- **Now on Claude Opus 5.5.** The tracker showed that "Opus" had been quietly running as Claude Opus 4.7, because the copy of Claude Code SpinUp used was too old for Opus 5.5. Claude Code is updated, so every call now runs on Opus 5.5, about 20% cheaper per run at API prices. The tracker marks whichever model the latest call actually used.
- **"Try again" when setup fails.** If putting the Staff to work fails, for example because the helper restarted, SpinUp keeps your answers and plan and offers Try again instead of a dead end.

## v0.9.1 · Nov 1 · Your words stay your words

- **Typed answers are kept as typed.** Before, SpinUp tried to match what you typed to an answer button, and one shared word was enough. "I eat two meals and snack a lot" got turned into "Three meals, no snacks," and correcting it kept snapping back. Now a button is only used when what you typed *is* that button.
- **Spoken answers need a real match:** at least half the button's key words. A "no," "not" or "never" on one side only rules a button out.
- **Changing an answer to the same thing** now says "nothing changed" instead of showing a change.
- **Plus the SOP:** a step-by-step map of how SpinUp works, with every piece marked built, partly built or not built yet, and a mockup of the Chief page (all your projects as an org chart).

## v0.9 · Nov 1 · Chief, Lead, and "anything to change?"

- **Chief greets you.** Chief is your right hand and the same in every run, with its own voice. Chief meets you, finds the right expert and introduces them: "Good one. Your Lead for this is Carlos Mendoza, food truck owner."
- **"First Call" is now "Lead."** One syllable no one misreads. The Lead's card carries a LEAD badge.
- **A check-in before the plan.** Once every Pro has asked their questions, the Lead asks: "Is there anything you'd like to change or add?"
  - **Change an answer:** pick it from a list, and that Pro asks again. The Lead confirms ("Got it: Modern → Coastal") and the plan uses the new answer.
  - **Add something:** the Lead works it in like a change order. New Pros can join if the goal grew.
- **Videos re-rendered** with Chief and the Lead. The long cut (3:13) now ends on the chat panel, with real exchanges with the Lead and the finance Pro. The short cut is 2:11.
- **Launcher fix.** Starting SpinUp twice no longer stacks up windows. If it's already running, it just opens the page.

## v0.8 · Oct 31 (evening) · Talk to your Staff

- **Every Pro is a real AI session you can talk to.** Each Pro, and the Lead, has its own Claude Code session that picks up where you left off each time you write. An idle Pro costs nothing.
- **Chat tabs on the project page.** "💬 Talk to Priya" opens a panel with a tab for each Pro, like having several chats open.
- **Pros write documents.** Ask for a budget or a checklist and the Pro saves it in its folder, ready to open from the chat.
- **Locked down, and tested.** Each Pro can only read and write in its own folder and search the web. No email, no commands, no access to your other files. A test asking a Pro to read and write outside its folder was blocked by the tools themselves, not just by its instructions.
- **A short cut for X** (under X's 2:20 limit).
- **Name for the main consultant chosen:** Chief.

## v0.7 · Oct 31 (afternoon) · Put your Staff to work

- **After the plan, the Lead offers to put the Staff to work.** Say yes and:
  - each Pro becomes an agent with what it knows, its rules (always including "draft-only"), a watch list and how it reports;
  - each Pro does a first piece of real work: a menu spec, a truck comparison, a prospect list, a permit checklist, a budget.
- **Every idea gets a project home page** with:
  - your Staff as agents;
  - Today: what's yours to do vs. what the Staff is handling;
  - their first work, ready to open;
  - a timeline by owner;
  - decisions so far and how the idea grew;
  - everything the Staff knows.
- **Answers sound human.** In the demo, the person's spoken answers include natural thinking noises with real pauses ("Hmm, let me think… ah, personal savings"). The screen still shows the clean answer.
- **Better voices.** Dropped a voice that sounded robotic; the most natural voices are used first.
- **The video walks the project page,** narrated stop by stop.
- **Fixes:**
  - The setup step now sees the whole Staff, so each task goes to the right Pro.
  - The demo no longer asks to put the Staff to work five times.
  - The page fits a phone screen.

## v0.6 · Oct 31 (midday) · A demo anyone can watch

- **A zero-install demo.** Four real runs (a taco truck, a family trip to Japan, a surprise 50th, a backyard garden) replay in the browser with voices. No account, no install.
- **The person gets a voice too:** the goal is typed out and answers are spoken, and the Lead reads the plan's next steps aloud.
- **Videos rendered from the real runs:** a screen version and a laptop-mockup version with keys that light up as words are typed.
- **Launch posts drafted** for LinkedIn and X.

## v0.5 · Oct 31 (late morning) · Change orders

- **Change direction mid-conversation.** Say "actually, I also want…" and the Lead issues a change order:
  - new Pros join and speak next;
  - Pros who aren't needed step out;
  - only the answers the change affects get asked again.
- **A live "What we're doing" bar** that updates as the idea grows.
- **A thinking indicator** for every wait: a small brain with sweeping light rays, a status line and a timer.
- **Four fresh demo goals,** natural voices only.
- **The bigger idea took shape:** you're the CEO, and a team of AI experts works for you.

## v0.4 · Oct 31 (morning) · Any goal

- **SpinUp works for any goal,** not just the built-in examples. A small helper on your PC runs Claude to find the Lead, staff the team and write the plan.
- **A library that learns:**
  - experts it has used come back, with a growing bench of specialists;
  - ☆ star an answer and SpinUp remembers it about you;
  - every run is saved as its own project.
- **Answer any way you like:** tap, type, or talk, with a microphone on the goal box and on every question.
- **Click any message to hear it** from that point on.

## v0.3 · Oct 31 · SpinUp is born

- **Renamed from "Cabinet Builder" to SpinUp.**
- **A library of leads.** Built-in teams for an office remodel and "become a doctor," plus a greeter that finds an expert for anything else.

## v0.2 · Oct 31 · It talks

- **Every person speaks in their own natural voice,** taking turns like a real conversation.
- **Talk back:** answer out loud.
- **A voice speed slider,** remembered between visits.
- **The conversation scrolls in its own window,** so the page doesn't jump.

## v0.1 · Oct 31 · Cabinet Builder

- **A clickable mockup for remodeling an office.** A general contractor narrows the job, then brings in a designer, a permit expert, a carpenter, an electrician, a painter, flooring, furniture and an estimator. Each one asks their questions in the order the work happens, and it ends with a plan.

---

## Decisions along the way

- **SpinUp is an idea to share, not a product.** The goal is to show a new way to think about AI agents. Wiring agents together is the easy part; deciding who should be in the room is the hard part.
- **Names:**
  - You (CEO) → Chief → Lead → Pros, and the Pros together are your Staff.
  - SpinUp is the tool; the bigger idea is that you're the CEO of your own AI Staff.
- **Claude Opus** runs it, with extended thinking off (just as fast, and tighter teams).
- **Each Pro is a real, resumable session** rather than a fresh call each time. That's the honest version of "your Staff is working."
- **Draft-only, always.** Nothing is sent, bought, booked or signed without the person.

## What's next

- **Chief on Telegram:** one bot that answers you and passes "Priya, …" straight to that Pro.
- **A "my projects" list** on the SpinUp page.
- **The public repo and demo page** on GitHub.
- **A short follow-up clip** showing the check-in before the plan.
- **Later:** pros that cross-check each other's numbers, and options beyond Claude Code (an API key, or OpenRouter) so more people can try it.
