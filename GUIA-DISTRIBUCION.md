# 📧 Neuroterp Email Creator - Guía de Distribución

## ¿Qué archivos enviar?

Puedes enviar **uno de estos dos archivos** por correo electrónico:

### Opción A: `Instalar-Neuroterp.bat` (Recomendado)
- **Uso**: Para instalación inicial
- **Qué hace**: Abre la app y muestra instrucciones de instalación
- **Ventaja**: Guía al usuario paso a paso

### Opción B: `Neuroterp-Email-Creator.bat`
- **Uso**: Para abrir la app rápidamente
- **Qué hace**: Abre la app directamente sin mensajes
- **Ventaja**: Más rápido, ideal para usuarios que ya la tienen instalada

---

## Instrucciones para el Usuario Final

Incluye este texto en tu correo:

```
Hola,

Te envío el **Neuroterp Email Creator**, nuestra herramienta para crear 
plantillas de correos profesionales.

INSTRUCCIONES DE INSTALACIÓN:
1. Descarga el archivo adjunto "Instalar-Neuroterp.bat"
2. Haz doble clic en el archivo
3. Cuando se abra la aplicación en Microsoft Edge:
   - Busca el icono de instalación (+) en la barra de direcciones
   - Haz clic en "Instalar"
4. ¡Listo! La aplicación quedará instalada en tu menú de Inicio

REQUISITOS:
- Windows 10 o superior
- Microsoft Edge (viene preinstalado en Windows)
- Conexión a Internet (solo para la primera instalación)

Una vez instalada, la aplicación funciona offline.

Saludos,
[Tu nombre]
```

---

## ⚠️ Advertencia de Seguridad de Windows

Cuando el usuario ejecute el archivo `.bat`, Windows puede mostrar una advertencia:

**"Windows protegió tu PC"**

**Solución**:
1. Hacer clic en "Más información"
2. Hacer clic en "Ejecutar de todas formas"

Esto es normal para archivos `.bat` descargados de Internet.

---

## Alternativa: Crear un archivo ZIP

Para una distribución más profesional:

1. Crea una carpeta llamada `Neuroterp-Email-Creator`
2. Coloca dentro:
   - `Instalar-Neuroterp.bat`
   - `LEEME.txt` (con las instrucciones)
3. Comprime la carpeta en un archivo `.zip`
4. Envía el `.zip` por correo

---

## Mejora: Crear un Icono Personalizado

Para que el `.bat` tenga un icono profesional:

1. Descarga `Bat To Exe Converter`: https://bat-to-exe-converter.en.softonic.com/
2. Abre el programa
3. Selecciona tu archivo `.bat`
4. Agrega un icono (puedes usar el logo de Neuroterp)
5. Genera el `.exe`

Ahora puedes distribuir un `.exe` con icono en lugar de un `.bat`.

---

## Solución de Problemas Comunes

### "No se reconoce Edge"
Modificar el `.bat` para usar Chrome:
```bat
start chrome --app=https://redc9d.github.io/Creador-de-correos/
```

### "No tengo Internet"
La aplicación necesita Internet la primera vez. Después funciona offline.

### "No puedo instalar por políticas de empresa"
El usuario puede usar el `.bat` directamente sin instalar. Solo debe ejecutarlo cada vez que quiera usar la app.

---

## 🎯 Lista de Verificación para Distribución

- [ ] Probar el `.bat` en tu computadora
- [ ] Probar en otra computadora (si es posible)
- [ ] Crear instrucciones claras
- [ ] Adjuntar el archivo al correo
- [ ] Explicar los requisitos del sistema
- [ ] Mencionar que es seguro ejecutar

---

## Próximos Pasos (Opcional)

Si necesitas una solución más profesional más adelante:
1. **Electron**: Aplicación de escritorio completa (.exe instalable)
2. **MSIX**: Paquete oficial de Microsoft Store
3. **Hosting privado**: Tu propio servidor en lugar de GitHub Pages

¿Necesitas ayuda con alguna de estas opciones avanzadas?
