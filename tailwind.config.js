/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ["./src/**/*.{astro,html,js,ts,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        primary: '#800b07', // Cor principal (ex: o vermelho do player)
        secondary: '#f5f5f5', // Um cinza claro para fundo
        accent: '#C53C80', // Um rosa forte para botões e destaques
        dark: '#000000', // Preto para rodapé ou textos
        dkgreen: '#0b241b', // Um verde escuro para o fundo
      },
    },
  },
  plugins: [],
}

