import { Fragment } from "react";

import { Outlet } from "react-router-dom";

import { ReactComponent as BrioLogo } from "../../assets/test5.svg";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <BrioLogo className="logofooter" />
        <span>
          <span>&#169;</span>2023 Brio Impression Professionnelle
        </span>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Footer;
