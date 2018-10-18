export const Employees = [
    {
        id: 1,
        name: "John Doe",
        age: "31",
        emailAddress: "johndoe@cruxcomponent.com",
        gender: "MALE",
        tags: ["Tag1", "Tag2", "Tag3"],
        roles: ["OWNER", "MANAGER"],
        history: [
            {
                companyName: "Acme Industries",
                duration: {
                    number: 2,
                    durationType: "YEAR"
                }
            },
            {
                companyName: "Thingamajig Co",
                duration: {
                    number: 9,
                    durationType: "MONTH"
                }
            },
        ],
        address: {
            addressType: "HOME",
            addressLine1: "221B",
            addressLine2: "Baker Street",
            city: "London",
            zipCode: "45634"
        },
        isPartTime: true,
        manager: 2
    },
    {
        id: 2,
        name: "John Hancock",
        age: "16",
        emailAddress: "johnhancock@cruxcomponent.com",
        tags: ["Tag2"],
        roles: ["VIEWER", "EDITOR"],
        joiningDate: "2018-01-13T06:30:58.000Z",
        manager: 4,
        selfIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 3,
        name: "Jane Doe",
        age: "42",
        emailAddress: "janedoe@cruxcomponent.com",
        gender: "FEMALE",
        roles: ["VIEWER"],
        history: [
            {
                companyName: "Pied Piper",
                duration: {
                    number: "5",
                    durationType: "MONTH"
                }
            },
            {
                companyName: "Hooli",
                duration: {
                    number: "9",
                    durationType: "YEAR"
                }
            },
        ],
        isPartTime: false,
        manager: 4
    },
    {
        id: 4,
        name: "Ankit Gupta",
        age: "33",
        emailAddress: "ankit.gupta@cruxcomponent.com",
        gender: "MALE",
        tags: ["Tag4", "Tag4"],
        address: {
            addressType: "OFFICE",
            addressLine1: "12 Grimmauld Palace",
            city: "London",
            zipCode: "45634"
        },
        joiningDate: "October 12, 2018"
    }
]

export const Roles = [
    {
        roleId: "OWNER",
        roleName: "Owner"
    },
    {
        roleId: "MANAGER",
        roleName: "Manager"
    },
    {
        roleId: "VIEWER",
        roleName: "Viewer"
    },
    {
        roleId: "EDITOR",
        roleName: "Editor"
    },
    {
        roleId: "REVIEWER",
        roleName: "Reviewer"
    }
]

export const DurationTypes = [
    {
        typeId: "MONTH",
        displayName: "Months"
    },
    {
        typeId: "YEAR",
        displayName: "Years"
    }
]

export const AddressTypes = [
    {
        typeId: "HOME",
        displayName: "Home"
    },
    {
        typeId: "OFFICE",
        displayName: "Office"
    },
    {
        typeId: "OTHER",
        displayName: "Other"
    }
]