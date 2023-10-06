const { fireEvent } = require('@testing-library/react')
const JSdomAction = (element, actiontype, object) => {
    const DOMaction = {
        click: () => fireEvent.click(element, object),
        submit: () => fireEvent.submit(element, object),
        drop: () => fireEvent.drop(element, object),
        change: () => fireEvent.change(element, object),
        keyUp: () => fireEvent.keyUp(element, object),
        mouseEnter: () => fireEvent.mouseEnter(element, object),
        mouseLeave: () => fireEvent.mouseLeave(element, object)
    }
    return DOMaction[actiontype](element, object)
}

module.exports = JSdomAction;