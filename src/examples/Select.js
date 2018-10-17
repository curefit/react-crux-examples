import * as React from "react"
import { CruxComponentCreator } from "@curefit/react-crux"

const constants = {
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

const BodyParts = CruxComponentCreator.create(constants)
export { BodyParts as Select }
