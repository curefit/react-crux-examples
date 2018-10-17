import React, {Component} from "react"
import { CruxComponentCreator } from "react-crux"
import {Disclaimer} from "../Disclaimer"
const schema = {
    modelName: "employees",
    title: "Employees with list of enumerable roles",
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
            title: "Roles",
            editable: true,
            display: true,
            field: "roles",
            type: "iterable",
            iterabletype: {
                title: "Role",
                type: "select",
                foreign: {
                    modelName: "roles",
                    key: "roleId",
                    title: "roleName"
                }
            }
        }
    ],
    createModal: true
}

const Employees = CruxComponentCreator.create(schema)

class IterableOfSelect extends Component {
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

export { IterableOfSelect }
