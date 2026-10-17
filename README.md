# DevIA web

Sitio estático (index.html + assets). Despliegue en Cloudflare Pages:

    npx wrangler login
    npx wrangler pages deploy . --project-name devia --branch main

Queda publicado en https://devia.pages.dev (o devia-xxxx.pages.dev si el nombre está tomado).
Dominio propio: Cloudflare Dashboard > Workers & Pages > devia > Custom domains.
