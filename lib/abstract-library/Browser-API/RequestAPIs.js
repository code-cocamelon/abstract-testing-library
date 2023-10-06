const RequestAPI = {
    ZDfetch(endPoint, options) {
        return cy.window().then((win) => {
            return win.fetch(endPoint, options)
                .then((response) => {
                    return response.json()
                }).catch((err) => {
                    return err
                })
        })
    }
}
module.exports = RequestAPI;