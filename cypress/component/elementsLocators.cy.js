// elementLocators.js

// Elemento primer campo de contraseña
export const PasswordField = () => {
    return cy.get('#core__protected_modules_user_yiiForm_RegistrationForm_password');
  };

// Elemento boton Registrar para entrar al formulario
export const BotonRegistrosuario = () => {
  return cy.get('a.header-button:nth-child(2)');
};

  // Elemento del segundo campor de confirmacion de contraseñaseña por su ID
export const PasswordConfirmation = () => {
  return cy.get('#core__protected_modules_user_yiiForm_RegistrationForm_password_confirmation')
};

// Elemento boton registrar final despues de llenar todos los campos
export const BotonRegistrarfinal = () => {
  return cy.get('#registration_form_1 > fieldset.form__section.form__section--submit > button')
};
  
// Función para Validar boton de cerra iframe
export const Botoniframe = () => {
  return cy.get('button.button > span:nth-child(1)')
};

// Elemento checkbox terminos y condiciones
export const TermCond = () => {
  return cy.get('#core__protected_modules_user_yiiForm_RegistrationForm_terms_and_conditions')
};

// Elemento NoBonus
export const NoBonus = () => {
  return cy.get('#bonus-0')
};

// Elemento caja de texto email
export const emailtext = () => {
  return cy.get('#core__protected_modules_user_yiiForm_RegistrationForm_email')
};

// Elemento opcion torneos
export const opcintorneos = () => {
  return cy.get('div.swiper-slide:nth-child(9) > a:nth-child(1) > i:nth-child(1)')
};

// Elemento signin torneos
export const signin = () => {
  return cy.get('body > div.helper > header > div > div > div.header--right > div > div.button.header-button.header-button--login')
};


// Elemento signin torneos
export const signin2 = () => {
  return cy.get('a.button:nth-child(4)')
};

// Elemento username
export const username = () => {
  return cy.get('#UserLogin_username')
};

// Elemento toggle
export const toggle = () => {
  return cy.get('div.theme-switch__wrapper:nth-child(2) > label:nth-child(1) > span:nth-child(2) > i:nth-child(1)')
};


// Elemento detalles
export const detalles = () => {
  return cy.get('body > div.helper > main > div > div > div.tabs__content.active > ul > li:nth-child(2) > div.tournament__info > div.tournament-stat > div.tournament__buttons > a')
};


// Elemento iconuser
export const torneos = () => {
  return cy.get('.mobile-bar--right > a:nth-child(1)')
  
};

// Elemento demo
export const demo = () => {
  return cy.get('div.banner__wrapper:nth-child(2) > div:nth-child(1) > a:nth-child(2)')
  
};

