const StyleAssert = {
    shouleHaveCSS(element, className = null) {
        return chai.expect(element).to.have.class(className)
        // return expect(element).toHaveClass(className)
    },
    shouleNotHaveCSS(element, className = null) {
        return chai.expect(element).not.to.have.class(className)
        // return expect(element).not.toHaveClass(className)
    },
    shouldHaveCSSProperty(element, attr, attrValue) {
        return chai.expect(element).to.have.attr(attr,attrValue)
        // return expect(element).toHaveAttribute(attr, attrValue)
    }
}

module.exports = StyleAssert;