const NavBar = (props) => {
  return (
    <>
      <section className="row">
        <section className="col-12 border-bottom border-2 border-primary">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand text-primary fw-bold" href="#">
                <i className="fa fa-users"></i> User App
              </a>
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
                    <a className="nav-link active" aria-current="page" href="#">
                      <i className="fa fa-home"></i> Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-user-plus"></i> Add User
                    </a>
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
