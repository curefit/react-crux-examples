import { CruxComponentCreator } from "react-crux"
import React, {Component} from "react"
import {Disclaimer} from "../Disclaimer"

const schema = {
    modelName: "employees",
    title: "All Employees",
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
            title: "Email Address",
            field: "emailAddress",
            editable: true,
            display: true
        }
    ],
    createModal: true
}

const Employees = CruxComponentCreator.create(schema)

const saveAsNewSchema = {
    modelName: "employees",
    title: "All Employees (Save As New Option)",
    creationTitle: "Employee",
    editModal: true,
    saveAsNew: true,
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
            title: "Email Address",
            field: "emailAddress",
            editable: true,
            display: true
        }
    ],
    createModal: true
}

const SaveAsNewEmployee = CruxComponentCreator.create(saveAsNewSchema)

class SimpleTable extends Component {
    render() {
        return <div style={{padding: 20}}>
            <div style={{display: "flex", padding: 20, borderBottom: "1px solid #EEE"}}>
                <div style={{width: 500}}><Employees/></div>
                <pre>{JSON.stringify(schema, null, 2)}</pre>
            </div>
            <div style={{display: "flex", padding: 20, borderBottom: "1px solid #EEE"}}>
                <div style={{width: 500}}><SaveAsNewEmployee /></div>
                <pre>{JSON.stringify(saveAsNewSchema, null, 2)}</pre>
            </div>
            <Disclaimer/>
        </div>
    }
}
export { SimpleTable }
