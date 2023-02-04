import { Outlet } from "react-router-dom";
import { useLayoutEffect } from "react";

import Directory from "../../components/directory/directory.component ";

const Home = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#fa4f00";
  });

  const fournisseurs = [
    {
      id: 1,
      title: "ssactivewear",
      link: "https://fr-ca.ssactivewear.com/",
    },
    {
      id: 2,
      title: "Wallmart",
      link: "https://www.walmart.ca/en/",
    },
  ];

  return (
    <div>
      <Outlet />
      <Directory fournisseurs={fournisseurs} />
    </div>
  );
};

export default Home;
