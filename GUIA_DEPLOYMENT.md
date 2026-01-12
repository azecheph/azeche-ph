# 📘 GUÍA PASO A PASO - SUBIR AZECHE PH A GITHUB PAGES

## 🎯 OBJETIVO
Tener tu sistema Azeche PH accesible desde cualquier dispositivo sin necesidad de servidor local.

---

## ✅ PASO 1: PREPARAR ARCHIVOS (YA HECHO)

Tienes todos los archivos listos en la carpeta `outputs`:
- ✅ 7 archivos HTML del sistema
- ✅ 16 documentos Word de asambleas
- ✅ README con documentación
- ✅ Estructura organizada

---

## 🌐 PASO 2: CREAR CUENTA EN GITHUB (Si no tienes)

1. Ve a [github.com](https://github.com)
2. Click en "Sign up"
3. Crea tu cuenta con:
   - Username: `azecheph` (o el que prefieras)
   - Email: tu email
   - Password: contraseña segura
4. Verifica tu email

---

## 📦 PASO 3: CREAR REPOSITORIO

### Opción A: Desde la Web (MÁS FÁCIL)

1. **Ir a GitHub**
   - Abre [github.com](https://github.com)
   - Inicia sesión

2. **Crear Nuevo Repositorio**
   - Click en el botón verde "New" (arriba a la derecha)
   - O ve directo a: https://github.com/new

3. **Configurar Repositorio**
   ```
   Repository name:    azeche-ph
   Description:        Sistema Administrativo Azeche P.H.
   Public/Private:     ✓ Public (para usar GitHub Pages gratis)
   Initialize:         ☐ NO marques nada (lo subiremos nosotros)
   ```

4. **Crear**
   - Click en "Create repository"

---

## 📤 PASO 4: SUBIR ARCHIVOS

### Opción A: Arrastrar y Soltar (MÁS FÁCIL)

1. **En la página del repositorio vacío**
   - Verás "Quick setup"
   - Busca el enlace "uploading an existing file"
   - O simplemente arrastra archivos

2. **Subir Archivos HTML**
   - Arrastra los 7 archivos .html a la ventana:
     * index.html
     * Dashboard.html
     * edificios.html
     * cuentas-por-pagar.html
     * proveedores.html
     * Residentes_y_Propietarios.html
     * facturas-automaticas.html
   - Scroll abajo
   - En "Commit changes" escribe: "Agregar sistema Azeche PH"
   - Click "Commit changes"

3. **Crear Carpeta documentos**
   - En la página principal del repo, click "Add file" > "Create new file"
   - Escribe: `documentos/README.md`
   - En el contenido escribe: `# Documentos de Asambleas`
   - Commit con mensaje: "Crear carpeta documentos"

4. **Subir Documentos Word**
   - Click en la carpeta "documentos" que acabas de crear
   - Click "Add file" > "Upload files"
   - Arrastra los 16 archivos .docx
   - Commit con mensaje: "Agregar documentos de asambleas"

5. **Subir README**
   - Vuelve a la raíz del repositorio
   - Click "Add file" > "Upload files"
   - Arrastra README.md
   - Commit con mensaje: "Agregar documentación"

### Opción B: GitHub Desktop (Si prefieres aplicación)

1. **Descargar GitHub Desktop**
   - https://desktop.github.com
   - Instalar y abrir

2. **Clonar tu repositorio**
   - File > Clone repository
   - Busca "azeche-ph"
   - Elige dónde guardarlo
   - Click "Clone"

3. **Copiar archivos**
   - Ve a la carpeta donde clonaste
   - Copia todos tus archivos allí
   - Mantén la estructura (con carpeta documentos)

4. **Commit y Push**
   - En GitHub Desktop verás los cambios
   - Escribe mensaje: "Sistema Azeche PH completo"
   - Click "Commit to main"
   - Click "Push origin"

---

## 🚀 PASO 5: ACTIVAR GITHUB PAGES

1. **Ir a Settings**
   - En tu repositorio, click en "Settings" (arriba)

2. **Configurar Pages**
   - En el menú izquierdo, busca "Pages"
   - En "Source":
     * Branch: `main`
     * Folder: `/ (root)`
   - Click "Save"

3. **Esperar**
   - GitHub tardará 1-3 minutos en publicar
   - Verás un mensaje: "Your site is ready to be published at..."

4. **Visitar tu sitio**
   - URL será: `https://TU_USERNAME.github.io/azeche-ph/`
   - Ejemplo: `https://azecheph.github.io/azeche-ph/`

---

## 🔧 PASO 6: ACTUALIZAR ENLACES DE DOCUMENTOS

Una vez publicado, necesitas actualizar el Dashboard para que los documentos se descarguen correctamente:

1. **Editar Dashboard.html en GitHub**
   - Click en "Dashboard.html"
   - Click en el ícono de lápiz (Edit)

2. **Buscar la función `descargarDoc`** (línea ~550)
   - Cambiar:
   ```javascript
   function descargarDoc(edificio, tipo) {
       const nombreArchivo = documentosMap[edificio][tipo];
       alert(`📥 Descargando: ${nombreArchivo}`);
       // AGREGAR ESTA LÍNEA:
       window.open(`./documentos/${nombreArchivo}`, '_blank');
   }
   ```

3. **Guardar**
   - Commit changes
   - Mensaje: "Activar descarga de documentos"

---

## ✅ PASO 7: PROBAR TODO

1. **Abrir tu sitio**
   - `https://TU_USERNAME.github.io/azeche-ph/`

2. **Login**
   - Usuario rápido: "Azeche Adm."
   - O manual: `azeche.adm@azecheph.com` / `AzecheAdm2025!`

3. **Probar Asambleas**
   - Click en "Asambleas"
   - Verificar que se vean los 4 edificios
   - Probar descargar documentos

---

## 🎉 ¡LISTO!

Tu sistema ahora está:
- ✅ Accesible desde cualquier dispositivo
- ✅ No requiere servidor local
- ✅ Con todos los módulos funcionando
- ✅ Documentos de asambleas disponibles

---

## 📱 ACCESO DESDE CELULAR

1. Abre navegador (Chrome, Safari)
2. Ve a: `https://TU_USERNAME.github.io/azeche-ph/`
3. Login normal
4. Todo funciona igual que en PC

---

## 🔄 ACTUALIZAR EL SISTEMA

Cuando quieras hacer cambios:

1. **Opción Fácil (Web):**
   - Ve a tu repositorio en GitHub
   - Click en el archivo que quieres editar
   - Click en el lápiz para editar
   - Haz cambios
   - Commit changes
   - Espera 1-2 minutos
   - Actualiza tu navegador

2. **Opción GitHub Desktop:**
   - Edita archivos en tu computadora
   - Abre GitHub Desktop
   - Verás los cambios
   - Commit y Push
   - Espera 1-2 minutos

---

## ❓ SOLUCIÓN DE PROBLEMAS

### "Page not found" después de activar Pages
- Espera 5 minutos más
- Verifica que el branch sea "main"
- Verifica que index.html esté en la raíz

### Los documentos no descargan
- Verifica que actualizaste la función `descargarDoc`
- Verifica que los archivos estén en `/documentos/`
- Revisa la consola del navegador (F12)

### Firebase no conecta
- Las credenciales ya están en el código
- Verifica tu conexión a internet
- Revisa la consola del navegador

---

## 📧 AYUDA

Si tienes problemas:
1. Revisa la consola del navegador (F12)
2. Verifica que todos los archivos se subieron
3. Verifica la URL de GitHub Pages en Settings

---

¡Éxito con tu sistema! 🚀
