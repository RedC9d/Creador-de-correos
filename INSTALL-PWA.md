# 📱 Instalación de la PWA - Neuroterp Email Creator

Guía completa para instalar y usar la aplicación como una Progressive Web App en Windows.

## 🌟 ¿Qué es una PWA?

Una **Progressive Web App (PWA)** es una aplicación web que se puede instalar en tu computadora como si fuera una aplicación nativa. Beneficios:

- ✅ **Funciona sin conexión** - Usa la app sin internet
- 🚀 **Instalación fácil** - Un clic desde el navegador
- 📱 **App nativa** - Icono en el menú de inicio
- ⚡ **Más rápida** - Los archivos se guardan en caché
- 🔒 **Más segura** - Funciona con HTTPS

---

## 📥 Opción 1: Instalación desde el Navegador (Más Fácil)

### Google Chrome / Microsoft Edge

1. **Abre la aplicación** en tu navegador:
   - Navega a la carpeta: `c:\Users\Lenovo\Documents\SitiosWeb\Creador de correos`
   - Abre `index.html` con Chrome o Edge

2. **Instala la app**:
   - Método A: Haz clic en el ícono de instalación (➕) en la barra de direcciones
   - Método B: Menú (⋮) → "Instalar Neuroterp Email Creator"
   - Método C: Espera el mensaje emergente "¡Puedes instalar esta app!" y haz clic en "Instalar"

3. **Confirma la instalación**:
   - Aparecerá un diálogo de confirmación
   - Haz clic en "Instalar"

4. **¡Listo!**:
   - La app se abrirá en una ventana independiente
   - Encontrarás el icono en tu menú de inicio
   - También puedes fijarla a la barra de tareas

### Firefox

Firefox tiene soporte limitado para PWAs. Se recomienda usar Chrome o Edge para la mejor experiencia.

---

## 💻 Opción 2: Empaquetado con PWABuilder (Aplicación Windows Nativa)

Para crear un instalador `.msix` profesional para Windows:

### Requisitos Previos

