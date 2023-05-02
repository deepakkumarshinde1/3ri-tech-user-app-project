import { useDispatch, useSelector } from "react-redux";
import { inputChange, resetFrom, saveUser } from "../redux/UserReducers";
import Alert from "../popups/sweetAlert";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { newUser } = useSelector((state) => state.user);

  // how states from redux ==> useSelector( (state) =>sate )
  let _inputChange = (event) => {
    dispatch(
      inputChange({ name: event.target.name, value: event.target.value })
    );
    // dispatch ===> useDispatch react-redux
  };

  let _saveUser = (event) => {
    event.preventDefault();
    // call save user
    dispatch(saveUser());
    Alert.fire({
      title: "Success",
      text: "User Added Successfully.",
      icon: "success",
    }).then(() => {
      dispatch(resetFrom());
      // navigate to home page
      navigate("/user/list");
    });
  };
  return (
    <>
      <section className="row">
        <section className="col-lg-6 col-10 mx-auto">
          <p className="text-center h3 mt-2">
            <i className="fa fa-user-plus text-success"></i> Add User
          </p>
          <section className="card m-3 p-3 border border-success">
            <form onSubmit={_saveUser}>
              <div className="mb-3">
                <label htmlFor="full_name" className="form-label">
                  Full Name
                </label>
                <input
                  onChange={_inputChange}
                  type="text"
                  className="form-control"
                  id="full_name"
                  value={newUser.fullName}
                  name="fullName"
                  placeholder="Enter Name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  onChange={_inputChange}
                  type="text"
                  className="form-control"
                  id="email"
                  value={newUser.email}
                  name="email"
                  placeholder="Enter Email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile
                </label>
                <input
                  onChange={_inputChange}
                  type="text"
                  className="form-control"
                  id="mobile"
                  value={newUser.mobile}
                  name="mobile"
                  placeholder="Enter Mobile Number"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <textarea
                  onChange={_inputChange}
                  className="form-control"
                  id="address"
                  value={newUser.address}
                  name="address"
                  placeholder="Enter Address"
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Gender
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="Male"
                    id="male"
                    name="gender"
                    onChange={_inputChange}
                    checked={newUser.gender === "Male" ? true : false}
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="Female"
                    id="female"
                    name="gender"
                    onChange={_inputChange}
                    checked={newUser.gender === "Female" ? true : false}
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <select
                  onChange={_inputChange}
                  type="text"
                  className="form-select"
                  id="city"
                  value={newUser.city}
                  name="city"
                >
                  <option value="">---Select---</option>
                  <option value="Pune">Pune</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Nashik">Nashik</option>
                  <option value="Surat">Surat</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary">
                <i className="fa fa-floppy-o"></i> Submit
              </button>
            </form>
          </section>
        </section>
      </section>
    </>
  );
};

export default AddUser;
