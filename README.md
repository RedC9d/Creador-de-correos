# 📧 Neuroterp™ - Creador de Plantillas de Email

Aplicación profesional para crear y gestionar plantillas de correos electrónicos con el logo de Neuroterp™.

## 🚀 Características

- ✨ **Interfaz moderna y profesional** con efectos glassmorphism
- 📋 **4 plantillas predefinidas** listas para usar
- ✏️ **Editor dinámico** con campos personalizables
- 👁️ **Vista previa en tiempo real**
- 📋 **Copiar HTML** al portapapeles
- 💾 **Descargar HTML** para usar en clientes de email
- 🎨 **Diseño responsive** que funciona en cualquier dispositivo

## 📁 Archivos del Proyecto

```
Creador de correos/
├── index.html          # Estructura principal
├── styles.css          # Estilos modernos
├── script.js           # Lógica de la aplicación
├── templates.js        # Plantillas de email
├── MP.pdf              # Catálogo de productos (agrega este archivo)
└── README.md           # Este archivo
```

## 📝 Plantillas Incluidas

1. **📧 Presentación Inicial** - Primera presentación de productos y servicios
2. **📊 Seguimiento de Cotización** - Email de seguimiento post-cotización
3. **🎁 Promoción Especial** - Email de promociones y descuentos
4. **💚 Agradecimiento Post-Venta** - Email de agradecimiento después de compra

## 🎯 Cómo Usar

### Paso 1: Agregar Recursos
Asegúrate de tener el catálogo en la carpeta del proyecto:
- `MP.pdf` - Catálogo de productos

> **Nota:** El logo ya está configurado para cargarse desde https://neuroterp.com/images/logoNeuroterp3.png

### Paso 2: Abrir la Aplicación

**Opción A: Como aplicación web**
- Simplemente abre `index.html` en tu navegador favorito (Chrome, Edge, Firefox)
- No requiere instalación ni servidor

**Opción B: Instalar como PWA (Recomendado) 🚀**
- Abre `index.html` en Chrome o Edge
- Espera el mensaje "¡Puedes instalar esta app!" y haz clic en "Instalar"
- O haz clic en el ícono de instalación (➕) en la barra de direcciones
- La app se instalará como aplicación nativa de Windows
- **Beneficios:**
  - ✅ Funciona sin conexión
  - 📱 Icono en el menú de inicio
  - ⚡ Más rápida (caché local)
  - 🖥️ Ventana independiente sin barras del navegador

> Para instrucciones detalladas de instalación PWA, consulta [INSTALL-PWA.md](INSTALL-PWA.md)

### Paso 3: Crear un Email
1. **Selecciona una plantilla** del panel izquierdo
2. **Edita los campos** con tu información
3. **Ve la vista previa** en la pestaña "Vista Previa"
4. **Copia o descarga** el HTML usando los botones de opciones

### Paso 4: Enviar el Email

#### Opción A: Copiar y pegar (Más fácil)
1. Haz clic en "📋 Copiar HTML"
2. Abre tu cliente de email (Gmail, Outlook, etc.)
3. Crea un nuevo email y pega el contenido
4. Adjunta el catálogo `MP.pdf`
5. ¡Listo para enviar!

#### Opción B: Descargar archivo
1. Haz clic en "💾 Descargar HTML"
2. Usa el archivo descargado en tu cliente de email o servicio de marketing

## 📨 Usando el Logo en Emails

**✅ Logo ya configurado:** El logo se carga automáticamente desde https://neuroterp.com/images/logoNeuroterp3.png

Esto significa que puedes usar el HTML generado directamente en:
- Gmail (web y móvil)
- Outlook (web y desktop)
- Apple Mail
- Cualquier cliente de email moderno

**Nota:** Algunos clientes de email pueden bloquear imágenes por defecto. Los destinatarios deberán hacer clic en "Mostrar imágenes" para ver el logo

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary: #2dd4bf;      /* Color principal */
    --secondary: #8b5cf6;     /* Color secundario */
    --accent: #f59e0b;        /* Color de acento */
}
```

### Agregar Nuevas Plantillas
Edita `templates.js` y agrega un nuevo objeto al array `emailTemplates`:
```javascript
{
    id: 'mi-plantilla',
    name: '🆕 Mi Plantilla',
    description: 'Descripción de mi plantilla',
    fields: [...],
    generateHTML: (data) => { ... }
}
```

## 💡 Consejos

- **Personaliza cada email** - Edita los campos para cada destinatario
- **Prueba en diferentes clientes** - Gmail, Outlook, etc. pueden mostrar el HTML de forma diferente
- **Usa el catálogo PDF** - Adjúntalo cuando envíes emails de presentación
- **Guarda tus personalizaciones** - Descarga el HTML si necesitas reutilizarlo

## 🔧 Requisitos Técnicos

- Navegador web moderno (Chrome, Edge, Firefox, Safari)
- No requiere conexión a internet (funciona offline)
- No requiere instalación de software adicional

## 📞 Soporte

Para más información sobre Neuroterp™:
- 📱 WhatsApp: 322 369 4572
- 🌐 Web: https://neuroterp.com
- 📧 Email: contacto@neuroterp.com

---

**Neuroterp™ S.A.S.** - Extractos 100% Naturales del Quindío 🌿
