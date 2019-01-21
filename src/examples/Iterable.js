import React, { Component } from "react"
import { CruxComponentCreator } from "react-crux"
import { Disclaimer } from "../Disclaimer"
const schema = {
    modelName: "employees",
    title: "Employees with list of free-form Tags",
    creationTitle: "Employee",
    editModal: true,
    fields: [
        {
            title: "Name",
            field: "name",
            editable: true,
            representative: true,
            display: true
        },
        {
            title: "Age",
            editable: true,
            display: true,
            field: "age"
        },
        {
            title: "Tags",
            editable: true,
            display: true,
            field: "tags",
            type: "iterable",
            iterabletype: {
                title: "Tag"
            }
        }
    ],
    createModal: true
}

const Employees = CruxComponentCreator.create(schema)

const reorderSchema = {
    modelName: "employees",
    title: "Employees with list of free-form Tags (REORDER Buttons)",
    creationTitle: "Employee",
    editModal: true,
    fields: [
        {
            title: "Name",
            field: "name",
            editable: true,
            representative: true,
            display: true
        },
        {
            title: "Age",
            editable: true,
            display: true,
            field: "age"
        },
        {
            title: "Tags",
            editable: true,
            display: true,
            field: "tags",
            type: "iterable",
            additionalButtons: {
                reorder: true
            },
            iterabletype: {
                title: "Tag"
            }
        }
    ],
    createModal: true
}

const ReorderEmployees = CruxComponentCreator.create(reorderSchema)

const addAtIndexSchema = {
    modelName: "employees",
    title: "Employees with list of free-form Tags (Add At Index Button)",
    creationTitle: "Employee",
    editModal: true,
    fields: [
        {
            title: "Name",
            field: "name",
            editable: true,
            representative: true,
            display: true
        },
        {
            title: "Age",
            editable: true,
            display: true,
            field: "age"
        },
        {
            title: "Tags",
            editable: true,
            display: true,
            field: "tags",
            type: "iterable",
            additionalButtons: {
                addAtIndex: true
            },
            iterabletype: {
                title: "Tag"
            }
        }
    ],
    createModal: true
}

const EmployeesAddAtIndex = CruxComponentCreator.create(addAtIndexSchema)

const customButtonIterableSchema = {
    modelName: "employees",
    title: "Employees with list of free-form Tags with custom button",
    creationTitle: "Employee",
    editModal: true,
    fields: [
        {
            title: "Name",
            field: "name",
            editable: true,
            representative: true,
            display: true
        },
        {
            title: "Age",
            editable: true,
            display: true,
            field: "age"
        },
        {
            title: "Tags",
            editable: true,
            display: true,
            field: "tags",
            type: "iterable",
            additionalButtons: {
                customButton: true,
                customButtonAction: customButtonAction,
            },
            iterabletype: {
                title: "Tag"
            }
        }
    ],
    createModal: true
}

function customButtonAction(widgetData) {
    window.open(`https://github.com/curefit/react-crux`, "_blank")
}

const CustomButtonIterable = CruxComponentCreator.create(customButtonIterableSchema)

class Iterable extends Component {
    render() {
        return <div style={{ padding: 20 }}>
            <div style={{ display: "flex", padding: 20, borderBottom: "1px solid #EEE" }}>
                <div style={{ width: 500 }}><Employees /></div>
                <pre>{JSON.stringify(schema, null, 2)}</pre>
            </div>
            <div style={{ display: "flex", padding: 20, borderBottom: "1px solid #EEE" }}>
                <div style={{ width: 500 }}><ReorderEmployees /></div>
                <pre>{JSON.stringify(reorderSchema, null, 2)}</pre>
            </div>
            <div style={{ display: "flex", padding: 20, borderBottom: "1px solid #EEE" }}>
                <div style={{ width: 500 }}><EmployeesAddAtIndex /></div>
                <pre>{JSON.stringify(addAtIndexSchema, null, 2)}</pre>
            </div>
            <div style={{ display: "flex", padding: 20, borderBottom: "1px solid #EEE" }}>
                <div style={{ width: 500 }}><CustomButtonIterable /></div>
                <pre>{JSON.stringify(customButtonIterableSchema, null, 2)}</pre>
            </div>
            <Disclaimer />
        </div>
    }
}

export { Iterable }
