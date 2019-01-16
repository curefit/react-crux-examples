import { CruxComponentCreator, ModalComponent } from "react-crux"
import React, {Component} from "react"
import {Disclaimer} from "../Disclaimer"

const creationDisabledSchema = {
    modelName: "employees",
    title: "Employees (Creation Disabled)",
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
    createModal: false
}

const EmployeesCreationDisabled = CruxComponentCreator.create(creationDisabledSchema)

const editDisabledSchema = {
    modelName: "employees",
    title: "Employees (Edit Disabled)",
    creationTitle: "Employee",
    editModal: false,
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

const EmployeesEditDisabled = CruxComponentCreator.create(editDisabledSchema)

const selectiveColumnsSchema = {
    modelName: "employees",
    title: "Employees (Hide Columns)",
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
            display: false
        }
    ],
    createModal: true
}

const EmployeesSelectiveColumns = CruxComponentCreator.create(selectiveColumnsSchema)

const selectiveEditsSchema = {
    modelName: "employees",
    title: "Employees (Selective Edits)",
    creationTitle: "Employee",
    editModal: true,
    fields: [
        {
            title: "Name",
            field: "name",
            editable: false,
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
    createModal: false
}

const EmployeesSelectiveEdits = CruxComponentCreator.create(selectiveEditsSchema)

const readonlySchema = {
    modelName: "employees",
    title: "Employees (Selective Readonly & Edits)",
    creationTitle: "Employee",
    editModal: true,
    fields: [
        {
            title: "Name",
            field: "name",
            readonly: true,
            representative: true,
            display: true
        },
        {
            title: "Age",
            readonly: true,
            display: true,
            field: "age"
        },
        {
            title: "Email Address",
            field: "emailAddress",
            editable: true,
            display: true
        }
    ]
}

const ReadonlyEdits = CruxComponentCreator.create(readonlySchema)

const customButtonSchema = {
    modelName: "employees",
    title: "Employees (Custom Button)",
    creationTitle: "Employee",
    editModal: true,
    customModal: true,
    customModalComponent: customModalComponent,
    fields: [
        {
            title: "Name",
            field: "name",
            readonly: true,
            representative: true,
            display: true
        }
    ]
}

const customModalSchema = {
    creationTitle: "Employees (Custom Modal)",
    modelName: "employees",
    fields: [
        {
            title: "Age",
            editable: true,
            field: "age",
            representative: true
        }
    ]
}

function customModalComponent(model, closeModal, sucessDispatch, failureDispatch) {
    class CustomModalComponent extends React.Component {

        customModalSuccess( modelName, item) {
            closeModal()
        }

        render() {
            return (<ModalComponent
                constants={customModalSchema}
                showModal={true}
                closeModal={closeModal}
                modalType={"CUSTOM"}
                successButtonLabel={"SAVE"}
                item={model}
                createOrModify={this.customModalSuccess}
                additionalModels={[]}
            />)
        }
    }
    return CustomModalComponent
}

const CustomButton = CruxComponentCreator.create(customButtonSchema)

const paginationSchema = {
    modelName: "employees",
    title: "Employees (Server Side Pagination)",
    creationTitle: "Employee",
    editModal: true,
    paginate: {
        defaultPageSize : 10,
        allowedPageSizes : [10, 50, 100, 500, 1000]
    },
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
    ]
}

class Options extends Component {
    render() {
        return <div style={{padding: 20}}>
            <div style={{display: "flex", padding: 20, borderBottom: "1px solid #EEE"}}>
                <div style={{width: 500}}><EmployeesCreationDisabled/></div>
                <pre>{JSON.stringify(creationDisabledSchema, null, 2)}</pre>
            </div>
            <div style={{display: "flex", padding: 20, borderBottom: "1px solid #EEE"}}>
                <div style={{width: 500}}><EmployeesEditDisabled/></div>
                <pre>{JSON.stringify(editDisabledSchema, null, 2)}</pre>
            </div>
            <div style={{display: "flex", padding: 20, borderBottom: "1px solid #EEE"}}>
                <div style={{width: 500}}><EmployeesSelectiveColumns/></div>
                <pre>{JSON.stringify(selectiveColumnsSchema, null, 2)}</pre>
            </div>
            <div style={{display: "flex", padding: 20, borderBottom: "1px solid #EEE"}}>
                <div style={{width: 500}}><EmployeesSelectiveEdits/></div>
                <pre>{JSON.stringify(selectiveEditsSchema, null, 2)}</pre>
            </div>
            <div style={{display: "flex", padding: 20, borderBottom: "1px solid #EEE"}}>
                <div style={{width: 500}}><ReadonlyEdits/></div>
                <pre>{JSON.stringify(readonlySchema, null, 2)}</pre>
            </div>
            <div style={{display: "flex", padding: 20, borderBottom: "1px solid #EEE"}}>
                <div style={{width: 500}}><CustomButton/></div>
                <pre>{JSON.stringify(customButtonSchema, null, 2) + "\n Custom Modal Fields \n" + JSON.stringify(customModalSchema, null, 2)}</pre>
            </div>
            <div style={{display: "flex", padding: 20, borderBottom: "1px solid #EEE"}}>
                <div style={{width: 500}}><span>Server Side Pagination</span></div>
                <pre>{JSON.stringify(paginationSchema, null, 2)}</pre>
            </div>
            <Disclaimer/>
        </div>
    }
}
export { Options }
