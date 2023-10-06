const AttributeAssert = {
    isHaveAttribute(element, attribute) {
        return chai.expect(element).to.have.attr(attribute)
        // return expect(element).toHaveAttribute(attribute)
    },
    isNotHaveAttribue(element, attribute) {
        return chai.expect(element).not.to.have.attr(attribute)
        // return expect(element).not.toHaveAttribute(attribute)
    },
    matchesValueExpected(element, attribute, subject) {
        return chai.expect(element).to.have.attr(attribute,subject)
        // return expect(element).toBe(subject)
    }
}

module.exports = AttributeAssert;