# Script para configurar servidor local para PWA
# Neuroterp Email Creator

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Neuroterp Email Creator - PWA Server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar si estamos en el directorio correcto
$currentPath = Get-Location
Write-Host "Directorio actual: $currentPath" -ForegroundColor Yellow

if (-not (Test-Path "index.html")) {
    Write-Host "ERROR: No se encontro index.html en este directorio" -ForegroundColor Red
    Write-Host "Por favor, ejecuta este script desde la carpeta del proyecto" -ForegroundColor Red
    Read-Host "Presiona Enter para salir"
    exit
}

Write-Host "✓ Archivos encontrados" -ForegroundColor Green
Write-Host ""

# Opciones
Write-Host "Selecciona una opcion:" -ForegroundColor Cyan
Write-Host "1. Iniciar servidor HTTP (requiere Python)" -ForegroundColor White
Write-Host "2. Iniciar servidor HTTP (requiere Node.js)" -ForegroundColor White
Write-Host "3. Ver instrucciones para usar ngrok" -ForegroundColor White
Write-Host "4. Ver instrucciones para GitHub Pages" -ForegroundColor White
Write-Host ""

$opcion = Read-Host "Ingresa el numero de opcion (1-4)"

switch ($opcion) {
    "1" {
        Write-Host ""
        Write-Host "Iniciando servidor Python en puerto 8080..." -ForegroundColor Cyan
        Write-Host "Presiona Ctrl+C para detener el servidor" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "URL local: http://localhost:8080" -ForegroundColor Green
        Write-Host ""
        python -m http.server 8080
    }
    
    "2" {
        Write-Host ""
        Write-Host "Verificando Node.js..." -ForegroundColor Cyan
        
        $nodeInstalled = Get-Command node -ErrorAction SilentlyContinue
        if (-not $nodeInstalled) {
            Write-Host "ERROR: Node.js no esta instalado" -ForegroundColor Red
            Write-Host "Descargalo de: https://nodejs.org/" -ForegroundColor Yellow
            Read-Host "Presiona Enter para salir"
            exit
        }
        
        Write-Host "Verificando 'serve'..." -ForegroundColor Cyan
        $serveInstalled = Get-Command serve -ErrorAction SilentlyContinue
        
        if (-not $serveInstalled) {
            Write-Host "'serve' no esta instalado. Instalando..." -ForegroundColor Yellow
            npm install -g serve
        }
        
        Write-Host ""
        Write-Host "Iniciando servidor en puerto 8080..." -ForegroundColor Cyan
        Write-Host "Presiona Ctrl+C para detener el servidor" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "URL local: http://localhost:8080" -ForegroundColor Green
        Write-Host ""
        serve -p 8080
    }
    
    "3" {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host "  Instrucciones para usar ngrok" -ForegroundColor Cyan
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "1. Primero, inicia un servidor local (opcion 1 o 2)" -ForegroundColor White
        Write-Host "2. Descarga ngrok de: https://ngrok.com/download" -ForegroundColor White
        Write-Host "3. Descomprime ngrok.exe" -ForegroundColor White
        Write-Host "4. En una nueva terminal, ejecuta:" -ForegroundColor White
        Write-Host "   ngrok http 8080" -ForegroundColor Yellow
        Write-Host "5. Copia la URL HTTPS que aparece (ej: https://abc123.ngrok.io)" -ForegroundColor White
        Write-Host "6. Usa esa URL en PWABuilder.com" -ForegroundColor White
        Write-Host ""
        Write-Host "NOTA: La URL de ngrok cambia cada vez que lo reinicias" -ForegroundColor Yellow
        Write-Host ""
        Read-Host "Presiona Enter para continuar"
    }
    
    "4" {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host "  Instrucciones para GitHub Pages" -ForegroundColor Cyan
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "1. Crea un repositorio en GitHub.com" -ForegroundColor White
        Write-Host "2. En este directorio, ejecuta:" -ForegroundColor White
        Write-Host ""
        Write-Host "   git init" -ForegroundColor Yellow
        Write-Host "   git add ." -ForegroundColor Yellow
        Write-Host '   git commit -m "Initial commit"' -ForegroundColor Yellow
        Write-Host "   git remote add origin https://github.com/TU_USUARIO/REPO.git" -ForegroundColor Yellow
        Write-Host "   git push -u origin main" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "3. En GitHub → Settings → Pages" -ForegroundColor White
        Write-Host "4. Source: main branch, carpeta: / (root)" -ForegroundColor White
        Write-Host "5. Tu app estara en: https://TU_USUARIO.github.io/REPO/" -ForegroundColor White
        Write-Host ""
        Write-Host "Consulta PWABUILDER-GUIDE.md para mas detalles" -ForegroundColor Green
        Write-Host ""
        Read-Host "Presiona Enter para continuar"
    }
    
    default {
        Write-Host "Opcion invalida" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Para mas informacion, consulta PWABUILDER-GUIDE.md" -ForegroundColor Cyan
Write-Host ""
