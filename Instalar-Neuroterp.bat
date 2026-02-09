@echo off
:: Neuroterp Email Creator - Instalador
:: Este script crea un acceso directo en el escritorio

title Instalando Neuroterp Email Creator...

echo.
echo ========================================
echo   Neuroterp Email Creator
echo   Instalador v2.0
echo ========================================
echo.
echo Creando acceso directo en el escritorio...
echo.

:: Crear acceso directo usando PowerShell
powershell -Command "$WshShell = New-Object -ComObject WScript.Shell; $Shortcut = $WshShell.CreateShortcut('%USERPROFILE%\Desktop\Neuroterp Email Creator.lnk'); $Shortcut.TargetPath = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'; $Shortcut.Arguments = '--app=https://redc9d.github.io/Creador-de-correos/ --window-size=1400,900'; $Shortcut.IconLocation = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe,0'; $Shortcut.Description = 'Neuroterp Email Creator - Plantillas Profesionales'; $Shortcut.Save()"

:: Verificar si se creó correctamente
if exist "%USERPROFILE%\Desktop\Neuroterp Email Creator.lnk" (
    echo.
    echo ========================================
    echo   INSTALACION EXITOSA
    echo ========================================
    echo.
    echo   El acceso directo se ha creado en tu escritorio.
    echo   Ahora puedes hacer doble clic en:
    echo.
    echo   "Neuroterp Email Creator"
    echo.
    echo   para abrir la aplicacion directamente.
    echo.
    echo ========================================
    
    :: Abrir la aplicación
    echo.
    echo Abriendo la aplicacion...
    start msedge --app=https://redc9d.github.io/Creador-de-correos/ --window-size=1400,900
    timeout /t 2 /nobreak >nul
) else (
    echo.
    echo ERROR: No se pudo crear el acceso directo.
    echo Por favor, ejecuta este archivo como Administrador.
    echo.
)

echo.
echo Presiona cualquier tecla para cerrar esta ventana...
pause >nul
