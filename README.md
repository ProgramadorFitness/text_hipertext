# Gestión de Notas - Proyecto Cliente-Servidor

Este proyecto es una aplicación de gestión de notas con una arquitectura cliente-servidor. El cliente está desarrollado en React con TypeScript, Tailwind CSS y Vite, mientras que el servidor está basado en Laravel.

## Requisitos

### **Para el Servidor (Backend):**

- **PHP:** Versión 8.1 o superior
- **Composer:** La última versión estable
- **MySQL:** Versión 5.7 o superior (o cualquier otra base de datos compatible con Laravel)

### **Para el Cliente (Frontend):**

- **Node.js:** Versión 16.x o superior
- **npm:** La última versión estable
- **Vite:** Incluido en las dependencias del proyecto

## Configuración del Servidor (Backend)

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/ProgramadorFitness/text_hipertext.git
   cd text_hipertext

2. Navega al directorio del servidor:
   cd server
3.Instala dependencias de PHP:
  composer install
4.Configura el archivo .env:
  Copia el archivo de ejemplo .env.example a .env y configura las credenciales de tu base de datos y otras variables de entorno necesarias.
5.Genera la clave de aplicación de Laravel:
  php artisan key:generate
6.Ejecuta las migraciones para configurar la base de datos:
  php artisan migrate
7.Inicia el servidor de desarrollo:
  php artisan serve

Configuración del Cliente (Frontend)

1.Navega al directorio del cliente:
  cd ../client
2.Instala las dependencias de Node.js usando npm:
  npm install
3.Configura las URL de la API:
  Actualiza las URLs de la API en el archivo de configuración correspondiente para que apunten a tu servidor local (por ejemplo, http://localhost:8000). Esto se puede hacer en el archivo .env del cliente.
4.Inicia el servidor de desarrollo del cliente con Vite:
  npm run dev

  Uso
Asegúrate de que el servidor esté en ejecución en http://localhost:8000.
Asegúrate de que el cliente esté en ejecución en http://localhost:3000.
Estructura del Proyecto
/server: Contiene el código del servidor Laravel.
/client: Contiene el código del cliente React con TypeScript, Tailwind CSS y Vite

  
