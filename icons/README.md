# Instrucciones para Crear los Iconos PNG

Los archivos HTML en esta carpeta son plantillas para crear los iconos PNG de la PWA.

## Método 1: Captura de Pantalla Manual

1. Abre `icon-192.html` en tu navegador
2. Presiona F12 para abrir DevTools
3. Presiona Ctrl+Shift+M para activar modo responsive
4. Configura el tamaño a 192x192
5. Toma una captura de pantalla
6. Guarda como `icon-192.png`
7. Repite para `icon-512.html` con tamaño 512x512

## Método 2: Usar una Herramienta Online

1. Ve a https://www.screenshotmachine.com/ o similar
2. Sube los archivos HTML
3. Descarga las capturas como PNG

## Método 3: Diseño Personalizado

Puedes crear tus propios iconos usando:
- Canva (https://www.canva.com/)
- Figma (https://www.figma.com/)
- Adobe Illustrator
- GIMP (gratis)

Requisitos:
- Tamaños: 192x192px y 512x512px
- Formato: PNG
- Fondo: Turquesa (#2dd4bf) o transparente
- Elemento: Email/sobre + hoja/naturaleza

## Método 4: Convertir con Node.js (Avanzado)

Si tienes Node.js instalado:

```bash
npm install -g pageres-cli
pageres icon-192.html 192x192 --filename=icon-192
pageres icon-512.html 512x512 --filename=icon-512
```

## Temporalmente

Mientras tanto, la PWA funcionará pero mostrará un icono genérico del navegador hasta que agregues los PNG.
