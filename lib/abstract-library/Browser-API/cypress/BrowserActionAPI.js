const { UserAction } = require("./Useraction")
class BrowserActionAPI {
    action(element, aciontype, param1 = null, param2 = null) {
        return UserAction(element, aciontype, param1, param2)
    }
    wait(time = 0) {
        return cy.wait(time)
    }
}

module.exports = BrowserActionAPI;