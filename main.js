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
      if (err) {
        console.log("\x1b[33m%s\x1b[0m", "Could not find any tags because: ");
        console.log("\x1b[31m%s\x1b[0m", stderr);
        process.exit(1);
      }

      tag = tag.trim();

      exec(`git describe --abbrev=0`, (err, taga, stderr) => {
        if (err) {
          console.log("\x1b[33m%s\x1b[0m", "Could not find any tags because: ");
          console.log("\x1b[31m%s\x1b[0m", stderr);
          process.exit(1);
        }
  
        taga = taga.trim();
        
      
      exec(`git log -1 --pretty=format:"%h"`, (err, hs, stderr) => {
        if (err) {
          console.log("\x1b[33m%s\x1b[0m", "Could not find any tags because: ");
          console.log("\x1b[31m%s\x1b[0m", stderr);
          process.exit(1);
        }
  
        hs = hs.trim();
  
      console.log(`Found tag: ${tag}`);
      console.log(`Found tag a: ${taga}`);
      console.log(`Found tag a: ${hs}`);
      console.log("\x1b[32m%s\x1b[0m", `Found rev: ${rev}`);
      console.log(`::set-output name=tag::${tag}`);
      console.log(`::set-output name=hashp::${hs}`);
      console.log(`::set-output name=taga::${taga}`);
      console.log(`::set-output name=rev::${rev}`);
      process.exit(0);

     }); 
    });
  }
);
