import FournisseurItem from "../fournisseur-item/fournisseur-item.component";

import "./directory.styles.scss";

const Directory = ({ fournisseurs }) => {
  return (
    <div className="fournisseurs-container">
      {fournisseurs.map((fournisseur) => (
        <FournisseurItem key={fournisseur.id} category={fournisseur} />
      ))}
    </div>
  );
};

export default Directory;
