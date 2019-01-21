import React, {Component} from "react"
import { CruxComponentCreator } from "react-crux"
import {Disclaimer} from "../Disclaimer"
const schema = {
    modelName: "employees",
    title: "Employees with Date of Joining",
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
            title: "Date Of Joining",
            editable: true,
            display: true,
            field: "joiningDate",
            type: "datepicker"
        }
    ],
    createModal: true
}

const Employees = CruxComponentCreator.create(schema)

const timeSelectSchema = {
    modelName: "employees",
    title: "Employees with Date of Joining (Time Select)",
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
            title: "Date Of Joining",
            editable: true,
            display: true,
            showTimeSelect: true,
            field: "joiningDate",
            type: "datepicker"
        }
    ],
    createModal: true
}

const TimeSelectEmployees = CruxComponentCreator.create(timeSelectSchema)

class DatePicker extends Component {
    render() {
        return <div style={{padding: 20}}>
            <div style={{display: "flex", padding: 20, borderBottom: "1px solid #EEE"}}>
                <div style={{width: 500}}><Employees/></div>
                <pre>{JSON.stringify(schema, null, 2)}</pre>
            </div>
            <div style={{display: "flex", padding: 20, borderBottom: "1px solid #EEE"}}>
                <div style={{width: 500}}><TimeSelectEmployees /></div>
                <pre>{JSON.stringify(timeSelectSchema, null, 2)}</pre>
            </div>
            <Disclaimer/>
        </div>
    }
}

export { DatePicker }
