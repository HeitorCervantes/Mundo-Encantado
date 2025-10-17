
# Landing Page (Next.js + Tailwind)

Este projeto foi gerado a partir do Canvas.

## Rodando localmente
1. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```
2. Rode o servidor de dev:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
3. Abra http://localhost:3000

## Publicando na Vercel (sem terminal)
1. Acesse https://vercel.com/new e clique em **Import Project**.
2. Em **Drag and drop**, arraste este arquivo .zip.
3. A Vercel vai instalar dependências, buildar e gerar uma **URL pública**.

## Publicando na Netlify (sem terminal)
1. Acesse https://app.netlify.com/drop
2. Arraste o .zip (ou a pasta após rodar `npm run build` e usar a saída `.next` com Netlify Adapter).
   *Recomendado usar Vercel para Next.js.*

## Onde editar
- `components/LandingPage.tsx` — a landing em si.
- `app/globals.css` — estilos globais (Tailwind).
