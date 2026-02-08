# 📦 Guía para Crear Paquete .msix con PWABuilder

## 🎯 Objetivo

Crear un paquete instalable .msix para Windows usando PWABuilder.

---

## ⚠️ Requisito Previo

PWABuilder requiere que tu aplicación esté disponible en un servidor HTTPS. Hay dos opciones:

---

## 🚀 Opción 1: Servidor Local + ngrok (Rápido)

### Paso 1: Instalar un servidor HTTP

#### Usando Python (si ya lo tienes instalado)

```bash
cd "c:\Users\Lenovo\Documents\SitiosWeb\Creador de correos"
python -m http.server 8080
```

#### Usando Node.js

```bash
# Instalar serve globalmente (solo una vez)
npm install -g serve

# Ejecutar servidor
cd "c:\Users\Lenovo\Documents\SitiosWeb\Creador de correos"
serve -p 8080
```

### Paso 2: Instalar ngrok

1. Ve a https://ngrok.com/download
2. Descarga ngrok para Windows
3. Descomprime el archivo
4. Opcional: Crea una cuenta gratuita para obtener un authtoken

### Paso 3: Ejecutar ngrok

```bash
# En una nueva terminal
ngrok http 8080
```

Verás algo como:
```
Forwarding  https://abc123.ngrok.io -> http://localhost:8080
```

Copia la URL HTTPS (ej: `https://abc123.ngrok.io`)

### Paso 4: Usar PWABuilder

1. Ve a https://www.pwabuilder.com/
2. Pega tu URL de ngrok en el campo
3. Haz clic en "Start"
4. Espera el análisis
5. **Revisa los resultados** - Debe mostrar checks verdes
6. Ve a la pestaña "Package For Stores"
7. Selecciona "Windows"
8. Haz clic en "Generate Package"
9. Descarga el archivo .msix

### Paso 5: Instalar el paquete

```bash
# Hacer doble clic en el archivo .msix descargado
# O desde PowerShell:
Add-AppxPackage ruta\al\archivo.msix
```

**Notas:**
- ⚠️ La URL de ngrok es temporal y cambia cada vez que reinicias ngrok
- ✅ Bueno para pruebas rápidas
- ❌ No recomendado para distribución

---

## 🌐 Opción 2: GitHub Pages (Permanente - RECOMENDADO)

### Paso 1: Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre: `neuroterp-email-creator`
3. Público o Privado (tu elección)
4. NO inicializar con README
5. Haz clic en "Create repository"

### Paso 2: Subir archivos al repositorio

```bash
# En la carpeta de tu proyecto
cd "c:\Users\Lenovo\Documents\SitiosWeb\Creador de correos"

# Inicializar git
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit - Neuroterp Email Creator PWA"

# Configurar repositorio remoto (reemplaza con tu URL)
git remote add origin https://github.com/TU_USUARIO/neuroterp-email-creator.git

# Subir a GitHub
git push -u origin main
```

Si no tienes Git, descárgalo de: https://git-scm.com/download/win

### Paso 3: Activar GitHub Pages

1. En tu repositorio de GitHub, ve a "Settings"
2. En el menú lateral, haz clic en "Pages"
3. En "Source", selecciona "main" branch
4. Carpeta: "/ (root)"
5. Haz clic en "Save"
6. Espera unos minutos
7. Tu sitio estará en: `https://TU_USUARIO.github.io/neuroterp-email-creator/`

### Paso 4: Usar PWABuilder

1. Ve a https://www.pwabuilder.com/
2. Pega tu URL de GitHub Pages
3. Haz clic en "Start"
4. **Analiza los resultados**:
   - ✅ Web App Manifest
   - ✅ Service Worker
   - ✅ HTTPS
   - ✅ Icons

5. Si hay advertencias, corrígelas y sube los cambios

