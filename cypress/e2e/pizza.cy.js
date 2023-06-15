describe('Cypress Pizza Sitesi Test', () => {
  beforeEach(() => {
      cy.visit("/");
  })
  it("Aciktim butonunu kontrol et", () => {
      cy.get('#order-pizza').click()
      cy.url().should('include', 'pizza');
    });
    it("Nav yönlendirmesi", () => {
      cy.get('#order-pizza').click()
      cy.get('.pagePath').within(()=>{
        cy.get('[href="/"]')
        .should('have.attr', 'href')
        .and('include', '/')
        cy.get('[href="/pizza"]')
        .should('have.attr', 'href')
        .and('include', '/pizza')
      })
    });



    it("Sipariş oluşturma", () =>  {
      cy.get('#order-pizza').click()
      cy.get('#order-button').should("be.disabled")
      cy.get(':nth-child(2) > .c-radio-table__label').click()
      cy.get('#size-dropdown').select(1)
      cy.wrap(Math.floor(Math.random() * 10)).then((number)=>{
        const random = "#myCheckbox" + number.toString();
        cy.get(random).click();
      })
      cy.get('#order-button').should("be.disabled")
      cy.get('#name-input').type("Mert Bozdağ")
      cy.get('#special-text').type("Hızlı gelsin lütfen")
      cy.get('#order-button').should("not.be.disabled")
      cy.get('.counter > :nth-child(3)').click()
      cy.get('.counter > div').contains("2")
      cy.get('#order-button').click()
    })



    
    it("Sipariş Onayı", () => {
      cy.get('#order-pizza').click()
      cy.get('#order-button').should("be.disabled")
      cy.get(':nth-child(2) > .c-radio-table__label').click()
      cy.get('#size-dropdown').select(1)
      cy.wrap(Math.floor(Math.random() * 10)).then((number)=>{
        const random = "#myCheckbox" + number.toString();
        cy.get(random).click();
      })
      cy.get('#order-button').should("be.disabled")
      cy.get('#name-input').type("Mert Bozdağ")
      cy.get('#special-text').type("Hızlı gelsin lütfen")
      cy.get('#order-button').should("not.be.disabled")
      cy.get('.counter > :nth-child(3)').click()
      cy.get('.counter > div').contains("2")
      cy.get('#order-button').click()
      cy.get('.pizzaAdi').contains("Position Absolute Aci Pizza")
      cy.url().should("include","onay")
    })
    

  
});