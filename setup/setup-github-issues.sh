#!/bin/bash
# Setup GitHub Issues integration for Claude Code
# Used by: All conference team skills (lightweight issue tracking)
#
# Uses the GitHub MCP server for issue management
echo "Setting up GitHub Issues integration..."
echo ""

# Check if gh CLI is installed
if command -v gh &> /dev/null; then
  echo "GitHub CLI detected. Checking authentication..."
  if gh auth status &> /dev/null 2>&1; then
    echo "Already authenticated with GitHub CLI."
    echo ""
    claude mcp add github --transport http https://api.githubcopilot.com/mcp/
    echo ""
    echo "Done! GitHub Issues is now available in Claude Code."
    echo "Test it by asking Claude: 'List open issues in this repo'"
    exit 0
  fi
fi

echo "Option 1: Authenticate via GitHub CLI (recommended)"
echo "  brew install gh && gh auth login"
echo ""
echo "Option 2: Use a Personal Access Token"

read -p "Enter your GitHub Personal Access Token (or press Enter to skip): " GITHUB_TOKEN

if [ -z "$GITHUB_TOKEN" ]; then
  echo ""
  echo "Skipped. Install the GitHub CLI and run this script again:"
  echo "  brew install gh && gh auth login"
  exit 0
fi

claude mcp add github \
  --transport http \
  --header "Authorization: Bearer $GITHUB_TOKEN" \
  -- https://api.githubcopilot.com/mcp/

echo ""
echo "Done! GitHub Issues is now available in Claude Code."
echo "Test it by asking Claude: 'List open issues in this repo'"
