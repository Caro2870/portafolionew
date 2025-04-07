# Detener cualquier proceso de Node.js
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force

# Esperar un momento para asegurarse de que los procesos se detengan
Start-Sleep -Seconds 2

# Eliminar el directorio .next
if (Test-Path .next) {
    Remove-Item -Recurse -Force .next
    Write-Host "Directorio .next eliminado."
} else {
    Write-Host "El directorio .next no existe."
}

# Limpiar la caché de npm
npm cache clean --force
Write-Host "Caché de npm limpiada."

# Reinstalar las dependencias
npm install
Write-Host "Dependencias reinstaladas."

# Construir el proyecto
npm run build
Write-Host "Proyecto construido." 