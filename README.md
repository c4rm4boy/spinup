# SpinUp

**You're the CEO. Spin up a team for anything.**

Say what you want to do. Your **Chief** (your right hand, the same every time) finds the right **Lead**: the pro a friend would tell you to call first. The Lead narrows the goal and staffs your **Staff of Pros**. Each Pro asks only what they need, in the order the work happens, building on earlier answers. Change direction halfway and the Lead issues a **change order**: new Pros join, and only what changed gets re-asked. Then the Staff goes to work: each Pro becomes an agent with its own rules and watch list, does a first piece of work, and the idea gets its own project page.

**[▶ Try the demo](https://c4rm4boy.github.io/spinup/)**: four real runs, replayed in your browser with voices. No install, no account. Voices sound best in Microsoft Edge.

**🎬 Watch it:** [the full run, 3 min](spinup-taco-truck.mp4) · [the short cut, 2 min](spinup-taco-truck-x.mp4). A taco truck, from "I want to start a taco food truck" to a working Staff you can talk to.

## The idea

Graph engineering is about wiring agents together: who hands off to whom. The harder question comes first: **who should be in the room at all?** People rarely know which specialists a goal needs. A good general contractor does, and so does a good wedding planner or a fishing guide.

SpinUp copies how people already hire experts:

```
You (CEO) → Chief (your right hand) → Lead (the expert for this goal) → Pros (the Staff)
```

1. **Chief and Lead:** Chief greets you; for any goal, Chief finds the Lead, the professional who owns the outcome and already knows which specialists are needed.
2. **Staff of Pros:** the Lead staffs the team, sized to what you're actually doing.
3. **Questions in the right order:** each Pro asks what only they would know to ask, and later Pros build on earlier answers.
4. **Change orders:** ideas grow mid-conversation; the team adapts instead of starting over.
5. **A plan:** each Pro adds what they'd tell you, with real rules of thumb, and the Lead lines up next steps.
6. **Put your Staff to work:** each Pro becomes an agent (rules, watch list, a first deliverable: drafts and research only), and the project gets a home page: your Staff, your to-do list vs. theirs, their first work, a timeline, decisions and what the Staff knows.

In the full prototype, each Pro is a real, resumable Claude Code session you can chat with from the project page. Each one works only in its own folder, can search the web, and can't send email or run commands.

It started as my own AI chief of staff: a "cabinet" of AI leads that runs my week. SpinUp is that idea generalized to any goal.

## What's in this folder

| File | What it is |
|---|---|
| `index.html` | The demo player (one self-contained page) |
| `project.html` | The project home page (open it from the end of the taco-truck demo) |
| `data.js` | The four recorded runs, bundled for the pages |
| `recordings/*.json` | The raw recordings: every line, every answer, the plan |
| `spinup-taco-truck.mp4` | The full video (about 3 minutes) |
| `spinup-taco-truck-x.mp4` | The short cut (about 2 minutes) |

**How the recordings were made:** each goal ran through the live SpinUp prototype (Claude through Claude Code). The person answering was role-played by Claude so the demos are repeatable. Nothing is edited.

## Status

A prototype for exploring an idea, not a product. General guidance only, not professional advice.

Built by Tai Nguyen with Claude Code.
