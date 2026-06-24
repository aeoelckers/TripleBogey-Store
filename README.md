# TripleBogey-Store

Landing page estática para **Triple Bogey Store**, una tienda ecommerce de accesorios de golf con excelente relación calidad-precio para golfistas principiantes e intermedios.

## Ver el sitio localmente

Este proyecto no requiere dependencias externas para funcionar.

```bash
npm run start
```

Luego abre `http://localhost:4173` en tu navegador.

## Validar el proyecto

```bash
npm run build
```

El comando valida la sintaxis de `src/main.js` con Node.

## Subir a Vercel para verlo visualmente

Tienes dos caminos simples: desde la web de Vercel o usando la CLI.

### Opción recomendada: Vercel desde GitHub

1. Sube este repositorio a GitHub.
2. Entra a [vercel.com](https://vercel.com/) e inicia sesión.
3. Presiona **Add New...** y luego **Project**.
4. Importa el repositorio `TripleBogey-Store`.
5. En la configuración del proyecto usa:
   - **Framework Preset:** `Other`
   - **Build Command:** dejar vacío o usar `npm run build`
   - **Output Directory:** `.`
   - **Install Command:** dejar vacío
6. Presiona **Deploy**.
7. Cuando termine, Vercel te entregará una URL pública para revisar la página visualmente.

### Opción alternativa: Vercel CLI

Si prefieres hacerlo desde terminal:

```bash
npm install -g vercel
vercel login
vercel
```

Cuando Vercel pregunte la configuración del proyecto, usa:

- **Framework:** `Other`
- **Build Command:** `npm run build` o vacío
- **Output Directory:** `.`

Para publicar una versión final de producción:

```bash
vercel --prod
```

## Estructura principal

- `index.html`: estructura de la landing page.
- `src/styles.css`: estilos responsive y diseño visual.
- `src/main.js`: renderizado de productos iniciales.
- `package.json`: scripts de ejecución local y validación.
