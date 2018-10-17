import React, {Component} from "react"
import { CruxComponentCreator } from "react-crux"
import {Disclaimer} from "../Disclaimer"
const schema = {
    modelName: "employees",
    title: "Employees with Work Experience",
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
            title: "Past Experience",
            editable: true,
            display: true,
            field: "history",
            type: "iterable",
            iterabletype: {
                title: "Company",
                type: "nested",
                fields: [
                    {
                        title: "Company Name",
                        field: "companyName",
                        display: true,
                        editable: true
                    },
                    {
                        title: "Duration",
                        field: "duration",
                        display: true,
                        editable: true,
                        type: "nested",
                        fields: [
                            {
                                title: "Number",
                                field: "number",
                                display: true,
                                editable: true
                            },
                            {
                                title: "Months/Years",
                                field: "durationType",
                                display: true,
                                editable: true,
                                type: "select",
                                foreign: {
                                    modelName: "durationTypes",
                                    key: "typeId",
                                    title: "displayName"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ],
    createModal: true
}

const Employees = CruxComponentCreator.create(schema)

class IterableOfNested extends Component {
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

export { IterableOfNested }
