
describe('Página de login Saucedemo', () => {

   beforeEach(() => {
    cy.visit('/'); // antes do caso teste, visitando a url.
  });

  it('Adicionar ao Carrinho e testar notificação da quantidade no cart', () => {

    cy.get('[data-test="username"]').type("standard_user");   //inserindo nomes
    cy.get('[data-test="password"]').type("secret_sauce");    //inserindo senha   
    cy.get('[data-test="login-button"]').click();             //clicando


     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="shopping-cart-badge"]')
        .should("exist")
        .and("be.visible")
        .and('have.text','1');


  })
  
}) 