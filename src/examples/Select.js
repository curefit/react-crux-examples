import React, {Component} from "react"
import { CruxComponentCreator } from "react-crux"
import {Disclaimer} from "../Disclaimer"
const schema = {
    modelName: "employees",
    title: "Employees",
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
        },
        {
            title: "Gender",
            field: "gender",
            editable: true,
            display: true,
            type: "select",
            foreign: {
                modelName: "genders",
                key: "id",
                title: "displayName"
            }
        }
    ],
    createModal: true
}

const BodyParts = CruxComponentCreator.create(schema)

class Select extends Component {
    render() {
        return <div style={{padding: 20}}>
            <div style={{display: "flex", padding: 20, borderBottom: "1px solid #EEE"}}>
                <div style={{width: 500}}><BodyParts/></div>
                <pre>{JSON.stringify(schema, null, 2)}</pre>
            </div><BodyParts/>
            <Disclaimer/>
        </div>
    }
}

export { Select }
