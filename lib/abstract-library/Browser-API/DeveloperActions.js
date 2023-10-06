const DeveloperActions={
    debug() {
        return cy.debug()
    },
    console(subject) {
        return cy.log(subject)
    },
    pause() {
        return cy.pause()
    }
}
module.exports = DeveloperActions;