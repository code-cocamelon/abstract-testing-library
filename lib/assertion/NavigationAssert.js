const NavigationAssert = {
    assertURL(url) {
        return cy.url().should('eq', url)
    },
    specific(){
        return cy.url().should('')
    }
}
module.exports =  NavigationAssert 