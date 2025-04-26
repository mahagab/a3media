// Script para gerar 1000 arquivos Markdown automaticamente
// Salve este arquivo como "generate-pages.js" e execute com `node generate-pages.js`

const fs = require('fs');
const path = require('path');

const generatePages = (templateFolder, quantity) => {
  // Cria a pasta se ela não existir
  if (!fs.existsSync(templateFolder)) {
    fs.mkdirSync(templateFolder, { recursive: true });
  }

  for (let i = 1; i <= quantity; i++) {
    const content = `---\nnumero: \"${i}\"\n---\n\n<!-- Página ${i} gerada automaticamente -->`;
    const filePath = path.join(templateFolder, `${i}.md`);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Criado: ${filePath}`);
  }
};

// Gera para Template 1 e Template 2

// Ajuste os caminhos conforme seu projeto
const pathTemplate1 = path.join(__dirname, 'src', 'pages', 'paginatemplate1');
const pathTemplate2 = path.join(__dirname, 'src', 'pages', 'paginatemplate2');

// Quantidade de páginas
const quantity = 1000;

console.log('Gerando páginas Template 1...');
generatePages(pathTemplate1, quantity);

console.log('Gerando páginas Template 2...');
generatePages(pathTemplate2, quantity);

console.log('🎉 Concluído!');
