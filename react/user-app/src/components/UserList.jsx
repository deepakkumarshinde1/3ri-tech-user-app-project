const UserList = (props) => {
  let { users, removeUser } = props;
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
              {users.map((user, index) => {
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{user.fullName}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeUser(index)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                      <button className="btn btn-primary mx-2 btn-sm">
                        <i className="fa fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
};

export default UserList;
