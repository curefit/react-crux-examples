import React, {Component} from "react"
import { CruxComponentCreator } from "react-crux"
import {Disclaimer} from "../Disclaimer"
const schema = {
    modelName: "employees",
    title: "Employees with address",
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
            title: "Address",
            editable: true,
            display: true,
            field: "address",
            type: "nested",
            fields: [
                {
                    title: "Address Type",
                    field: "type",
                    display: true,
                    editable: true,
                    type: "select",
                    foreign: {
                        modelName: "addressTypes",
                        key: "typeId",
                        title: "displayName"
                    }
                },
                {
                    title: "Address Line 1",
                    field: "addressLine1",
                    display: true,
                    editable: true
                },
                {
                    title: "Address Type",
                    field: "addressLine2",
                    display: true,
                    editable: true
                },
                {
                    title: "City",
                    field: "city",
                    display: true,
                    editable: true
                },
                {
                    title: "ZipCode",
                    field: "zipcode",
                    display: true,
                    editable: true,
                    type: "tinyinput"
                }
            ]
        }
    ],
    createModal: true
}

const Employees = CruxComponentCreator.create(schema)

class Nested extends Component {
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

export { Nested }
