import { Fragment, useContext } from "react";

import { Outlet, Link, useNavigate } from "react-router-dom";

import { ReactComponent as BrioLogo } from "../../assets/test5.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser as signOutTheUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const checkoutHandler = () => {
    signOutTheUser();
    navigate("/");
  };

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
          {currentUser ? (
            <span className="nav-link" onClick={checkoutHandler}>
              Déconnexion
            </span>
          ) : (
            <Link className="nav-link" to="/signIn">
              Connexion
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
