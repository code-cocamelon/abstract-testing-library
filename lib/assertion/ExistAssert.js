const ExistAssert = {
    isExistinDOM(element) {
        return chai.expect(element).to.be.exist
        // return  expect(element).toBeInTheDocument() 
    },
    isNotExistinDOM(element) {
        return chai.expect(element).not.to.be.exist
        // return expect(element).not.toBeInTheDocument() 
    }
}

module.exports = ExistAssert;