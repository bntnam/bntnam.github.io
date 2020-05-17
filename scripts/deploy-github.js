const ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "git@github.com:bntnam/bntnam.github.io.git",
  },
  () => {
    console.log("Deploy Completed!");
  }
);
