import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../redux/UserReducers";
import Alert from "../popups/sweetAlert";

const UserList = (props) => {
  let dispatch = useDispatch();
  let { users } = useSelector((state) => state.user);
  let navigate = useNavigate();
  let _removeUser = (id) => {
    Alert.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // delete
        dispatch(deleteUser({ id: id }));
        // call delete user

        Alert.fire("Deleted!", "User Deleted Successfully", "success");
      }
    });
  };
  return (
    <>
      <section className="row">
        <section className="col-10 mx-auto">
          <p className="text-center h3">
            <i className="fa fa-list text-danger"></i> User List
          </p>
          <table className="table table-bordered">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length == 0 ? (
                <tr>
                  <td colSpan={6}>
                    <p className="text-center">
                      No User Found{" "}
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => navigate("/user/add")}
                      >
                        Add New
                      </button>
                    </p>
                  </td>
                </tr>
              ) : (
                users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{user.fullName}</td>
                      <td>{user.email}</td>
                      <td>{user.gender}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => _removeUser(index)}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                        <button className="btn btn-primary mx-2 btn-sm">
                          <i className="fa fa-edit"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
};

export default UserList;
