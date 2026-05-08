# Portafolio Next.js de Stephan Suárez

Portafolio construido con Next.js y configurado para export estático en GitHub Pages.

## Ver localmente

```bash
npm install
npm run dev
```

Luego visita `http://localhost:3000`.

## Build estático

```bash
npm run build
```

Next.js generará la carpeta `out/`, que es lo que GitHub Pages publica.

## Publicar en GitHub Pages

Repositorio:

```text
git@github.com:StephanSuarez/portfolio.git
```

1. Sube estos archivos a la rama `main`.
2. En GitHub entra a `Settings` -> `Pages`.
3. En `Build and deployment`, elige `GitHub Actions`.
4. Haz push a `main`. El workflow de `.github/workflows/deploy.yml` construirá y publicará el sitio.
5. GitHub publicará el portafolio en:

```text
https://stephansuarez.github.io/portfolio/
```

Si quieres que el sitio quede en `https://stephansuarez.github.io/`, el repositorio debe llamarse exactamente `StephanSuarez.github.io`.
