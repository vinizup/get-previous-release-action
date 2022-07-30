const { exec } = require("child_process");
exec(
  "git rev-list --tags --max-count=1 --skip=1 --no-walk",
  (err, rev, stderr) => {
    if (err) {
      console.log(
        "\x1b[33m%s\x1b[0m",
        "Could not find any revisions because: "
      );
      console.log("\x1b[31m%s\x1b[0m", stderr);
      process.exit(1);
    }

    rev = rev.trim();

    exec(`git describe --tags ${rev}`, (err, tag, stderr) => {
      if (err) {const { exec } = require("child_process");
2
const core = require('@actions/core')
3
exec(
4
  "git rev-list --tags --max-count=1 --skip=1 --no-walk",
5
  (err, rev, stderr) => {
6
    if (err) {
7
      console.log(
8
        "\x1b[33m%s\x1b[0m",
9
        "Could not find any revisions because: "
10
      );
11
      console.log("\x1b[31m%s\x1b[0m", stderr);
12
      process.exit(1);
13
    }
14
​
15
    rev = rev.trim();
16
​
17
    exec(`git describe --tags ${rev}`, (err, tag, stderr) => {
18
      if (err) {
19
        console.log("\x1b[33m%s\x1b[0m", "Could not find any tags because: ");
20
        console.log("\x1b[31m%s\x1b[0m", stderr);
21
        process.exit(1);
22
      }
23
​
24
      tag = tag.trim();
25
​
26
      console.log("\x1b[32m%s\x1b[0m", `Tag Anterior: ${tag}`);
27
      console.log("\x1b[32m%s\x1b[0m", `Found rev: ${rev}`);
28
      console.log(`::set-output name=tag::${tag}`);
29
      console.log(`::set-output name=rev::${rev}`);
30
      core.setOutput('tagant', ${rev});
31
      core.setOutput('tagm', tag);
32
      process.exit(0);
33
    });
34
  }
35
);
36

        console.log("\x1b[33m%s\x1b[0m", "Could not find any tags because: ");
        console.log("\x1b[31m%s\x1b[0m", stderr);
        process.exit(1);
      }

      tag = tag.trim();

      console.log("\x1b[32m%s\x1b[0m", `Found tag: ${tag}`);
      console.log("\x1b[32m%s\x1b[0m", `Found rev: ${rev}`);
      console.log(`::set-output name=tag::${tag}`);
      console.log(`::set-output name=rev::${rev}`);
      process.exit(0);
    });
  }
);
