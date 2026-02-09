@echo off
:: Neuroterp Email Creator - Instalador
:: Este script abre la aplicación en modo PWA

title Instalando Neuroterp Email Creator...

echo.
echo ========================================
echo   Neuroterp Email Creator
echo   Instalador v1.0
echo ========================================
echo.
echo Abriendo la aplicacion...
echo.

:: Intentar abrir con Microsoft Edge (recomendado para PWAs)
start msedge --app=https://redc9d.github.io/Creador-de-correos/ --window-size=1400,900

:: Esperar 3 segundos
timeout /t 3 /nobreak >nul

echo.
echo La aplicacion se ha abierto en Microsoft Edge.
echo.
echo IMPORTANTE:
echo - Haz clic en el icono de instalacion (+) en la barra de direcciones
echo - Selecciona "Instalar" para tener la app permanentemente
echo - La app aparecera en tu menu de Inicio de Windows
echo.
echo Presiona cualquier tecla para cerrar esta ventana...
pause >nul
