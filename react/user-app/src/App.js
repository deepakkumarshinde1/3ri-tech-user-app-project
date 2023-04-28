// import is optional
import AddUser from "./components/AddUser";
import NavBar from "./components/NavBar";
import UserList from "./components/UserList";
import { useState } from "react";
import Alert from "./popups/sweetAlert";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

let App = () => {
  // make data centralized (single source of truth)
  // #1 move data/ functionality to App.js
  // #2 Use Context API (react)
  // #3 Use Redux (lib)
  let navigate = useNavigate();
  let [users, setUsers] = useState([]);

  let initialValue = {
    fullName: "",
    email: "",
    mobile: "",
    address: "",
    gender: "",
    city: "",
  };

  let [newUser, setNewUser] = useState({
    ...initialValue,
  });

  let inputChange = (event) => {
    let { name, value } = event.target;
    // newUser['fullName'] = value
    setNewUser({ ...newUser, [name]: value });
    // on save recreate object
  };

  let saveUser = (event) => {
    event.preventDefault(); // prevent default submission
    // let _users = [...users]
    // _users.push({ ...newUser })
    setUsers([...users, { ...newUser }]);
    Alert.fire({
      title: "Success",
      text: "User Added Successfully.",
      icon: "success",
    }).then(() => {
      setNewUser({
        ...initialValue,
      });
      // navigate to home page
      navigate("/user/list");
    });
  };

  let removeUser = (id) => {
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
        let _users = [...users];
        _users.splice(id, 1); // index , deleteCount
        setUsers(_users);

        Alert.fire("Deleted!", "User Deleted Successfully", "success");
      }
    });
  };
  return (
    <>
      <main className="container-fluid">
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/user/list" />} />

          <Route
            path="/user/list"
            element={<UserList users={users} removeUser={removeUser} />}
          />

          <Route
            path="/user/add"
            element={
              <AddUser
                saveUser={saveUser}
                inputChange={inputChange}
                newUser={newUser}
              />
            }
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
};

// export
export default App;
