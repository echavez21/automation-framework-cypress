import { url } from '../component/LoginPass.cy';
import { Botoniframe, detalles, toggle,
  demo,
  torneos,
  PasswordField,
  PasswordConfirmation,
  BotonRegistrarfinal,
  BotonRegistrosuario,
  TermCond,
  NoBonus,
  emailtext
} from '../component/elementsLocators.cy';

const { generateRandomPassword, generateRandomEmail } = require('../component/LoginPass.cy');

  // Definir afterEach dentro de la suite
  afterEach(() => {
    // Cerrar el navegador al finalizar cada prueba
    cy.window().then((win) => {
      win.close(); // Cerrar la ventana del navegador
    });
  });

describe('Flujo combinado de pruebas', () => {
  // Prueba para el flujo de ingresar a un torneo y hacer un demo
  it('Ingresar a un torneo y hacer un demo', () => {
    cy.visit(url, { failOnStatusCode: false });

    Botoniframe().should('exist').should('be.visible');

    cy.on('uncaught:exception', () => false);
    require('cypress-xpath');
    cy.xpath('//*[@class="mfp-close"]').click();

    torneos().click();
    cy.scrollTo(0, 500);

    detalles().click();
    toggle().click();

    demo().should('exist').should('be.visible');
    cy.scrollTo(0, 400);

    demo().click();
    cy.scrollTo('top');
  });

  // Prueba para el flujo de registro de un nuevo usuario
  it('Registrar un nuevo usuario', () => {
    cy.visit(url, { failOnStatusCode: false });

    Botoniframe().should('exist').should('be.visible');

    cy.on('uncaught:exception', () => false);
    require('cypress-xpath');
    cy.xpath('//*[@class="mfp-close"]').click();

    BotonRegistrosuario().click();
    PasswordConfirmation().should('exist').should('be.visible');
    cy.scrollTo(0, 500);

    TermCond({ timeout: 10000 }).click({ force: true });
    NoBonus().click({ force: true });

    const email = generateRandomEmail('Elmer');
    emailtext().type(email);

    const MyPassword = generateRandomPassword(8);
    cy.log(`Contraseña aleatoria generada: ${MyPassword}`);

    PasswordField().type(MyPassword);
    PasswordConfirmation().type(MyPassword);

    BotonRegistrarfinal().click({ force: true });

  });
});
