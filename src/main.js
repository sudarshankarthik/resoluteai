import AddStudent from "./addStudent"
import ManageStudent from "./manageStudent"

function Main(props) {

  return (
    props.page === 1 ? <AddStudent /> : <ManageStudent />
  )
}

export default Main