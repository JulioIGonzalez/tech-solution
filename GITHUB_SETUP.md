# Subir el proyecto a GitHub

El repositorio local ya está listo. Para crear el repo en GitHub y subir el código:

## 1. Iniciar sesión en GitHub CLI

En la terminal, dentro de la carpeta del proyecto:

```powershell
gh auth login
```

Seguí los pasos (elegí GitHub.com, HTTPS o SSH, y completá el login en el navegador si hace falta).

## 2. Crear el repo en GitHub y hacer push

Con la sesión iniciada, ejecutá:

```powershell
cd "c:\Proyectos\App Preguntas Argentinas con React  nextjs mas Nodejs\personal-web"
gh repo create techsolutions-iguazu --private --source=. --remote=origin --push
```

Eso crea el repositorio `techsolutions-iguazu` en tu cuenta (privado), configura el remote `origin` y sube la rama `master`.

Si preferís un repo público, usá `--public` en lugar de `--private`.

## 3. (Opcional) Si el repo ya existe en GitHub

Si ya creaste el repo manualmente en GitHub:

```powershell
git remote add origin https://github.com/TU_USUARIO/techsolutions-iguazu.git
git push -u origin master
```

Reemplazá `TU_USUARIO` por tu usuario de GitHub.
