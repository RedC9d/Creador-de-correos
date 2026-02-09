# 📦 Guía: Crear Paquete MSIX Manualmente

## Método 1: PWABuilder CLI (Recomendado - Más Fácil)

### Requisitos Previos
- Node.js instalado (versión 14 o superior)
- Windows 10/11

### Pasos

#### 1. Instalar PWABuilder CLI
```bash
npm install -g @pwabuilder/cli
```

#### 2. Generar el paquete
Desde cualquier directorio, ejecuta:
```bash
pwa-create --url https://redc9d.github.io/Creador-de-correos/
```

El comando descargará tu PWA, analizará el manifest y creará el paquete MSIX automáticamente.

#### 3. Ubicación del paquete
El archivo `.msix` se guardará en la carpeta actual. Búscalo con:
```bash
dir *.msix
```

---

## Método 2: Usando Visual Studio (Avanzado)

### Requisitos
- Visual Studio 2019 o 2022
- Windows App SDK instalado

### Pasos

#### 1. Crear nuevo proyecto
1. Abre Visual Studio
2. Crea un nuevo proyecto → "Blank App (WinUI 3 in Desktop)"
3. Nombre: `Neuroterp Email Creator`

#### 2. Configurar el Manifest
Edita `Package.appxmanifest`:
```xml
<Applications>
  <Application Id="NeuroterperEmailCreator" 
               Executable="$targetnametoken$.exe" 
               EntryPoint="$targetentrypoint$">
    <uap:VisualElements
      DisplayName="Neuroterp Email Creator"
      Description="Creador de plantillas profesionales"
      BackgroundColor="transparent"
      Square150x150Logo="Assets\Square150x150Logo.png"
      Square44x44Logo="Assets\Square44x44Logo.png">
    </uap:VisualElements>
  </Application>
</Applications>
```

#### 3. Agregar WebView
En `MainWindow.xaml`:
```xml
<Window>
    <WebView2 Source="https://redc9d.github.io/Creador-de-correos/"/>
</Window>
```

#### 4. Compilar
- Build → Create App Packages
- Selecciona "Sideloading"
- Genera el paquete MSIX

---

## Método 3: PWA Starter (Más Simple)

### Pasos

#### 1. Descargar PWA Starter
```bash
git clone https://github.com/pwa-builder/pwa-starter-windows.git
cd pwa-starter-windows
```

#### 2. Modificar configuración
Edita `manifest.json` dentro de la carpeta:
```json
{
  "start_url": "https://redc9d.github.io/Creador-de-correos/",
  "name": "Neuroterp Email Creator"
}
```

#### 3. Instalar dependencias y compilar
```bash
npm install
npm run build
```

El paquete MSIX estará en la carpeta `dist/`.

---

## Método 4: Instalación Directa (Sin Paquete)

Si solo necesitas la app para ti, no necesitas crear un MSIX:

### Desde Edge/Chrome:
1. Abre: https://redc9d.github.io/Creador-de-correos/
2. Haz clic en el icono de **instalación** (⊕) en la barra de direcciones
3. Selecciona "Instalar"
4. La app se agregará al menú de Inicio automáticamente

### Ventajas:
- ✅ No necesitas crear ningún paquete
- ✅ Se actualiza automáticamente
- ✅ Funciona exactamente igual que un MSIX

---

## Comparación de Métodos

| Método | Dificultad | Tiempo | Resultado |
|--------|-----------|--------|-----------|
| PWABuilder CLI | ⭐ Fácil | 5 min | `.msix` listo |
| Visual Studio | ⭐⭐⭐ Difícil | 30+ min | `.msix` personalizado |
| PWA Starter | ⭐⭐ Medio | 15 min | `.msix` básico |
| Instalación directa | ⭐ Muy fácil | 1 min | App instalada |

---

## Recomendación

Para tu caso específico, te recomiendo:

1. **Si solo la usarás tú**: Usa la **Instalación Directa** (Método 4)
2. **Si quieres distribuirla**: Usa **PWABuilder CLI** (Método 1)

El Método 1 es el más práctico porque:
- No depende del sitio web de PWABuilder (es local)
- Genera el mismo resultado que la web
- Es automatizado y rápido

---

## Solución de Problemas

### Error: "Node.js no encontrado"
```bash
# Instala Node.js desde:
https://nodejs.org/
```

### Error: "MSIX no válido"
- Asegúrate de que tu `manifest-v3.json` tenga todos los campos requeridos
- Verifica que los iconos existan en las rutas especificadas

### Error: "No se puede instalar el paquete"
- Habilita "Modo de desarrollador" en Windows:
  - Configuración → Actualización y seguridad → Para desarrolladores → Modo de desarrollador

---

## 🎯 Siguiente Paso Recomendado

Ejecuta este comando para generar tu MSIX ahora mismo:

```bash
npm install -g @pwabuilder/cli
pwa-create --url https://redc9d.github.io/Creador-de-correos/
```

¿Necesitas ayuda con algún método específico?
