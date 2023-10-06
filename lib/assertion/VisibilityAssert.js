
const VisibilityAssert = {
    isElementVisible(element) {
        return chai.expect(element).to.be.displayed
    },
    isElementNotVisible(element) {
        return chai.expect(element).not.to.be.displayed
    }
}
module.exports = VisibilityAssert;