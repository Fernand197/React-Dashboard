import pic from "./images/avatar.png"
export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user',
        headerName: 'User', 
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={ params.row.img } alt="avatar" />
                    {params.row.username}
                </div>
            )
        }
    },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'age', headerName: 'Age', width: 100 },
    {
        field: 'status',
        headerName: 'Status',
        width: 160,
        renderCell: (params) => {
            return (
                <div class={`cellWithStatus ${params.row.status}`}>{ params.row.status }</div>
            )
        }
    },
]
export const userRows = [
    { 
        id: 1, 
        username: 'Snow', 
        img: pic,
        status: "active",
        email: "Snow@email.com",
        age: 38 
    },
    { 
        id: 2, 
        username: 'Lannister', 
        img: pic,
        status: "passive",
        email: "Lannister@email.com",
        age: 42 
    },
    { 
        id: 3, 
        username: 'Lannister', 
        img: pic,
        status: "pending",
        email: "Lannister@email.com",
        age: 45 
    },
    { 
        id: 4, 
        username: 'Stark', 
        img: pic,
        status: "active",
        email: "Stark@email.com",
        age: 16 
    },
    { 
        id: 5, 
        username: 'Targaryen', 
        img: pic,
        status: "active",
        email: "Targaryen@email.com",
        age: null 
    },
    { 
        id: 6, 
        username: 'Melisandre', 
        img: pic,
        status: "passive",
        email: "Melisandre@email.com",
        age: 150 
    },
    { 
        id: 7, 
        username: 'Clifford', 
        img: pic,
        status: "active",
        email: "Clifford@email.com",
        age: 44 
    },
    { 
        id: 8, 
        username: 'Frances', 
        img: pic,
        status: "pending",
        email: "Frances@email.com",
        age: 36 
    },
    { 
        id: 9, 
        username: 'Roxie', 
        img: pic,
        status: "passive",
        email: "Roxie@email.com",
        age: 65 
    },
]