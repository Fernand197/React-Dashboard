import "./datatable.scss"
import { DataGrid } from "@mui/x-data-grid"
import pic from '../../images/avatar.png'
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';


const DataTable = () => {
    const actionColumns = [
        {
            field: 'action',
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
    ]
    return (
        <div className="datatable">
            <div className="datatableTitle">
                Add New User
                <Link to="/users/new" className="link" style={{ textDecoration: "none" }}>
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={userRows}
                columns={userColumns.concat(actionColumns)}
                pageSize={9}
                rowsPerPageOption={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable