describe('Página de login Saucedemo', () => {

   beforeEach(() => {
    cy.visit('/'); 
  });

  it('Campos vazios - não deve entrar no sistema e aparecer balão de dicas', () => { 
    cy.get('[data-test="login-button"]').click() 
    cy.contains('[data-test="error"]',"Informe login e senha")  // capturando o elemento, verificando se tem a mensagem e se é vísivel.
      .should('be.visible');
     
    
  })
}) 