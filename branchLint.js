const fs = require("fs");
const path = require("path");

const ruleBranch =
  /^(feature|bugfix|improvement|library|prerelease|release|hotfix)\/FS-(\d+)[a-z0-9._-]+$/;

const regExpBranch = new RegExp(ruleBranch);

const msg = `
  # Invalid branch name!
  #
  # Branch names in this project must adhere to this contract:
  # ${ruleBranch}
  #
  # Your commit will be rejected.
  # Please use the following rules:
  # '[required key1]/{required key2}-<required name>'
  #
  # - [required key1]: '({key1}/', when the {key1} is a type of branch of either
  #   - feature | bugfix | improvement | library | prerelease | release | hotfix
  # - {required key2}: 'FS-{key2}-', when the {key2} is a valid JIRA issue key
  # - <required name>: '{msg}', when the {msg} is a clear branch name
  #
  # For example:
  # 'feature/FS-01-feature-branch-name'
`;

const branchNamePath = path.resolve(
  process.env.HUSKY_GIT_PARAMS || ".git/HEAD",
);

const branchName = fs
  .readFileSync(branchNamePath, "utf8")
  .split("ref: refs/heads/")[1]
  .split("\n")[0];

if (!regExpBranch.test(branchName)) {
  console.error(msg);
  process.exit(1);
}
