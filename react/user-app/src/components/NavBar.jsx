import { Link, NavLink } from "react-router-dom";

const NavBar = (props) => {
  let activeClass =
    "nav-link text-primary border-bottom border-primary border-1";
  return (
    <>
      <section className="row">
        <section className="col-12 border-bottom border-2 border-primary">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link className="navbar-brand text-primary fw-bold" to="/">
                <i className="fa fa-users"></i> User App
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? activeClass : "nav-link "
                      }
                      aria-current="page"
                      to="/user/list"
                    >
                      <i className="fa fa-home"></i> Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? activeClass : "nav-link "
                      }
                      to="/user/add"
                    >
                      <i className="fa fa-user-plus"></i> Add User
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
      </section>
    </>
  );
};

export default NavBar;
