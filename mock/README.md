# Mock Conference — FutureStack 2026

This directory contains a complete mock conference demonstrating all 8 skills working together.

**FutureStack 2026** is a fictional 2-day AI infrastructure conference (Oct 15–16, Austin Convention Center, 800 attendees) used to showcase what each skill produces.

## What's in here

```
mock/
├── conference.md                          ← The fake conference definition (all details)
├── README.md                              ← You are here
└── outputs/
    ├── general-chair/
    │   ├── 01-timeline.md                 ← Critical path timeline
    │   ├── 02-risk-register.md            ← Risk register with mitigations
    │   └── 03-board-briefing.md           ← Executive status briefing
    ├── program-content/
    │   ├── 01-agenda.md                   ← 2-day agenda grid
    │   ├── 02-speaker-outreach-email.md   ← Personalized speaker outreach
    │   └── 03-speaker-tracker.md          ← Speaker pipeline tracker
    ├── sponsorship/
    │   ├── 01-outreach-sequence.md        ← 3-email sponsor outreach cadence
    │   ├── 02-activation-tracker.md       ← Sponsor deliverables matrix
    │   └── 03-sponsor-roi-report.md       ← Post-event sponsor value report
    ├── marketing-comms/
    │   ├── 01-campaign-calendar.md        ← Week-by-week marketing plan
    │   ├── 02-email-copy.md               ← 4 ready-to-send email campaigns
    │   └── 03-press-release.md            ← Event announcement press release
    ├── venue-logistics/
    │   ├── 01-floor-plan-brief.md         ← Written floor plan layout
    │   ├── 02-vendor-tracker.md           ← Vendor status tracker
    │   └── 03-run-of-show.md              ← Minute-by-minute Day 1 playbook
    ├── finance-registration/
    │   ├── 01-budget.md                   ← Full event P&L with scenarios
    │   ├── 02-registration-tiers.md       ← Ticket tier design
    │   └── 03-sponsor-invoice.md          ← Professional sponsor invoice
    └── attendee-experience/
        ├── 01-faq.md                      ← 20-question pre-event FAQ
        ├── 02-ai-ambassador-config.md     ← SMS/WhatsApp concierge setup
        └── 03-post-event-report.md        ← NPS + post-event analysis
```

## How the skills connect

These outputs demonstrate the cross-skill connections built into every skill:

```
General Chair (aggregates everything)
    ↑ timeline status    ↑ revenue data     ↑ campaign metrics
    |                    |                   |
Program & Content → Marketing & Comms ← Sponsorship
    ↓ session schedule   ↓ speaker names     ↓ booth requirements
    |                    |                   |
Venue & Logistics ← Finance & Registration → Attendee Experience
    ↓ venue layout       ↓ registration count ↓ session reminders
    └────────────────────┴───────────────────┘
```

| From Skill | To Skill | What's handed off |
|---|---|---|
| Program & Content | Marketing & Comms | Speaker names, bios, session titles for promotion |
| Program & Content | Venue & Logistics | Session schedule for room assignments and AV |
| Sponsorship | Finance & Registration | Confirmed revenue for budget reconciliation |
| Sponsorship | Marketing & Comms | Logos and tier info for website and signage |
| Sponsorship | Venue & Logistics | Booth specs for floor plan |
| Finance & Registration | Sponsorship | Attendee demographics for prospect pitches |
| Finance & Registration | Venue & Logistics | Attendee count for catering |
| Venue & Logistics | Attendee Experience | Venue layout for wayfinding |
| Marketing & Comms | All skills | Event website URL and registration link |
| Attendee Experience | Marketing & Comms | NPS and feedback for post-event content |
| All skills | General Chair | Status updates for board briefings |

## Using this as a template

To plan a real conference with these skills:

1. Copy `conference.md` and replace with your event details
2. Open Claude Code and use the skills naturally:
   ```
   "Build the timeline for my conference — event date is March 20, 500 attendees"
   "Write outreach emails for 3 sponsor prospects"
   "Design the registration tiers"
   ```
3. Each skill produces outputs like the ones in `outputs/` — ready to use
