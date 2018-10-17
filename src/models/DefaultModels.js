import {bodyParts, bodyPartTags, bodyPartTypes} from "./BodyParts"
import {Employees} from "./Employees"

const DefaultModels= {
    mediaTypes: [
        {
            typeId: "IMAGE",
            title: "Image"
        },
        {
            typeId: "VIDEO",
            title: "Video"
        }
    ],
    partTypes: [
        {
            typeId: "RUNNING",
            title: "Running"
        },
        {
            typeId: "MOBILITY",
            title: "Mobility"
        },
        {
            typeId: "GROUP_WORKOUT",
            title: "Group Workout"
        },
        {
            typeId: "STRETCH",
            title: "Stretch"
        },
        {
            typeId: "COOLDOWN",
            title: "Cool Down"
        },
        {
            typeId: "WATER_BREAK",
            title: "Water Break"
        },
        {
            typeId: "MOBILIZER",
            title: "Mobilizer"
        },
        {
            typeId: "ZMR",
            title: "ZMR"
        }
    ],
    groupWorkoutTypes: [
        {
            typeId: "SINGLE",
            title: "Single"
        },
        {
            typeId: "SEQUENTIAL",
            title: "Compound - Sequential"
        },
        {
            typeId: "PARALLEL",
            title: "Compound - Parallel",
            display: "In Parallel"
        },
        {
            typeId: "STATION",
            title: "Compound - Station Based",
            display: "Station Based"
        },
        {
            typeId: "PARTNER",
            title: "Compound - Partner Based",
            display: "Partner Based"
        },
    ],
    timeUnits: [
        {
            typeId: "MINS",
            title: "minutes"
        },
        {
            typeId: "SECONDS",
            title: "seconds"
        }
    ],
    genders: [
        {
            id: "MALE",
            displayName: "Male"
        },
        {
            id: "FEMALE",
            displayName: "Female"
        }
    ],
    bodyParts: bodyParts,
    bodyPartTypes: bodyPartTypes,
    bodyPartTagss: bodyPartTags,
    employees: Employees
}

export { DefaultModels }