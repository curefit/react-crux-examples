import React, {Component} from "react"
import { CruxComponentCreator } from "react-crux"
import {Disclaimer} from "../Disclaimer"
const schema = {
    modelName: "bodyParts",
    title: "Body Parts",
    creationTitle: "Body Part",
    editModal: true,
    fields: [
        {
            title: "Body Part",
            field: "title",
            editable: true,
            representative: true,
            display: true
        },
        {
            title: "Type",
            editable: true,
            display: true,
            field: "typeId",
            type: "select",
            foreign: {
                modelName: "bodyPartTypes",
                key: "_id",
                title: "title",
            }
        },
        {
            title: "Tags",
            field: "tags",
            editable: true,
            display: true,
            type: "iterable",
            iterabletype: {
                type: "select",
                title: "Tag",
                displayChildren: "inline",
                foreign: {
                    modelName: "bodyPartTags",
                    key: "_id",
                    title: "title",
                },
            },
        }
    ],
    createModal: true
}

const BodyParts = CruxComponentCreator.create(schema)

class Select extends Component {
    render() {
        return <div style={{width: 400, padding: 20}}>
            <BodyParts/>
            <Disclaimer/>
        </div>
    }
}

export { Select }
