# README

# TEST
Evaluación técnica UMVEL

## CONTENTS
   
* Introducción
* Requisitos
* Recomendaciones
* Instalación
* Configuración
* Consideraciones


## INTRODUCTION

Los archivos que se presentan aquí forman parte de la evaluación técnica solicitada por UMVEL

* Cuenta con una ventana de inicio para acceder mediante correo y contraseña, y en caso de no contar con una, es posible realizar el registro de un nuevo usuario:
  https://localhost:4200

* Los usuarios una vez validados se registran en el LocalStorage para que no sea posible acceder de otra manera, por lo tanto, se cuenta con una opción para cerrar la sesión:
  Opción Logput

* Tiene un apartado que muestra una gráfica a partir de un JSON obtenido mediante URL. La gráfica consolida las ventas de unidades de autos:
  Opción Graphic

* contiene una opción que muestra una lista de usuario externos a la aplicación paginados de 5 en 5 y que tiene su origen en un JSON obtenido a partir de una URL, en esta lista se muestra también imagen en base64:
  Opción User List

* La estructura del proyecto Angular está pensada en separar el Back del Front, así mismo en el caso del front-end se tiene una estructura jerárquica que tiene como objetivo permitir el desacoplamiento, extensibilidad y administración de los componentes de manera clara

* Se utiliza SCSS

* Se cuenta con un código de nombre robots.js como parte del back-end que muestra sus resultados en la salida de la consola. Es necesario obedecer a la sintaxis proporcionada como parte de la URL del proceso para obtener los resultados del mismo, por ejemplo
  http://localhost:3977/api/robot/4R2V1V2R4

## REQUIREMENTS

Se emplean los siguientes componentes y versiones:

* NodeJs 15.11.1
* Angular 11.2.3
* NG2-Chars 2.4.2
* Bootstrap 4.5.0
* ngx-paginatrion 5.0.0
* Charts.js 2.9.4
* mongodb 4.4.3


## RECOMMENDED

* Instalar todos los componentes mencionados anteriormente antes poner en marcha la API y el Cliente:

* npm install --save ng2-charts
* npm install --save chart.js
* npm install --save ngx-pagination
* npm install --save bootstrap 
* npm install -–save jquery

	
## INSTALLATION
 
* cree una carpeta de nombre test.
* cree un proyecto NodeJs de nombre apli.
* Cree un proyecto Angular de nombre client.
* Realice la instalación de los componentes mencionados en recomendaciones en su proyecto Angular.
* Descarge los archivos del repositorio Git y ubíquelos en la posición correspondiente.
* Ponga en marcha el back-end desde la carpeta ../test/apli.(npm start)
* Ponga en marcha el front-end desde la carpeta ../test/client. (npm start)


## CONFIGURATION
 
* Antes de ingresar deberá dar de alta un Usuario indicando nombre, correo electrónico y clave de acceso.

  - En la ventana de login utilizar el botón registrarse

    Recuerde el correo y contraseña para acceder.

  - Al regresar a la ventana de login introducir correo y contraseña
	
    Será llevado a la ventana principal con las opciones mencionadas al inicio de este documento.


## CONSIDERATIONS	

La lógica empleada para el desarrollo del problema de los robots obedece a la información proporcionada.
