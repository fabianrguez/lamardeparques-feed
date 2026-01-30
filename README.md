# 📡 Feed de La Mar de Parques

Visualización alternativa y moderna del feed RSS del foro de La Mar de Parques.

## ⚠️ Importante - Disclaimer

Este sitio es **independiente y no está afiliado** con La Mar de Parques. Utiliza el feed RSS público del foro para mostrar las publicaciones en un formato alternativo más visual.

- ✅ No almacena contenido
- ✅ No modifica información
- ✅ Todos los enlaces redirigen al foro original
- ✅ Respeta los derechos de autor

[Ver aviso legal completo →](./src/pages/disclaimer.astro)

## 🚀 Características

- ⚡ **Astro 5** - Framework web ultrarrápido
- 🎨 **Tailwind CSS v4** - Estilos modernos y responsivos
- 🌓 **Modo claro/oscuro** - Respeta preferencias del sistema
- 📱 **Responsive** - Diseño adaptable a todos los dispositivos
- 🔍 **SEO optimizado** - Meta tags completos para redes sociales
- 📊 **Sitemap automático** - Para mejor indexación

## 📋 Páginas

- **`/`** - Feed principal con las últimas publicaciones
- **`/disclaimer`** - Aviso legal y términos de uso

## 🛠️ Instalación

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Build para producción
pnpm build

# Preview del build
pnpm preview
```

## ⚙️ Configuración

### Antes de deployar

**Actualiza el dominio en `astro.config.mjs`:**

```javascript
export default defineConfig({
  site: 'https://tudominio.com', // ⚠️ CAMBIAR POR TU DOMINIO REAL
  // ...
});
```

### Variables de entorno (opcional)

Si necesitas personalizar el feed RSS, puedes crear un archivo `.env`:

```env
FEED_URL=https://lamardeparques.es/foro/app.php/feed
```

## 🎨 Personalización

### Colores y tema

Los colores se gestionan mediante Tailwind CSS. Para personalizar, edita:

```javascript
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      colors: {
        // Añade tus colores personalizados
      },
    },
  },
};
```

### SEO

Personaliza los meta tags por página:

```astro
<Layout 
  title="Mi título personalizado"
  description="Mi descripción"
  image="/mi-imagen.jpg"
>
  <!-- Contenido -->
</Layout>
```

## 📦 Stack Tecnológico

- **Framework:** [Astro 5](https://astro.build)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com)
- **Parser RSS:** [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
- **Package Manager:** pnpm

## 🌐 Deploy

Este proyecto puede desplegarse en cualquier plataforma que soporte sitios estáticos:

- [Vercel](https://vercel.com) - Recomendado
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)
- GitHub Pages
- Cualquier servidor web estático

### Deploy en Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy en Netlify

```bash
# Build
pnpm build

# El directorio de output es: dist/
```

## 📄 Estructura del Proyecto

```
lamardeparques-feed/
├── public/
│   ├── favicon.svg
│   ├── og-image.svg       # Imagen Open Graph
│   └── robots.txt         # SEO
├── src/
│   ├── components/
│   │   ├── feed-card.astro      # Card de publicación
│   │   ├── footer.astro         # Footer del sitio
│   │   └── theme-toggle.astro   # Toggle claro/oscuro
│   ├── layouts/
│   │   └── Layout.astro         # Layout base con SEO
│   ├── lib/
│   │   └── feed.ts              # Utilidades para RSS
│   ├── pages/
│   │   ├── index.astro          # Página principal
│   │   └── disclaimer.astro     # Aviso legal
│   └── styles/
│       └── global.css           # Estilos globales
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🔒 Privacidad

Este sitio:
- ❌ No usa cookies de seguimiento
- ❌ No recopila datos personales
- ✅ Solo guarda preferencia de tema en localStorage
- ✅ No tiene analytics por defecto

## 📝 Licencia

Este proyecto es de código abierto. El contenido mostrado pertenece a La Mar de Parques y sus autores originales.

## 🤝 Contribuir

Si encuentras algún problema o tienes sugerencias, siéntete libre de abrir un issue o pull request.

## 📧 Contacto

Para preguntas sobre el contenido original, contacta con [La Mar de Parques](https://lamardeparques.es).

---

**Nota:** Este sitio es un proyecto independiente sin ánimo de lucro que busca ofrecer una experiencia de lectura alternativa del contenido público del foro.
