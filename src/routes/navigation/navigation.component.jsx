import { Fragment } from "react";

import { Outlet, Link } from "react-router-dom";

import { ReactComponent as BrioLogo } from "../../assets/test5.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <BrioLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/fournisseurs">
            Fournisseurs
          </Link>
          <Link className="nav-link" to="/signIn">
            Connexion
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
