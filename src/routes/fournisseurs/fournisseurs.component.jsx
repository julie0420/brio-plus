import Directory from "../../components/directory/directory.component ";
import FOURNISSEURS_DATA from "../../fournisseurs-data.json";

import "./fournisseurs.styles.scss";

const Fournisseurs = () => {
  return (
    <div className="fournisseur-component">
      <h1>Liste des fournisseurs</h1>
      <Directory fournisseurs={FOURNISSEURS_DATA} />
    </div>
  );
};

export default Fournisseurs;
