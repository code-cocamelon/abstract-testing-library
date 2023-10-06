const test = require('@testing-library/react')
const getBy = async (Id, type) => {
    const get = {
        Text: () => test.getByText(Id),
        Title: () => test.getByTitle(Id),
        TestId: () => test.getByTestId(Id),
        PlaceholderText: () => test.getByPlaceholderText(Id),
        LabelText: () => test.getByLabelText(Id),
        DisplayValue: () => test.getByDisplayValue(Id),
        AltText: () => test.getByAltText(Id)
    }
    return await get[type](Id)
}
const getAllBy = async (Id, type) => {
    const getAll = {
        AllText: () => test.getAllByText(Id),
        AllTitle: () => test.getAllByTitle(Id),
        AllTestId: () => test.getAllByTestId(Id),
        AllPlaceholderText: () => test.getAllByPlaceholderText(Id),
        AllLabelText: () => test.getAllByLabelText(Id),
        AllDisplayValue: () => test.getAllByDisplayValue(Id),
        AllAltText: () => test.getAllByAltText(Id)
    }
    return await getAll[type](Id)
}

const findBy = async (Id, type) => {
    const find = {
        Text: () => test.findByText(Id),
        Title: () => test.findByTitle(Id),
        TestId: () => test.findByTestId(Id),
        PlaceholderText: () => test.findByPlaceholderText(Id),
        LabelText: () => test.findByLabelText(Id),
        DisplayValue: () => test.findByDisplayValue(Id),
        AltText: () => test.findByAltText(Id)
    }
    return await find[type](Id)
}
const findAllBy = async (Id, type) => {
    const findAll = {
        AllText: () => test.findAllByText(Id),
        AllTitle: () => test.findAllByTitle(Id),
        AllTestId: () => test.findAllByTestId(Id),
        AllPlaceholderText: () => test.findAllByPlaceholderText(Id),
        AllLabelText: () => test.findAllByLabelText(Id),
        AllDisplayValue: () => test.findAllByDisplayValue(Id),
        AllAltText: () => test.findAllByAltText(Id)
    }
    return await findAll[type](Id)
}
const queryBy = async (Id, type) => {
    const query = {
        Text: () => test.queryByText(Id),
        Title: () => test.queryByTitle(Id),
        TestId: () => test.queryByTestId(Id),
        PlaceholderText: () => test.queryByPlaceholderText(Id),
        LabelText: () => test.queryByLabelText(Id),
        DisplayValue: () => test.queryByDisplayValue(Id),
        AltText: () => test.queryByAltText(Id)
    }
    return await query[type](Id)
}
const queryAllBy = async (Id, type) => {
    const queryAll = {
        AllText: () => test.queryAllByText(Id),
        AllTitle: () => test.queryAllByTitle(Id),
        AllTestId: () => test.queryAllByTestId(Id),
        AllPlaceholderText: () => test.queryAllByPlaceholderText(Id),
        AllLabelText: () => test.queryAllByLabelText(Id),
        AllDisplayValue: () => test.queryAllByDisplayValue(Id),
        AllAltText: () => test.queryAllByAltText(Id)
    }
    return await queryAll[type](Id)
}
const render = component => test.render(component)
const waitFor = (callback) => test.waitFor(callback)
const waitForRemove = (callback) => test.waitForElementToBeRemoved(callback)

module.exports.DOMquery = { render, waitFor, waitForRemove, getAllBy, getBy, findAllBy, findBy, queryAllBy, queryBy }