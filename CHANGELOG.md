# SpinUp changelog

SpinUp started on October 31, 2026 as "Cabinet Builder," a clickable mockup for one office remodel. Two days later it builds a team for any goal, puts that team to work, and lets you talk to each member one on one. Newest changes first.

**The chain today:** You (the CEO) → 🧭 Chief (your right hand) → Lead (the expert for this goal) → Pros (your Staff)

---

## v0.9.13 · Nov 3 · Your own words always get a team

- **⏱ Time and value.** The project page has a new card, and the chat a timer strip, showing what working with your Staff was worth.
  - **Your time:** how long you spent with each Pro, worked out from the chat timestamps. A gap of 15 minutes or more starts a new sitting, so time away isn't counted.
  - **The same work from a person:** the hours a human in that role would bill for what they'd really hand over, such as a drawing set rather than a web page. It's one small, conservative AI estimate per file version. That's multiplied by the local going rate, and ✏️ sets your own rate.
  - **The AI cost.**
  - **👍 Got what I needed** marks the Pros whose work you actually used.
  - **📋 Copy** gives you a sentence you can tell someone: "I spent 2h 19m with Jane, my AI Interior Designer…"
  - **The token tracker no longer overcounts chats.** A resumed chat reports a running total, and the tracker was adding those totals together. It now counts each message once: the remodel project's AI cost goes from $168 to about $12, and SpinUp's total from $186 to $28.
