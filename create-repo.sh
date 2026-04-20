#!/bin/bash
# ============================================================
# create-conference-skills-repo.sh
# Run this from your terminal to create the GitHub repo
# and push all 7 conference team skills.
#
# Prerequisites:
#   - GitHub CLI installed: https://cli.github.com
#   - Logged in: gh auth login
#   - Or set GITHUB_TOKEN env var with a personal access token
# ============================================================

set -e

REPO_NAME="conference-team-skills"
ORG="rethinkledgers"
DESCRIPTION="7 free Claude skills — one for every seat on your conference org chart. Built by Rethink AI LLC."
SKILLS_DIR="$(dirname "$0")"

echo "🚀 Creating GitHub repo: $ORG/$REPO_NAME"

# Create the repo under rethinkledgers org
gh repo create "$ORG/$REPO_NAME" \
  --public \
  --description "$DESCRIPTION" \
  --homepage "https://rethink-ai.com" \
  --clone=false

echo "✅ Repo created: https://github.com/$ORG/$REPO_NAME"

# Init git in the skills directory if not already
cd "$SKILLS_DIR"

if [ ! -d ".git" ]; then
  git init
  git branch -M main
fi

# Stage everything
git add .
git commit -m "Initial commit: 7 conference team Claude skills

- General Chair (Timeline, Committee, Risk, Briefings)
- Program & Content Chair (Agenda, CFP, Speaker, Peer Review, Run-of-Show)
- Sponsorship Lead (Prospects, Deck, Outreach, Contracts, Activation)
- Marketing & Communications (Campaign, Copy, Personas, PR, Recap)
- Venue & Logistics (RFPs, F&B, Floor Plan, Vendors, Run-of-Show)
- Finance & Registration (Budget, Registration, Invoicing, Expenses, Compliance)
- Attendee Experience (AI Ambassador + ActionNotes powered)

Built by Rethink AI LLC — https://rethink-ai.com"

# Set remote and push
git remote add origin "https://github.com/$ORG/$REPO_NAME.git"
git push -u origin main

echo ""
echo "✅ All done!"
echo "🔗 Repo live at: https://github.com/$ORG/$REPO_NAME"
echo ""
echo "Next steps:"
echo "  1. Go to the repo and add topics: claude, ai, conference, events, claude-skills"
echo "  2. Upload conference-team-skills.zip as a Release asset"
echo "  3. Use this URL in your LinkedIn post CTA:"
echo "     https://github.com/$ORG/$REPO_NAME"
