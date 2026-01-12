# 🚀 INICIO RÁPIDO - 5 PASOS PARA TENER AZECHE PH ONLINE

---

## ⏱️ TIEMPO TOTAL: 15-20 MINUTOS

---

## 📱 PASO 1: CREAR CUENTA GITHUB (5 min)

### Si NO tienes cuenta:

1. **Ir a GitHub**
   - Abre: https://github.com/signup
   
2. **Crear cuenta**
   ```
   Email:      tu-email@gmail.com
   Password:   [contraseña segura]
   Username:   azecheph   (o el que prefieras)
   ```
   
3. **Verificar email**
   - Revisa tu bandeja de entrada
   - Click en el link de verificación

### Si YA tienes cuenta:
- Simplemente inicia sesión en https://github.com

---

## 📦 PASO 2: CREAR REPOSITORIO (2 min)

1. **Botón verde "New"**
   - Arriba a la derecha
   - O ve directo a: https://github.com/new

2. **Configurar**
   ```
   Repository name:     azeche-ph
   Description:         Sistema Administrativo Azeche P.H.
   ✓ Public            (marca esto)
   ☐ Add README        (NO marcar nada)
   ```

3. **Click "Create repository"**

---

## 📤 PASO 3: SUBIR ARCHIVOS (5 min)

### Método 1: Arrastrar y Soltar (MÁS FÁCIL)

**A. Subir archivos HTML (7 archivos)**

1. En la página del repo vacío, verás:
   ```
   "uploading an existing file"
   ```
   Click ahí

2. **Arrastra estos 7 archivos:**
   - index.html
   - Dashboard.html
   - edificios.html
   - cuentas-por-pagar.html
   - proveedores.html
   - Residentes_y_Propietarios_-_Azeche_P_H_.html
   - facturas-automaticas.html

3. **Commit**
   - Mensaje: "Sistema Azeche PH"
   - Click "Commit changes"

**B. Crear carpeta documentos**

1. En el repo, click "Add file" > "Create new file"
2. Escribe: `documentos/README.md`
3. Contenido: `# Documentos de Asambleas`
4. Commit: "Crear carpeta documentos"

**C. Subir documentos Word (16 archivos)**

1. Click en la carpeta "documentos"
2. Click "Add file" > "Upload files"
3. Arrastra los 16 archivos .docx
4. Commit: "Documentos de asambleas"

**D. Subir documentación**

1. Volver a raíz (click en "azeche-ph" arriba)
2. "Add file" > "Upload files"
3. Arrastra:
   - README.md
   - GUIA_DEPLOYMENT.md
   - INICIO_RAPIDO.md
4. Commit: "Documentación"

---

## 🌐 PASO 4: ACTIVAR GITHUB PAGES (2 min)

1. **Settings**
   - Click en "Settings" (pestaña arriba)

2. **Pages** (menú izquierdo)
   - Busca "Pages" en el menú izquierdo
   
3. **Configurar**
   ```
   Source:    Deploy from a branch
   Branch:    main
   Folder:    / (root)
   ```
   
4. **Save**
   - Click "Save"
   - Verás: "Your site is live at https://..."

5. **Esperar 2-3 minutos**
   - GitHub está publicando tu sitio
   - Actualiza la página

---

## ✅ PASO 5: PROBAR (2 min)

1. **Abrir tu sitio**
   ```
   https://TU-USERNAME.github.io/azeche-ph/
   ```

2. **Login rápido**
   - Click en "Azeche Adm."
   - O usa: azeche.adm@azecheph.com / AzecheAdm2025!

3. **Probar módulos**
   - ✓ Dashboard
   - ✓ Edificios
   - ✓ Cuentas por Pagar
   - ✓ Asambleas → Descargar documentos

---

## 🎉 ¡LISTO!

Tu sistema ahora está:
- ✅ Online 24/7
- ✅ Accesible desde cualquier dispositivo
- ✅ Sin necesidad de servidor local
- ✅ Gratis para siempre

**URL de tu sistema:**
```
https://TU-USERNAME.github.io/azeche-ph/
```

**Guárdala en favoritos** 📌

---

## 📱 ACCEDER DESDE CELULAR

1. Abre navegador (Chrome/Safari)
2. Ve a tu URL
3. Login
4. ¡Funciona igual que en PC!

---

## 🔄 ¿CÓMO ACTUALIZAR?

**Opción fácil:**
1. Ve a tu repositorio en GitHub
2. Click en el archivo a editar
3. Click en el lápiz ✏️
4. Haz cambios
5. "Commit changes"
6. Espera 1-2 minutos
7. Actualiza tu navegador

---

## ❓ PROBLEMAS COMUNES

### "404 Page not found"
- Espera 5 minutos más
- Verifica que index.html esté en la raíz
- Verifica que el repositorio sea Public

### Documentos no descargan
- Ve a Dashboard.html
- Edita (lápiz)
- Busca función `descargarDoc`
- Descomenta la línea:
  ```javascript
  window.open(`./documentos/${nombreArchivo}`, '_blank');
  ```

### Firebase no conecta
- Ya está configurado
- Revisa tu conexión a internet
- Presiona F12 y revisa la consola

---

## 📞 SOPORTE

Si algo no funciona:
1. Revisa esta guía paso a paso
2. Verifica que TODOS los archivos se subieron
3. Espera 5 minutos después de activar Pages
4. Limpia caché del navegador (Ctrl+Shift+R)

---

¡Éxito! 🚀

**Próximo paso:** Sistemas de Votación y Acta en Vivo
