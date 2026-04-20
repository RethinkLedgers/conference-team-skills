# Conference Team Skills for Claude

**7 free Claude skills — one for every seat on your conference org chart.**

Built by [Rethink AI LLC](https://rethink-ai.com) · Powered by Claude · AI Ambassador for attendees · ActionNotes for sessions

---

## What this is

Every conference organizing committee has the same 7 roles. Most teams have 1–3 people trying to cover all of them. These Claude skills give each role its own AI counterpart — trained on what that role actually does, wired into the connectors you already use (Gmail, Google Calendar, Google Drive, Zoho CRM).

Install one skill or all seven. Each is self-contained.

---

## The 7 Skills

| Skill | Role | Key Capabilities |
|---|---|---|
| [`general-chair`](./general-chair/) | General Chair / Event Director | Timeline, committee coordination, risk register, board briefings |
| [`program-content`](./program-content/) | Program & Content Chair | Agenda design, CFP, speaker outreach, peer review, run-of-show |
| [`sponsorship`](./sponsorship/) | Sponsorship Lead | Prospect research, deck tailoring, outreach sequences, contracts, activation tracking |
| [`marketing-comms`](./marketing-comms/) | Marketing & Communications | Campaign planning, copy generation, PR, post-event storytelling |
| [`venue-logistics`](./venue-logistics/) | Venue & Logistics Coordinator | Venue RFPs, F&B, floor plans, vendor management, run-of-show |
| [`finance-registration`](./finance-registration/) | Finance & Registration Chair | Budget modeling, registration tiers, sponsor invoicing, expense tracking |
| [`attendee-experience`](./attendee-experience/) | Attendee Experience Lead | On-site helpdesk, networking, session reminders, NPS — powered by AI Ambassador + ActionNotes |

---

## How to install

### Option A — Claude Code (recommended)
```bash
# Clone into your Claude skills directory
git clone https://github.com/rethinkledgers/conference-team-skills ~/.claude/skills/conference-team-skills
```

Each skill folder is immediately available to Claude Code as a skill.

### Option B — Claude.ai Projects
1. Open a Claude Project for your event
2. Copy the contents of any `SKILL.md` file into the project instructions
3. Claude will act as that role for every conversation in the project

### Option C — Download the zip
Download `conference-team-skills.zip` from the [Releases](../../releases) page and extract to your skills directory.

---

## Connectors these skills use

Each skill references Claude connectors where relevant. Connect these in Claude.ai under **Settings → Integrations**:

- **Gmail** — send outreach, confirmations, invoices directly from the conversation
- **Google Calendar** — block event milestones, schedule calls
- **Google Drive** — retrieve documents, contracts, templates
- **Zoho CRM** — track sponsor pipeline and payments (Sponsorship + Finance skills)

---

## The Attendee Experience skill

This skill is different from the others. It runs on two live tools:

**[AI Ambassador](https://msg2ai.xyz)** — SMS and WhatsApp attendee concierge. No app download. 30-second response time. 126 languages. Handles the entire attendee-facing operation on show day: helpdesk, wayfinder, networking matchmaker, session reminders, sponsor messaging, post-event NPS.

**ActionNotes** — AI-powered session and meeting capture. Turns attendee sessions and post-event debriefs into structured notes, action items, and next-year improvement plans automatically.

---

## About Rethink AI LLC

Building AI infrastructure for events, hospitality, and B2B operations.

- [msg2ai.xyz](https://msg2ai.xyz) — AI Ambassador (SMS/WhatsApp event concierge)
- [rethink-ai.com](https://rethink-ai.com) — Rethink AI LLC
- Contact: bart@rethink-ai.com

---

## License

MIT — free to use, modify, and redistribute. Attribution appreciated but not required.
