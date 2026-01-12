# 🏢 AZECHE P.H. - Sistema Administrativo Integral

Sistema completo de gestión administrativa para propiedades horizontales en Colombia.

## 📋 Características

### ✅ Módulos Implementados
- **Dashboard Principal** - Vista general y estadísticas
- **Gestión de Edificios** - Nepal 2, Avalon, Convivienda 1, Pinos del Country
- **Cuentas por Pagar** - Control de facturas y pagos
- **Proveedores** - Base de datos de proveedores
- **Residentes y Propietarios** - Gestión de residentes
- **🆕 Asambleas** - Sistema completo de gestión de asambleas

### 🆕 Sistema de Asambleas
- 📄 Documentos preparatorios (Convocatoria, Acta, Informe, Citación)
- 🗳️ Sistema de votación en tiempo real (Próximamente)
- 🎙️ Acta en vivo con transcripción automática (Próximamente)

## 🚀 Deployment en GitHub Pages

### Paso 1: Crear Repositorio
1. Ve a GitHub.com
2. Click en "New repository"
3. Nombre: `azeche-ph`
4. Marca como "Public"
5. Click "Create repository"

### Paso 2: Subir Archivos
```bash
git init
git add .
git commit -m "Sistema Azeche PH con módulo de Asambleas"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/azeche-ph.git
git push -u origin main
```

### Paso 3: Activar GitHub Pages
1. Ve a Settings > Pages
2. Source: Deploy from branch
3. Branch: main / (root)
4. Click Save
5. Tu sitio estará en: `https://TU_USUARIO.github.io/azeche-ph/`

## 📂 Estructura de Archivos

```
azeche-ph/
├── index.html                          # Login
├── Dashboard.html                      # Dashboard con Asambleas
├── edificios.html                      # Gestión de edificios
├── cuentas-por-pagar.html             # Cuentas por pagar
├── proveedores.html                   # Proveedores
├── Residentes_y_Propietarios.html     # Residentes
├── facturas-automaticas.html          # Facturas
├── documentos/                        # Documentos de asambleas
│   ├── CONVOCATORIA_Nepal2_2026.docx
│   ├── ACTA_ASAMBLEA_Nepal2_2026.docx
│   ├── INFORME_GESTION_Nepal2_2025.docx
│   ├── CITACION_FORMAL_Nepal2_2026.docx
│   ├── CONVOCATORIA_Avalon_2026.docx
│   ├── ACTA_ASAMBLEA_Avalon_2026.docx
│   ├── INFORME_GESTION_Avalon_2025.docx
│   ├── CITACION_FORMAL_Avalon_2026.docx
│   ├── CONVOCATORIA_Convivienda1_2026.docx
│   ├── ACTA_ASAMBLEA_Convivienda1_2026.docx
│   ├── INFORME_GESTION_Convivienda1_2025.docx
│   ├── CITACION_FORMAL_Convivienda1_2026.docx
│   ├── CONVOCATORIA_PinosDelCountry_2026.docx
│   ├── ACTA_ASAMBLEA_PinosDelCountry_2026.docx
│   ├── INFORME_GESTION_PinosDelCountry_2025.docx
│   └── CITACION_FORMAL_PinosDelCountry_2026.docx
└── README.md                          # Este archivo
```

## 🔐 Usuarios del Sistema

### Azeche Adm.
- Email: `azeche.adm@azecheph.com`
- Password: `AzecheAdm2025!`
- Rol: Administrador (Acceso total)

### C3madriz
- Email: `c3madriz@azecheph.com`
- Password: `C3madriz2025!`
- Rol: Asistente (Ver, editar, crear, comentar)

## 🔧 Tecnologías

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Firebase (Authentication, Realtime Database)
- **Hosting:** GitHub Pages

## 📅 Próximas Asambleas

- **Nepal 2:** 14 de febrero, 2026
- **Avalon:** 28 de febrero, 2026
- **Convivienda 1:** Por agendar
- **Pinos del Country:** Por agendar

## 🆕 Próximas Funcionalidades

### Sistema de Votación (Esta semana)
- QR code para registro de asistentes
- Votación en tiempo real desde celular
- Cálculo automático de coeficientes
- Tipos: Por coeficientes, Nominal, Múltiple opción
- Dashboard en vivo para proyectar

### Acta en Vivo (Esta semana)
- Transcripción automática con IA
- Organización por orden del día
- Captura de intervenciones
- Registro automático de votaciones
- Generación de acta final en Word
- Sistema Web Speech API (gratis) o Whisper API (premium)

## 📧 Contacto

**Azeche P.H.**
- Administración: Gloria M. Azcárate E.
- Asistente Legal: Carla Castellano Madriz (C.E. 679955)
- Email: azeche.adm@azecheph.com

---

© 2026 Azeche P.H. - Sistema Administrativo Integral
Actualizado: 12 enero 2026
