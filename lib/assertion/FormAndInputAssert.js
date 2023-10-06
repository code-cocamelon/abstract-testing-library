const FormAndInputAssert = {
    checkSpecificValue(element, subject) {
        return chai.expect(element).to.be.equal(subject)
        // return expect(element).toHaveValue(subject)
    },
    isFieldEnabled(element) {
        return chai.expect(element).to.be.enabled
        // return expect(element).toBeEnabled()
    },
    isFieldDisabled(element) {
        return chai.expect(element).to.be.disabled
    },
}

module.exports = FormAndInputAssert 