#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const REPO_URL =
  "https://github.com/RethinkLedgers/conference-team-skills.git";
const SKILL_FOLDERS = [
  "general-chair",
  "program-content",
  "sponsorship",
  "marketing-comms",
  "venue-logistics",
  "finance-registration",
  "attendee-experience",
];

// Determine the Claude skills directory based on platform
function getSkillsDir() {
  const home =
    process.env.HOME ||
    process.env.USERPROFILE ||
    (process.env.HOMEDRIVE && process.env.HOMEPATH
      ? process.env.HOMEDRIVE + process.env.HOMEPATH
      : null);
  if (!home) {
    console.error("Error: Could not determine home directory.");
    process.exit(1);
  }
  return path.join(home, ".claude", "skills", "conference-team-skills");
}

function printBanner() {
  console.log("");
  console.log("  Conference Team Skills for Claude");
  console.log("  7 skills — one for every seat on your conference org chart");
  console.log("  Built by Rethink AI LLC — https://rethink-ai.com");
  console.log("");
}

function printUsage() {
  console.log("Usage: npx conference-team-skills <command>");
  console.log("");
  console.log("Commands:");
  console.log("  install     Install skills to ~/.claude/skills/");
  console.log("  uninstall   Remove skills from ~/.claude/skills/");
  console.log("  update      Update skills to the latest version");
  console.log("  list        List all available skills");
  console.log("  help        Show this help message");
  console.log("");
}

function ensureGit() {
  try {
    execSync("git --version", { stdio: "ignore" });
  } catch {
    console.error("Error: Git is not installed.");
    console.error(
      "Install Git from https://git-scm.com and try again."
    );
    process.exit(1);
  }
}

function install() {
  const skillsDir = getSkillsDir();

  if (fs.existsSync(skillsDir)) {
    console.log("Skills are already installed at:");
    console.log("  " + skillsDir);
    console.log("");
    console.log("Run 'npx conference-team-skills update' to get the latest version.");
    return;
  }

  ensureGit();

  // Create parent directory if needed
  const parentDir = path.dirname(skillsDir);
  fs.mkdirSync(parentDir, { recursive: true });

  console.log("Installing skills to:");
  console.log("  " + skillsDir);
  console.log("");

  try {
    execSync(`git clone ${REPO_URL} "${skillsDir}"`, {
      stdio: "inherit",
    });
  } catch {
    console.error("");
    console.error("Error: Failed to clone repository.");
    console.error("Check your internet connection and try again.");
    process.exit(1);
  }

  console.log("");
  console.log("Done! 7 conference team skills are now installed:");
  console.log("");
  for (const skill of SKILL_FOLDERS) {
    console.log("  - " + skill);
  }
  console.log("");
  console.log("Open Claude Code and start using them. Try:");
  console.log('  "Plan the conference timeline — event is Sept 15, 500 attendees"');
  console.log("");
}

function uninstall() {
  const skillsDir = getSkillsDir();

  if (!fs.existsSync(skillsDir)) {
    console.log("Skills are not installed. Nothing to remove.");
    return;
  }

  fs.rmSync(skillsDir, { recursive: true, force: true });

  console.log("Skills removed from:");
  console.log("  " + skillsDir);
  console.log("");
}

function update() {
  const skillsDir = getSkillsDir();

  if (!fs.existsSync(skillsDir)) {
    console.log("Skills are not installed yet. Running install instead...");
    console.log("");
    install();
    return;
  }

  ensureGit();

  console.log("Updating skills...");
  console.log("");

  try {
    execSync("git pull", { cwd: skillsDir, stdio: "inherit" });
  } catch {
    console.error("");
    console.error("Error: Failed to update. Try uninstalling and reinstalling:");
    console.error("  npx conference-team-skills uninstall");
    console.error("  npx conference-team-skills install");
    process.exit(1);
  }

  console.log("");
  console.log("Skills updated to the latest version.");
  console.log("");
}

function list() {
  console.log("Available skills:");
  console.log("");
  console.log("  general-chair          General Chair / Event Director");
  console.log("  program-content        Program & Content Chair");
  console.log("  sponsorship            Sponsorship Lead");
  console.log("  marketing-comms        Marketing & Communications");
  console.log("  venue-logistics        Venue & Logistics Coordinator");
  console.log("  finance-registration   Finance & Registration Chair");
  console.log("  attendee-experience    Attendee Experience Lead");
  console.log("");

  const skillsDir = getSkillsDir();
  if (fs.existsSync(skillsDir)) {
    console.log("Status: Installed at " + skillsDir);
  } else {
    console.log("Status: Not installed");
    console.log("Run 'npx conference-team-skills install' to install.");
  }
  console.log("");
}

// Main
printBanner();

const command = process.argv[2] || "help";

switch (command) {
  case "install":
  case "i":
    install();
    break;
  case "uninstall":
  case "remove":
    uninstall();
    break;
  case "update":
  case "upgrade":
    update();
    break;
  case "list":
  case "ls":
    list();
    break;
  case "help":
  case "--help":
  case "-h":
    printUsage();
    break;
  default:
    console.log("Unknown command: " + command);
    console.log("");
    printUsage();
    process.exit(1);
}
