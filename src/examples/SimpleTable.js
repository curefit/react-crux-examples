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

class SimpleTable extends Component {
    render() {
        return <div style={{width: 500, padding: 20}}>
            <Employees/>
            <Disclaimer/>
        </div>
    }
}
export { SimpleTable }
