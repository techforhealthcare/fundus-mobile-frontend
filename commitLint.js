const fs = require("fs");
const path = require("path");

const ruleCommit = "\\[((FS)-(\\d)+)\\]:\\s\\w";

const regExpCommit = new RegExp(ruleCommit, "g");

const msg = `
  # Invalid commit message!
  #
  # Please use the following rules:
  # '[required key]: <required message>'
  #
  # - [required key]: '[FS-{key}]: ', when the {key} is a valid JIRA issue key
  # - <required message>: '{msg}', when the {msg} is a clear commit message
  #
  # For example:
  # '[FS-1234]: Commit message'
`;

const commitPath = path.resolve(
  process.env.HUSKY_GIT_PARAMS || ".git/COMMIT_EDITMSG",
);
const commitMsg = fs.readFileSync(commitPath, "utf8");

if (!regExpCommit.test(commitMsg)) {
  console.error(msg);
  process.exit(1);
}
