const fs = require("fs");
const path = require("path");
const { faker } = require("@faker-js/faker");

// Gera 1000 páginas para template1
for (let i = 1; i <= 1000; i++) {
  const content = `---
title: "${faker.lorem.sentence()}"
buttonUrl: "https://fun.pulseytfun.com/preclick"
buttonText: "${faker.lorem.words(3)}"
body: |
${faker.lorem.paragraphs(5, "\n\n")}
---`;
  const filePath = path.join(__dirname, "content", "paginatemplate1", `${i}.md`);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

// Gera 1000 páginas para template2
for (let i = 1; i <= 1000; i++) {
  const content = `---
title: "${faker.lorem.sentence()}"
body: |
<ul style="list-style: disc inside; max-width: 450px; text-align: left; font-size: 0.7rem;">
  <li>${faker.lorem.sentence()}</li>
  <li>${faker.lorem.sentence()}</li>
  <li>${faker.lorem.sentence()}</li>
  <li>${faker.lorem.sentence()}</li>
  <li>${faker.lorem.sentence()}</li>
</ul>
---`;
  const filePath = path.join(__dirname, "content", "paginatemplate2", `${i}.md`);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}