- Servidor web local o subir la app a un hosting
- Acceso a [PWABuilder.com](https://www.pwabuilder.com/)

### Pasos

1. **Sube tu aplicación a un servidor**:
   - Opción A: Usa un servidor local (ej: `npx serve`)
   - Opción B: Sube a GitHub Pages, Netlify, o Vercel
   - La app debe estar accesible vía HTTPS

2. **Ve a PWABuilder**:
   - Abre [https://www.pwabuilder.com/](https://www.pwabuilder.com/)
   - Introduce la URL de tu aplicación
   - Haz clic en "Start"

3. **Revisa el análisis**:
   - PWABuilder analizará tu manifest.json
   - Verifica que todos los checks estén en verde
   - Si hay advertencias, corrígelas

4. **Genera el paquete Windows**:
   - Haz clic en la pestaña "Windows"
   - Selecciona "Classic Package"
   - Configura:
     - Package ID: `com.neuroterp.emailcreator`
     - Publisher: Tu nombre o empresa
     - Version: `1.0.0`

5. **Descarga el paquete**:
   - Haz clic en "Generate"
   - Descarga el archivo `.msix`

6. **Instala en Windows**:
   - Haz doble clic en el archivo `.msix`
   - Windows te pedirá permisos
   - Sigue el asistente de instalación
   - ¡La app aparecerá en el menú de inicio!

---

## 🖥️ Uso como PWA Instalada

### Abrir la Aplicación

- **Menú de Inicio**: Busca "Neuroterp" o "Neuroterp Email Creator"
- **Escritorio**: Si creaste un acceso directo
- **Barra de tareas**: Si la fijaste

### Funcionamiento Offline

✅ **Funciona sin internet:**
- Todas las plantillas están disponibles
- Puedes crear y editar emails
- Los estilos y scripts están en caché

⚠️ **Requiere internet para:**
- Cargar el logo desde neuroterp.com (primera vez)
- Fuentes de Google Fonts (primera vez)

Después de la primera carga, todo funciona offline.

### Actualizaciones

La app se actualiza automáticamente cuando:
1. Hay una nueva versión del service worker
2. Te conectas a internet
3. Aparece un mensaje: "Nueva versión disponible. ¿Actualizar ahora?"
4. Haz clic en "Aceptar" para actualizar

---

## 🔧 Servidor Local (Para Desarrollo)

Si quieres probar la PWA localmente con un servidor:

### Opción A: Usar Python

```bash
# Python 3
cd "c:\Users\Lenovo\Documents\SitiosWeb\Creador de correos"
python -m http.server 8080
```

Luego abre: `http://localhost:8080`

### Opción B: Usar Node.js (serve)

```bash
# Instalar serve (solo una vez)
npm install -g serve

# Ejecutar servidor
cd "c:\Users\Lenovo\Documents\SitiosWeb\Creador de correos"
serve -p 8080
```

Luego abre: `http://localhost:8080`

### Opción C: Usar Live Server (VS Code)

1. Instala la extensión "Live Server" en VS Code
2. Abre la carpeta del proyecto
3. Clic derecho en `index.html` → "Open with Live Server"

---

## 🧪 Verificar la PWA

### Lighthouse (Chrome DevTools)

1. Abre la app en Chrome
2. Presiona `F12` para abrir DevTools
3. Ve a la pestaña "Lighthouse"
4. Selecciona "Progressive Web App"
5. Haz clic en "Analyze page load"
6. Verifica que el score sea alto (>90)

### Service Worker (Chrome DevTools)

1. Abre DevTools (`F12`)
2. Ve a la pestaña "Application"
3. En el menú lateral → "Service Workers"
4. Verifica que aparezca "service-worker.js" con estado "activated"

### Cache Storage

1. En DevTools → "Application"
2. En el menú lateral → "Cache Storage"
3. Verifica que existe `neuroterp-email-creator-v1`
4. Haz clic para ver todos los archivos cacheados

---

## ❓ Solución de Problemas

### La app no se instala

**Posible causa:** Necesitas HTTPS o localhost
- **Solución:** Usa un servidor local (ver sección anterior)
- En producción, siempre usa HTTPS

### El service worker no se registra

**Posible causa:** Ruta incorrecta
- **Solución:** Verifica que `service-worker.js` esté en la raíz
- Usa un servidor (no `file://`)

### Los cambios no se reflejan

**Posible causa:** Cache activo
- **Solución 1:** DevTools → Application → "Clear storage" → "Clear site data"
- **Solución 2:** Incrementa el número de versión en `service-worker.js`
- **Solución 3:** Cierra y vuelve a abrir la app

### El logo no aparece offline

**Posible causa:** Logo externo no cacheado
- **Solución:** El logo se carga desde neuroterp.com
- Primera vez requiere internet
- Después queda en caché del navegador

---

## 🚀 Consejos de Uso

### Productividad

- **Fija a la barra de tareas** para acceso rápido
- **Crea accesos directos** en el escritorio
- **Usa offline** cuando estés sin internet

### Mantener Actualizada

- La app se actualiza automáticamente
- Acepta las actualizaciones cuando aparezcan
- Si hay problemas, reinstala desde el navegador

### Compartir con el Equipo

1. Sube la app a un servidor interno
2. Comparte la URL
3. Cada persona puede instalarla en su PC

---

## 📊 Especificaciones Técnicas

### Archivos PWA

- **manifest.json** - Configuración de la PWA
- **service-worker.js** - Manejo de caché offline
- **icons/** - Iconos de la aplicación

### Cache Strategy

- **Strategy:** Cache First
- **Fallback:** Network
- **Assets cacheados:**
  - HTML, CSS, JavaScript
  - Iconos
  - Google Fonts

### Compatibilidad

| Navegador | Instalación | Offline | Notas |
|-----------|------------|---------|-------|
| Chrome 90+ | ✅ | ✅ | Soporte completo |
| Edge 90+ | ✅ | ✅ | Soporte completo |
| Firefox | ⚠️ | ✅ | Limitado (solo Android) |
| Safari | ⚠️ | ✅ | Solo iOS/macOS |

---

## 📞 Soporte

Para más información:
- 📱 WhatsApp: 322 369 4572
- 🌐 Web: https://neuroterp.com

---

**Neuroterp™ S.A.S.** - Extractos 100% Naturales del Quindío 🌿
