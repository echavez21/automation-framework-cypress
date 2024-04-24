import { url, user, contra } from '../component/LoginPass.cy'
import { Botoniframe, detalles, toggle,demo, torneos } from '../component/elementsLocators.cy';
/// <reference types="cypress"/>


const { generateRandomPassword, generateRandomEmail } = require('../component/LoginPass.cy');
// Definir afterEach a nivel global
afterEach(() => {
  // Cerrar el navegador al finalizar cada prueba
  cy.window().then((win) => {
    win.close(); // Cerrar la ventana del navegador
  });
});

describe("Flujo para ingresar la opcion de torneos e ingresar a un juego", () => {
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
    //hacer click en la opcion torneos
    torneos().click();

    //hacer scroll hacia abajo
    cy.scrollTo(0, 500);

    //hacer click en detalles
    detalles().click();
    //Hacer click en toggle para cambiar apariencia
    toggle().click()


    demo().should('exist').should('be.visible');
    cy.scrollTo(0, 400);

    //hacer click en jugar
    demo().click();
    cy.scrollTo('top');

  });
  
});