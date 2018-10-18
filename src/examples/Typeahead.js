import React, {Component} from "react"
import { CruxComponentCreator } from "react-crux"
import {Disclaimer} from "../Disclaimer"
const schema = {
    modelName: "employees",
    title: "Employees with Managers",
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
            title: "Manager",
            field: "manager",
            editable: true,
            display: true,
            type: "typeahead",
            foreign: {
                modelName: "employees",
                key: "id",
                title: "name"
            }
        }
    ],
    createModal: true
}

const Employees = CruxComponentCreator.create(schema)

class Typeahead extends Component {
    render() {
        return <div style={{padding: 20}}>
            <div style={{display: "flex", padding: 20, borderBottom: "1px solid #EEE"}}>
                <div style={{width: 500}}><Employees/></div>
                <pre>{JSON.stringify(schema, null, 2)}</pre>
            </div>
            <Disclaimer/>
        </div>
    }
}

export { Typeahead }
