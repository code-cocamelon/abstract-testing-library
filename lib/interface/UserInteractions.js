const { library } = require("../../index")
class interactions {
    action(element, aciontype, param1 = null, param2 = null) {
        library.action(element, aciontype, param1, param2)
        // return FrameWorkUsed === 'cypress' ? UserAction(element, aciontype, param1, param2) : FrameWorkUsed === 'jest' ? JSdomAction(element, aciontype, param1) : null
    }
    wait(param = null) {
        library.wait(param)
    }

}

module.exports = interactions;