- **Your whole chat history, and ☆ stars that become preferences.**
  - Each Pro's chat now keeps every message back to the first one; it used to keep only the last 200.
  - Opening a chat shows the newest 30. **⤒ Earlier messages** at the top loads 30 more each time and keeps your place, and **⇞ From the start** loads everything.
  - **☆ on any message** (yours or a Pro's) saves it as a preference that every Lead and Pro sees. Select part of a message first to save just that part. Pros you're already talking to hear about the new star with your next message.
  - Click ★ again to take it back. Removing it under About you on SpinUp Home un-stars the message too.
- **One SpinUp home.** Everything SpinUp keeps is now in one folder, `Documents\SpinUp`: `library` (your projects, experts, profile and logs), `pros` (each Pro's own folder) and `work`. A backup or a move is one folder. Older installs move over by themselves the first time the helper starts. It copies rather than moves, keeps the old folders as a backup, and carries every Pro's memory over. **📂** in the Files panel opens the project's folder in File Explorer, and 📂 on an open file shows that file there.
- **Talk to your Staff is now a workspace.** Your Pros are listed down the left, with every Pro's folders and files below them. Click a file and it opens beside the chat, so you can read a draft and talk about it at the same time. Markdown is formatted, text and CSV show as text, and images show as images. **A web page a Pro made runs as a real page**, right there or with ↗ Open in browser. It's served from its own file-only address that the helper refuses, so the page can't send messages as you or change anything. **↗ New tab** opens the whole workspace in its own tab. On a phone, ☰ slides the list in.
- **SpinUp Explained has a recorded, natural voice.** Every line is pre-voiced with one Microsoft neural voice (Andrew Multilingual) and built into the page, so Chrome, Safari and phones sound the same as Edge instead of a flat system voice. The page is still one file (about 1.4 MB).
- **SpinUp Explained now ends on a "Try the demo" button** that opens the live demo, and the demo link uses the full address, so it works from a copy someone was emailed.
- **SpinUp Explained, on the demo site and as a 73-second film.** `explained.html` is the two-minute idea for people who don't use AI (you're the CEO, with a Chief, a Lead and Pros), narrated and animated, with four examples. The short film (`spinup-explained-trip.mp4`, 4:5, captions burned in) tells it in 11 scenes for a feed.
- **Guardrails for health, money, legal, insurance and safety advice, on any AI model.** The rules are plain code ([spinup-guard.mjs](spinup-guard.mjs)), not the AI's judgment.
  - A project in one of these areas asks you once, before its Staff starts, to accept that your Staff is AI and that you'll check with a professional before acting.
  - Every reply from those Pros carries a fixed line naming who to check with.
  - A high-stakes to-do can't be ticked done until you name who reviewed it, or record that you're doing it without a professional.
  - Pros won't give doses, medication changes, buy/sell calls on a specific investment or certain-sounding legal deadlines. If one slips through, SpinUp adds its own warning.
  - Acceptances and overrides go into a tamper-evident safety record (each entry is chained to the one before) and come with a Telegram receipt.
- **⚠️ Report a wrong answer, and see it fixed.** Every Pro reply has a "⚠️ Wrong?" button: say what's wrong, and tick "could cause harm" to pause that Pro. 🐞 Feedback also has "AI got it wrong". Each report goes into the 🛡️ Incident log on SpinUp Home, with a review time (24 hours for harmful or security, 7 days for wrong) and a place to record the fix. The Pro is told about the flagged answer, owns it and corrects it in its next reply.
- **🛡️ Chief is your Security Czar.** After every Pro reply, SpinUp checks in code for three warning signs: a Pro's "⚠️ Heads-up", an email address the project has never used, or instructions aimed at AI in something the Pro read (a web page, an email or a file). It pauses that Pro, turns Google off for the project, messages you on Telegram (reply "resume" or "details"), and shows a red banner on SpinUp Home and the project page until you resume. A project can be set to "alert only". Chief knows about every open alert and can explain it.
- **Harder to hijack, clearer on high stakes** (from the first outside review). Pros treat what they read on the web, in email or in files as information, never as instructions, and tell you if something tried to steer them. Answers about permits, law, taxes, insurance, health or money cite their sources, stay marked DRAFT, and say who to confirm them with.
- **Clearly AI.** Every Chief, Lead and Pro message carries an "AI" tag, and the conversation, the project page, the chat panel and the demo all say the Staff is AI agents with AI voices, not people. Pros say so plainly if asked and never claim a license or credentials. This follows the EU AI Act's transparency rule (Article 50): people should know when they're talking to AI.
- **🔇 Mute, always on screen.** A button in the bottom-right corner mutes or unmutes every voice at once, wherever you've scrolled, and the M key does the same. It's for when a question comes up mid-sentence. It's the same switch as "🔊 Voices" up top, and SpinUp remembers it.
- **Chief on Telegram sees new projects right away.** Chief gets the current project list with every message, so a project you started after your chat with Chief began shows up immediately.

- **Pick and add.** Tap options *and* type in the box, and both count. Tick "Credit cards", type "brokerage loan", press Continue or Send, and your answer is "Credit cards, Brokerage loan". On a single-choice question, type first and then tap: "Yes · but only the margin part". Your added words go to the Pros and into the plan.
- **The Pros listen to what you type.** If your typed reply isn't really an answer, the Pro treats it as context or a question back, explains, and re-asks. Asked "Are you pulling from retirement to pay down debt?", typing "I'm 22" gets: *"At 22, pulling from a 401(k) or IRA early usually means a 10% penalty plus income tax… Do you have any retirement savings?"* with new choices. The fact is kept for the plan.
- **No more illogical questions.** The Pros' questions are written before you answer anything, so each Pro now re-reads your answers before its turn (and again if you give it new context mid-turn). It skips what's already answered or no longer makes sense, and rewords the rest. Tested: after "I'm 22, no retirement savings", the tax Pro drops "Are you considering pulling from retirement?" and asks instead whether any medical or credit-card debt was settled for less, since that can count as taxable income.
- **The Lead catches conflicting answers.** Before the plan, your Lead reads everything you told the Staff and settles anything that doesn't line up: *"You told Elena you own your home with some equity, but told Kevin you rent an apartment. Which one is right?"* Your answer is what the plan goes by. Most of the time there's nothing to settle, and it moves straight on.
- **Ask your Lead for Staff changes.** In the Lead's chat, "Rename the Staff to US Presidents" gets a proposed lineup (*"Marcus → Truman, the buck stops here fits a budget coach… Elena → Lincoln, he was a lawyer too"*) with an **Apply** button. Nothing changes until you press it, and everyone keeps their role, chats and plan.
- **This project, or everywhere?** A rename can stay on this project (the default, good for themes like Star Trek) or go everywhere: your library, so future projects bring that person in under the new name. SpinUp then lists your other projects with the same person and asks before renaming them there too. The Lead's lineup card has **Apply to this project** and **Apply everywhere**.
- **🏠 SpinUp Home is your page** (in the full prototype; it was "the Chief page"). Your name is the headline ("👤 Tai · CEO", tab "🏠 Tai's SpinUp"), and your Chief sits on a card under you with the ✈️ Telegram badge and ✏️ rename: the first person on your Staff, not the page's owner.
- **👋 Your CEO profile** (in the full prototype, SOP step 0): the first time you open SpinUp Home, your Chief offers a 2-minute intro. Every question is optional: what to call you, city, age range, household, budget comfort, time, DIY or hire, experience, how your Staff should talk to you (playful, straight to the point, warm or detailed, with a humor dial), and optional health or where-you-live notes. Everyone uses it: tested, a Pro greeted the person by name, used their city, planned a side gig around a bad knee, and caught that the profile's age didn't match the project.
- **👤 About you** (in the full prototype): type facts about yourself on SpinUp Home or the start page ("I'm 22", "I live in Houston"), as well as ☆-starring your answers. Your Chief, every Lead and now every Pro in chat use them, so nobody asks twice.
- **G: connect a project to Google** (in the full prototype). The G badge on a project page lets the Pros you pick use the Gmail and Calendar connection **your own Claude already has**: no new sign-in, key or Google app. They can search and read email, look at your calendar and write Gmail drafts. Sending, replying, forwarding, deleting, labeling and adding events are blocked by Claude Code itself, not just by asking nicely, and you send every draft yourself. Connected projects show a G on the Chief page.
- **🐞 Feedback button** in the bottom-left corner of every page, this demo included: Bug, Idea, Confusing or Works great, plus what happened. **Post on GitHub** opens a pre-filled issue on this repo that you check and submit (free GitHub account). By default it includes only the kind, your words, the page, version and browser; tick a box to add the last few messages and the project name, which can hold personal details. In the full prototype, **Save on this PC** also keeps a copy locally.
- **No accidental twins.** Pick a name someone else already has, and SpinUp says so first: *"There's already a Lando (Budget & Cash Flow Coach) on this project. Use it anyway?"* The Lead's lineup card flags them too. A person is their Lead's seat, not their name, so two Steves stay two different people.
- Any phrasing works ("Use names from the original Star Trek", "do it again"), and every lineup gets the Apply button.
- **All your Pros fit in the chat:** the tabs wrap to a second row instead of running off the edge.
- **Every Pro knows where things are.** Ask a Pro for something it can't do ("pause this project") and it points you to the right spot (SpinUp Home, the ✏️, the Lead) instead of guessing.
- **⏭ Skip voice.** While anyone is speaking, a Skip button sits in the corner of the conversation (or press Esc). Fast readers can move on without waiting for the voice.
- **No frozen-looking pauses.** When a Pro is reading your earlier answers, thinking about something you typed, or the Lead is checking for conflicts, a message in the conversation says so ("Reading what you've told the Staff so far...").
- **The Lead's 🔊 next-steps button stays put** in the top-right of the plan, however long the plan's title is.
- **Fix:** when you typed your own answer to the Lead's first question instead of picking a button (for example "Brokerage loan" for "What makes up most of your debt?"), SpinUp staffed 0 Pros and stopped. Now your words go into the goal, every Pro sees them, and the Lead brings in the whole team.

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
