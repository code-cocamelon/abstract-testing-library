const APIactions = {
    mock(method, requestURL, body) {
        return cy.request(method, requestURL, body)
    },
    intecept(method, requestURL, responseCallback) {
        return cy.intercept(method, requestURL, responseCallback)
    },
    stub(url, filePath) {
        return cy.stub(ZD, fetch)
            .withArgs(url)
            .returns(async () => {
                return await cy.fixture(filePath).then(res => res.json())
            })
    }
}

module.exports = APIactions;