6. Ve a "Package For Stores"
7. Selecciona "Windows"
8. Configura:
   - **Package ID**: `com.neuroterp.emailcreator`
   - **Publisher Display Name**: `Neuroterp S.A.S.`
   - **Version**: `1.0.0.0`
   - **Publisher**: Deja el valor predeterminado (o usa tu certificado)

9. Haz clic en "Generate Package"
10. Descarga el .zip
11. Extrae y ejecuta el .msix

**Ventajas:**
- ✅ URL permanente
- ✅ HTTPS automático
- ✅ Fácil de actualizar (git push)
- ✅ Puedes compartir la URL con otros
- ✅ Gratis

---

## 🔧 Opción 3: Script Automatizado (Windows)

He creado un script de PowerShell para automatizar el proceso con servidor local:

### Usar el script:

```powershell
# Ejecutar el script
.\setup-pwa-server.ps1
```

El script:
1. Inicia un servidor HTTP en el puerto 8080
2. Te da instrucciones para usar con ngrok o PWABuilder

---

## 📋 Checklist para PWABuilder

Antes de generar el paquete, verifica:

- [ ] La app carga correctamente en el navegador
- [ ] El manifest.json es válido
- [ ] Los iconos están en la carpeta icons/ (PNG, no HTML)
- [ ] Service worker se registra correctamente
- [ ] La app funciona offline (prueba en DevTools)
- [ ] Todos los recursos se cachean

---

## 🎯 Configuración Recomendada para PWABuilder

Cuando estés en PWABuilder, usa estos valores:

### Windows Package

| Campo | Valor |
|-------|-------|
| **Package ID** | `com.neuroterp.emailcreator` |
| **Package Display Name** | `Neuroterp Email Creator` |
| **Publisher Display Name** | `Neuroterp S.A.S.` |
| **Version** | `1.0.0.0` |
| **Allow Elevation** | No |
| **Classic Package** | Sí (recomendado) |

### Capabilities (Permisos)

- [x] Internet Client
- [ ] Location (no necesario)
- [ ] Webcam (no necesario)
- [ ] Microphone (no necesario)

---

## ❓ Solución de Problemas

### Error: "No se pudo analizar el manifest"

**Solución:**
1. Verifica que `manifest.json` esté en la raíz
2. Valida el JSON en https://jsonlint.com/
3. Asegúrate que la ruta en index.html sea correcta

### Error: "Los iconos no se encontraron"

**Solución:**
1. Crea los iconos PNG desde los templates HTML
2. Guárdalos en la carpeta `icons/`
3. Verifica que los tamaños sean exactos (192x192 y 512x512)

### Error: "Service Worker no se registra"

**Solución:**
1. Verifica que `service-worker.js` esté en la raíz
2. En DevTools → Application → Service Workers
3. Haz clic en "Unregister" y recarga la página

### El paquete .msix no se instala

**Solución:**
1. Haz clic derecho → Propiedades
2. Verifica que no esté bloqueado
3. Ejecuta como administrador
4. Si falla, puedes necesitar habilitar modo desarrollador:
   - Settings → Update & Security → For developers
   - Activa "Developer Mode"

---

## 🎉 Después de Generar el .msix

### Instalar localmente

```powershell
# Opción 1: Doble clic en el archivo .msix

# Opción 2: PowerShell
Add-AppxPackage ruta\al\Neuroterp.msix
```

### Distribuir a otros

1. Comparte el archivo .msix
2. Los usuarios hacen doble clic para instalar
3. La app aparecerá en el menú de inicio

### Actualizar la app

1. Edita los archivos en tu proyecto
2. Sube los cambios (git push si usas GitHub)
3. Incrementa la versión en manifest.json
4. Genera un nuevo .msix en PWABuilder
5. Los usuarios pueden instalar sobre la versión anterior

---

## 📞 Asistencia

Si tienes problemas, puedo ayudarte con:
- Configurar Git y GitHub
- Instalar y usar ngrok
- Corregir errores de PWABuilder
- Crear los iconos PNG

---

**Neuroterp™ S.A.S.** - Extractos 100% Naturales del Quindío 🌿
