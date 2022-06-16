import "./table.scss"
import pic from "../../images/avatar.png"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

const List = () => {
  const rows = [
    {
      id: 12643313,
      product: "Acer Nitro",
      img: pic,
      costumer: "John Smith",
      date: "1 march",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 16416579,
      product: "Playstation 5",
      img: pic,
      costumer: "Michael Doe",
      date: "1 march",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 46491346,
      product: "Redragon S101",
      img: pic,
      costumer: "John Smith",
      date: "1 march",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 12646498,
      product: "Razer Blade 15",
      img: pic,
      costumer: "John Smith",
      date: "1 march",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 54649464,
      product: "ASUS ROG Strix",
      img: pic,
      costumer: "Jane Smith",
      date: "1 march",
      amount: 785,
      method: "Online",
      status: "Pending",
    },
  ]

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="Simple Table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking Id</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Costumer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">
                {row.id}
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">
                {row.costumer}
              </TableCell>
              <TableCell className="tableCell">
                {row.date}
              </TableCell>
              <TableCell className="tableCell">
                {row.amount}
              </TableCell>
              <TableCell className="tableCell">
                {row.method}
              </TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List