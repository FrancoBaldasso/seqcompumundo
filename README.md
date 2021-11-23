# Programacion III - Parcial II
# Pasos para abrir el proyecto
1. Descargar el proyecto o clonarlo con el comando: git clone https://github.com/FrancoBaldasso/seqcompumundo
2. Abrir algún gestor de base de datos (en mi caso WorkBench) y crear una base de datos (por ejemplo "seqcompumundo"), elegiendo como Charset: uft8, y como Collation utf8_general_ci
![workbench](https://user-images.githubusercontent.com/82101541/143099039-2af75637-03b7-4976-bbf2-6ee885ddb59d.png)
3. Abrir la carpeta de todo el código en Visual Studio Code
4. En la carpeta raíz encontraremos un archivo llamado ".env" que contiene la información de la base de datos en la que se crearán nuestas tablas. El archivo contiene la siguiente configuración:

![env](https://user-images.githubusercontent.com/82101541/143120828-78a6c842-295e-44c6-9e8c-3cf986f5ad2c.png)

SE DEBERÁ CAMBIAR ESTA CONFIGURACIÓN SEGÚN LA BASE DE DATOS CREADA PARA CADA CASO.

5. Ingresar al archivo src/database/config/config.js, y en este modificarlo según la configuración de la base de datos, por ejemplo:

![configjs](https://user-images.githubusercontent.com/82101541/143131226-26184922-a5ce-4aca-9dab-1253d84a7ad6.png)

6. Abrir un nuevo terminal, posicionarse en la carpeta "src" y ejecutar el comando: "npm install".
![npm install](https://user-images.githubusercontent.com/82101541/143117948-2c5e169a-459e-4ac6-9db7-f5f7a71d0df2.png)

7.Instaladas las dependendecias, posicionar la terminal en la carpeta "database" y ejecutar el comando: sequelize db:migrate

![dbmigrate](https://user-images.githubusercontent.com/82101541/143131803-4d790382-9137-4d4e-a1d8-47056c95d297.png)

8. Verificar en el gestor de base de datos la creación de las tablas.

![bdwb](https://user-images.githubusercontent.com/82101541/143132080-c0663b6d-fb6d-4f4f-9c7f-b223a0484227.png)

