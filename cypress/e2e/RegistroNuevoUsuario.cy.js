import { url,contra } from '../component/LoginPass.cy'
import { PasswordField, PasswordConfirmation, BotonRegistrarfinal, Botoniframe, BotonRegistrosuario, TermCond, NoBonus, emailtext } from '../component/elementsLocators.cy';
/// <reference types="cypress"/>


const { generateRandomEmail } = require('../component/LoginPass.cy');


afterEach(() => {
  // Cerrar el navegador al finalizar cada prueba
  cy.window().then((win) => {
    win.close(); // Cerrar la ventana del navegador
  });
});

describe("Flujo proceso para registrar un nuevo usuario del challenge", () => {
  it("Registrar nuevo Usuario", () => {

    //ir a la url Demo Casino que se encuentra en la clase "LoginPass"
    cy.visit(url, { failOnStatusCode: false });

    //Validar si el Iframe se encuentra visible sirve como un assert  
    Botoniframe().should('exist').should('be.visible');

    //debido a que el sitio web es un sitio de prueba estaba lanzando error con el server y no se podia ingresar a dicha pagina
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    //hacer click en el boton cerrar del iframe
    require('cypress-xpath');
    cy.xpath('//*[@class="mfp-close"]').click();

    //Hacer click en el boton registrar para entrar al formulario
    BotonRegistrosuario().click()

    //verificar que el componente este visible password
    PasswordConfirmation().should('exist').should('be.visible');

    //Scroll hacia abajo
    cy.scrollTo(0, 500);

    //hacer click en los terminos y condiciones
    TermCond({ timeout: 10000 }).click({ force: true });

    //hacer click en la opcion No Bonus
    NoBonus().click({ force: true });


    // Generar un correo electrónico aleatorio con un prefijo 'Elmer'
    const email = generateRandomEmail('Elmer');

    // Ingresar el correo electrónico en el campo email del registro
    emailtext().type(email);

    

    // Ingresar el password en el campo password
    PasswordField().type(contra);

    // Reingresar el password en el campo reingresar password
    PasswordConfirmation().type(contra);


    // Hacer clic en el botón de registro final
    BotonRegistrarfinal().click({ force: true });

    // Hacer clic en el botón de registro final
    BotonRegistrarfinal().click({ force: true });





  });
});