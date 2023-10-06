const KeyCombination = {
    combinationShortcut(element, key1 = 0, key2 = 0) {
        cy.get(element).trigger("keydown", { keyCode: key1 });
        cy.get(element).trigger("keydown", { keyCode: key2 });
        cy.get(element).trigger("keyup", { keyCode: key1 });
        cy.get(element).trigger("keyup", { keyCode: key2 });
        return

    },
    singleKeyshortcut(element, key) {
        return cy.get(element).type(key)
    }
}

module.exports = KeyCombination;
