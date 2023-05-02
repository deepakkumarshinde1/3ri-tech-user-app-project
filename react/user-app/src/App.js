// import is optional
import AddUser from "./components/AddUser";
import NavBar from "./components/NavBar";
import UserList from "./components/UserList";
import { useState } from "react";
import Alert from "./popups/sweetAlert";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

let App = () => {
  return (
    <>
      <main className="container-fluid">
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/user/list" />} />

          <Route path="/user/list" element={<UserList />} />

          <Route path="/user/add" element={<AddUser />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
};

// export
export default App;
