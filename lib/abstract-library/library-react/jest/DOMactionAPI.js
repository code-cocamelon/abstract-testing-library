const { JSdomAction } = require("./JSdomAction")
const { waitFor } = require('../JestDOMactions')
class DOMactionAPI {
    action(element, aciontype, param1 = null) {
        return JSdomAction(element, aciontype, param1)
    }
    wait(callback) {
        return waitFor(callback)
    }
    get(){}
}

module.exports = DOMactionAPI;