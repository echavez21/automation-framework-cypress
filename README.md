# automation-framework-cypress

Este es un framework de automatizacion hecho en cypress con lenguaje Javascript, este framework se puede ejecutar de dos formas ya sea por terminal desde un ide o desde cypress e2e interfaz grafica.

antes de ejecutar el proyecto se debe tener instalado Node.js y npm, para poder verificar si ya se cuenta con uan version de estos se debera de abrir cmd y ejecutar las siguientes lineas de comando:
Node --version y npm --version, la version del npm viene incluida en la instalacion del Node.js si no se cuenta con la instalacion se debera de descargar desde la siguiente url https://nodejs.org/en/download
una vez contemos con esa instalacion se debera de instalar cypress con el siguiente comando: npm install cypress --save-dev.

cuando ya contemos con la instalacion de los prerequisitos se describe la estructuracion del proyecto.

Cypress-->components--> elementsLocators.cy.js (Contiene todos los elementos por csselector o id para usarlo de una forma mas ordenada)
                        LoginPass.cy.js (contiene una funcion para generar un correo aleatorio, la url,contra como parametro)

Cypress-->e2e-->DemoTorneos.cy.js (contiene la ejecucion del flujo de hacer click en la opcion torneos, cambair el tema de la pagina a claro  hacer click en jugar   
                RegistroNuevoUsuario.cy.js (contiene el flujo de registrar un usuario nuevo, para este se debe de interactuar con un captcha ya que eso es imposible poder automatizar)
                testsuite.cy.js (contiene los dos escenarios para poder ejecutarlos simultaneamente desde la interfaz de cypress)

Cypress-->package.json (contiene la configuracion para poder ejecutar un test suite con los archivos separados de DemoTorneos y RegistroNuevoUsuario)


****EJECUCION DE TEST CASES****

1) tener instalado vscode para ver el proyecto
2) Descargar el Instalador de Git:
Ve al sitio web oficial de Git: Git Downloads.
Descarga el instalador de Git para Windows.
Ejecutar el instalador descargado y sigue las instrucciones en pantalla y verificar la version con el comando git --version
3) Abrir terminal en vscode y clonar el proyecto desde github con el siguiente comando git clone https://github.com/echavez21/automation-framework-cypress.git
4) Si se desea hacer por medio de terminal se debe de ejecutar el siguiente comando en la terminal del ide(vscode) npm run test
5) Si se desea ejecutar mediante la interfaz de cypress ejecutar el siguiente comando npm run cypress:open seleccionar la opcion E2E testing, click en continuar despues seleccionar la opcion scaffold example specs,presionar el boton Ok.
6) una vez se tenga configurado esa parte con el codigo descargado se seleccionara por separados los test cases o se puede seleccionar el archivo con ambos casos de pruebas testsuite.cy.js
