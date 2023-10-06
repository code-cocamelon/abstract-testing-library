// const { expect } = require("chai");
const TextAssert = {
    isHaveText(element, text) {
        return  chai.expect(element).to.be.equal(text)
    },
    isdoesNotHaveText(element, text) {
        return  chai.expect(element).not.to.be.equal(text) 
    },
    isHaveSpecificPattern(element, specificPattern) {
        return  chai.expect(element).to.match(`/${specificPattern}/`) 
    }
}
module.exports = TextAssert;