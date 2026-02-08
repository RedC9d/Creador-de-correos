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
    exit
}

Write-Host "✓ Archivos encontrados" -ForegroundColor Green
Write-Host ""

# Opciones
Write-Host "Selecciona una opcion:" -ForegroundColor Cyan
Write-Host "1. Iniciar servidor HTTP (requiere Python)" -ForegroundColor White
Write-Host "2. Iniciar servidor HTTP (requiere Node.js)" -ForegroundColor White
Write-Host "3. Ver instrucciones para GitHub Pages" -ForegroundColor White
Write-Host ""

$opcion = Read-Host "Ingresa el numero de opcion (1-3)"

switch ($opcion) {
    "1" {
        Write-Host ""
        Write-Host "Iniciando servidor Python en puerto 8080..." -ForegroundColor Cyan
        Write-Host "URL local: http://localhost:8080" -ForegroundColor Green
        python -m http.server 8080
    }
    
    "2" {
        Write-Host ""
        if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
            Write-Host "ERROR: Node.js no esta instalado" -ForegroundColor Red
            exit
        }
        if (-not (Get-Command serve -ErrorAction SilentlyContinue)) {
            npm install -g serve
        }
        serve -p 8080
    }
    
    "3" {
        Write-Host ""
        Write-Host "Instrucciones GitHub Pages:" -ForegroundColor Cyan
        Write-Host "1. Ve a tu repo en GitHub -> Settings -> Pages"
        Write-Host "2. Build and deployment -> Source: Deploy from a branch"
        Write-Host "3. Branch: main / (root) -> Save"
    }
}
