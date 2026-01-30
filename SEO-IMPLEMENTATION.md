# SEO Implementation - Feed de La Mar de Parques

## ⚠️ Configuración Importante

### Dominio
Este sitio **NO se publicará en lamardeparques.es**. Tendrá su propio dominio independiente.

**Antes de deployar, actualiza la URL en `astro.config.mjs`:**
```javascript
site: 'https://tudominio.com'  // ⚠️ CAMBIAR POR TU DOMINIO REAL
```

## 📄 Disclaimer y Aviso Legal

Se ha creado una página de disclaimer en `/disclaimer` que explica:
- Este es un sitio independiente, no afiliado con La Mar de Parques
- Utiliza el feed RSS público del foro
- No almacena ni modifica contenido
- Todos los derechos del contenido pertenecen a La Mar de Parques
- Información sobre privacidad y limitación de responsabilidad

**Acceso:** `tudominio.com/disclaimer`

## ✅ Meta Tags Implementados

### Meta Tags Básicos
- ✅ `<title>` - Título dinámico de la página
- ✅ `<meta name="description">` - Descripción SEO-friendly
- ✅ `<meta name="author">` - Autoría del sitio
- ✅ `<meta name="keywords">` - Palabras clave relevantes
- ✅ `<link rel="canonical">` - URL canónica para evitar contenido duplicado

### Open Graph (Facebook, LinkedIn, etc.)
- ✅ `og:type` - Tipo de contenido (website)
- ✅ `og:url` - URL de la página
- ✅ `og:title` - Título para compartir
- ✅ `og:description` - Descripción para compartir
- ✅ `og:image` - Imagen de preview (1200x630px)
- ✅ `og:site_name` - Nombre del sitio
- ✅ `og:locale` - Idioma (es_ES)

### Twitter Cards
- ✅ `twitter:card` - Tipo de tarjeta (summary_large_image)
- ✅ `twitter:url` - URL de la página
- ✅ `twitter:title` - Título para Twitter
- ✅ `twitter:description` - Descripción para Twitter
- ✅ `twitter:image` - Imagen de preview

### Otros Meta Tags Importantes
- ✅ `<link rel="alternate" type="application/rss+xml">` - Feed RSS
- ✅ `<link rel="icon">` - Favicon
- ✅ `<link rel="preconnect">` - Preconexión para rendimiento

## 📦 Archivos Creados

### `/public/og-image.svg`
Imagen Open Graph por defecto (1200x630px) con:
- Diseño moderno con degradado
- Logo/icono de RSS Feed
- Título y subtítulo del sitio
- Grid pattern de fondo

### `/public/robots.txt`
Configuración para crawlers:
- Permite indexación total
- Referencia al sitemap
- Crawl-delay configurado

## 🔧 Configuración

### `astro.config.mjs`
- ⚠️ `site: 'https://tudominio.com'` - **CAMBIAR POR TU DOMINIO REAL**
- ✅ `@astrojs/sitemap` - Generación automática de sitemap

### `Layout.astro`
Props configurables por página:
```typescript
interface Props {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}
```

## 🎯 Valores por Defecto

```javascript
title = "Feed de La Mar de Parques"
description = "Visualización alternativa del feed RSS del foro de La Mar de Parques. Mantente al día con las últimas publicaciones de la comunidad sobre parques de atracciones y temáticos."
image = "/og-image.svg"
url = Astro.url.href
siteName = "Feed de La Mar de Parques"
```

## 📝 Cómo Personalizar SEO en una Página

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout 
  title="Mi Página Custom - La Mar de Parques"
  description="Descripción personalizada para esta página"
  image="/custom-og-image.jpg"
>
  <!-- Contenido de la página -->
</Layout>
```

## 🚀 Siguientes Pasos Recomendados

1. **Generar imagen OG optimizada**: Convertir el SVG a JPG/PNG para mejor compatibilidad
2. **Google Analytics**: Añadir tracking de visitantes
3. **Google Search Console**: Registrar el sitio
4. **Schema.org**: Añadir datos estructurados (JSON-LD)
5. **Performance**: Optimizar Core Web Vitals

## 📊 Testing SEO

Puedes verificar la implementación en:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

## 🌐 Sitemap

El sitemap se genera automáticamente en: `https://tudominio.com/sitemap.xml`

Se actualiza en cada build y contiene todas las páginas del sitio.
