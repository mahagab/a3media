const { writeFileSync, mkdirSync, existsSync } = require('fs');
const { join } = require('path');

const templates = [
  { folder: 'src/pages/paginatemplate1', type: 'template1' },
  { folder: 'src/pages/paginatemplate2', type: 'template2' },
];

templates.forEach(({ folder, type }) => {
  if (!existsSync(folder)) {
    mkdirSync(folder, { recursive: true });
  }

  for (let i = 1; i <= 1000; i++) {
    const path = join(folder, `${i}.md`);
    const htmlContent = type === 'template1'
      ? `
  <main>
    <h1>Try This Easy Evening Trick for Prostate Comfort</h1>
    <p>If you’re over 45, you might have noticed some changes...</p>
    <a href="https://fun.pulseytfun.com/preclick">Click Here to Watch The Video</a>
  </main>
  `
      : `
  <main>
    <h1>This "Diabetic Parasite" is causing deadly glucose spikes in millions of Americans!</h1>
    <video controls src="#"></video>
    <p>Scientific references listed below.</p>
  </main>
  `;

    const content = `---
numero: ${i}
body: |
${htmlContent.trimEnd()}
---`;

    writeFileSync(path, content.trim());
  }
});

console.log('✅ Arquivos .md gerados com sucesso!');
