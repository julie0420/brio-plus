import "./fournisseur-item.styles.scss";

const FournisseurItem = ({ category }) => {
  const { title, link } = category;
  return (
    <div className="fournisseur-container">
      {
        <a className="fournisseur-container-link" href={link}>
          {title}
        </a>
      }
    </div>
  );
};

export default FournisseurItem;
