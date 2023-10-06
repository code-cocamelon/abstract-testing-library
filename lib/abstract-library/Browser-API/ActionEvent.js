const ActionEvent = {
    get(element) {
        return cy.get(element)
    },
    dragDrop(fromElement, toElement) {
        const dataTransfer = new DataTransfer();
        cy.get(fromElement).trigger('dragstart', {
            dataTransfer
        });
        cy.get(toElement).trigger('drop', {
            dataTransfer
        });
    },
    scrollTo($element, verticalscroll) {
        return cy.get($element).scrollTo(0, verticalscroll)
    },
    checkbox(element, listofcheck = null) {
        return cy.get(element).check(listofcheck)
    },
    uncheckbox(element, listofuncheck = null) {
        return cy.get(element).uncheck(listofuncheck)
    },
    dropDown(element, choosen, options = null) {
        return cy.get(element).select(choosen, options)
    },
    viewport(width, height) {
        return cy.viewport(width, height)
    },
    trigger(element, action = null) {
        cy.get(element).trigger(action)
    },
    type(element, subject) {
        return cy.get(element).type(subject)
    },
    containsAction(element, type, role) {
        const action = {
            click: () => cy.contains(element, role).click(),
            type: () => cy.contains(element).clear().type()
        }
        return action[type](element, role)
    },
    visitPage(url) {
        Cypress.on('uncaught:exception', (err, runnable) => false)
        return cy.visit(url)
    },
    show(element) {
        return cy.get(element).invoke('show')
    }
}
module.exports = ActionEvent;
