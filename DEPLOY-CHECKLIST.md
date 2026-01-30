# 🚀 Checklist para Deploy

Antes de publicar tu sitio en producción, asegúrate de completar todos estos pasos:

## ⚠️ Configuración Obligatoria

- [ ] **Actualizar dominio en `astro.config.mjs`**
  ```javascript
  site: 'https://tudominio.com'  // ⚠️ CAMBIAR
  ```

- [ ] **Actualizar `robots.txt`**
  ```
  Sitemap: https://tudominio.com/sitemap.xml  // ⚠️ CAMBIAR
  ```

## 📝 Contenido (Opcional)

- [ ] Revisar texto del footer en `src/components/footer.astro`
- [ ] Personalizar título en `src/pages/index.astro`
- [ ] Revisar disclaimer en `src/pages/disclaimer.astro`
- [ ] Actualizar meta description si es necesario

## 🎨 Personalización (Opcional)

- [ ] Cambiar imagen Open Graph en `public/og-image.svg`
- [ ] Personalizar favicon en `public/favicon.svg`
- [ ] Ajustar colores en `tailwind.config.mjs`
- [ ] Cambiar fuente si lo deseas

## 🔍 SEO (Recomendado)

- [ ] Generar imagen OG optimizada (JPG/PNG 1200x630px)
- [ ] Agregar Google Analytics (si lo necesitas)
- [ ] Configurar Google Search Console
- [ ] Verificar meta tags con herramientas:
  - Facebook Sharing Debugger
  - Twitter Card Validator
  - LinkedIn Post Inspector

## 🧪 Testing Antes de Deploy

- [ ] Build exitoso: `pnpm build`
- [ ] Preview funciona: `pnpm preview`
- [ ] Todos los enlaces funcionan
- [ ] Toggle de tema funciona
- [ ] Página de disclaimer accesible
- [ ] Feed RSS se carga correctamente
- [ ] Responsive en móvil y desktop

## 🌐 Deploy

### Opción 1: Vercel (Recomendado)

```bash
# Instalar CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

### Opción 2: Netlify

1. Conecta tu repositorio de GitHub
2. Build command: `pnpm build`
3. Publish directory: `dist`
4. Deploy!

### Opción 3: Cloudflare Pages

1. Conecta tu repositorio
2. Framework preset: `Astro`
3. Build command: `pnpm build`
4. Output directory: `dist`

## ✅ Post-Deploy

- [ ] Sitio accesible en tu dominio
- [ ] Sitemap funciona: `tudominio.com/sitemap.xml`
- [ ] Robots.txt funciona: `tudominio.com/robots.txt`
- [ ] Open Graph preview correcto (prueba compartiendo en redes)
- [ ] Performance óptimo (usa Lighthouse)

## 📊 Monitoreo (Opcional)

- [ ] Configurar Google Analytics
- [ ] Configurar Google Search Console
- [ ] Configurar alertas de uptime (UptimeRobot, Pingdom)
- [ ] Monitorear Core Web Vitals

## 🔒 Seguridad

- [ ] HTTPS habilitado (automático en Vercel/Netlify/Cloudflare)
- [ ] Headers de seguridad configurados
- [ ] No hay claves API expuestas en el código

## 📞 Contacto

- [ ] Añadir información de contacto en disclaimer (si aplica)
- [ ] Configurar email de soporte (si aplica)

---

## 🎉 ¡Listo para Deploy!

Una vez completados todos los pasos obligatorios, puedes deployar tu sitio con confianza.

**Comando rápido:**
```bash
pnpm build && vercel --prod
```
