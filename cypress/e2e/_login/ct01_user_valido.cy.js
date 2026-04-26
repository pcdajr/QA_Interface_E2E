
describe('Página de login Saucedemo', () => {

   beforeEach(() => {
    cy.visit('/'); // antes do caso teste, visitando a url.
  });

  it('Login válido mas sem toast notificacion("logado com sucesso")', () => {

    cy.get('[data-test="username"]').type("standard_user");   //inserindo nomeS
    cy.get('[data-test="password"]').type("secret_sauce");    //inserindo senha   
    cy.get('[data-test="login-button"]').click();             //clicando

    
  })
}) 