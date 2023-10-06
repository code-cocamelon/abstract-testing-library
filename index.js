// #!/usr/bin/env node
const msw = require('msw')
const ActionEvent = require('./lib/abstract-library/Browser-API/ActionEvent')
const DeveloperAction = require('./lib/abstract-library/Browser-API/DeveloperActions')
const InteractionAPIs = require('./lib/abstract-library/Browser-API/InteractionAPIs')
const KeyShortcutKeys = require('./lib/abstract-library/Browser-API/KeyShortcutKeys')
const RequestAPI = require('./lib/abstract-library/Browser-API/RequestAPIs')
const AttributeAssert = require('./lib/assertion/AttributeAssert')
const ExistAssert = require('./lib/assertion/ExistAssert')
const FormAndInputAssert = require('./lib/assertion/FormAndInputAssert')
const NavigationAssert = require('./lib/assertion/NavigationAssert')
const StyleAssert = require('./lib/assertion/StyleAssert')
const TextAssert = require('./lib/assertion/TextAssert')
const VisibilityAssert = require('./lib/assertion/VisibilityAssert')
const chaiDom = require('chai-dom')
const { DOMquery } = require('./lib/abstract-library/library-react/JestDOMactions')
const DOMactionAPI = require('./lib/abstract-library/library-react/jest/DOMactionAPI')
const BrowserActionAPI = require('./lib/abstract-library/Browser-API/cypress/BrowserActionAPI')
const interactions = require('./lib/interface/UserInteractions')
DOMquery
module.exports.library = (() => {
    if (FrameWorkUsed === 'cypress') {
        return new BrowserActionAPI()
    }
    else if (FrameWorkUsed === 'jest') {
        return new DOMactionAPI()
    }
    return {}
})();
chai.use(chaiDom)
const _CypressTestingMethods = Object.assign({}, {
    ...ActionEvent,
    ...AttributeAssert,
    ...DeveloperAction,
    ...ExistAssert,
    ...FormAndInputAssert,
    ...InteractionAPIs,
    ...KeyShortcutKeys,
    ...NavigationAssert,
    ...RequestAPI,
    ...StyleAssert,
    ...TextAssert,
    ...VisibilityAssert,
    ...FormAndInputAssert,
    ...NavigationAssert,
    ...interactions
})
const _reactTestingMethods = Object.assign({}, {
    ...DOMquery,
    ...AttributeAssert,
    ...ExistAssert,
    ...FormAndInputAssert,
    ...StyleAssert,
    ...TextAssert,
    ...VisibilityAssert,
    ...interactions
})
module.exports.msw = { msw }
module.exports = { _CypressTestingMethods, _reactTestingMethods }