const UserAction = (element, actiontype, action = null, key = 0) => {
    const APIaction = {
        click: () => cy.get(element).click({ force: null }),
        submit: () => cy.get(element).submit(),
        focus: () => cy.get(element).focus(),
        select: () => cy.get(element).select(),
        trigger: () => cy.get(element).trigger(action, { keycode: key })
    }
    return APIaction[actiontype](element, action, key)
}
module.exports = UserAction