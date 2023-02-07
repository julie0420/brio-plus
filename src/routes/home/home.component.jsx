import coverImg from "../../assets/sample.jpg";
import cards from "../../assets/cards.png";
import bag from "../../assets/bag.jpg";
import mug from "../../assets/mug.jpg";
import chandail from "../../assets/chandail.jpg";
import people from "../../assets/people.jpg";
import dog from "../../assets/dog.jpg";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className="homepage-div">
      <img className="coverImg" src={coverImg} alt="Shop" />
      <div className="sampleImages">
        <img className="midImg" src={chandail} alt="Shop" />
        <img className="midImg" src={mug} alt="Shop" />
        <img className="midImg" src={bag} alt="Shop" />
        <img className="midImg" src={cards} alt="Shop" />
      </div>
      <div className="intro">
        <h2>Bienvenue chez Brio Impression professionnelle</h2>
        <span>
          Ici une description de la compagnie et des service offert. Ici une
          description de la compagnie et des service offert. Ici une description
          de la compagnie et des service offert. Ici une description de la
          compagnie et des service offert. Ici une description de la compagnie
          et des service offert. Ici une description de la compagnie et des
          service offert. Ici une description de la compagnie et des service
          offert. Ici une description de la compagnie et des service offert. Ici
          une description de la compagnie et des service offert. Ici une
          description de la compagnie et des service offert. Ici une description
          de la compagnie et des service offert. Ici une description de la
          compagnie et des service offert. Ici une description de la compagnie
          et des service offert. Ici une description de la compagnie et des
          service offert.
        </span>
        <img className="people" src={people} alt="Shop" />
        <img className="dog" src={dog} alt="Shop" />
      </div>
    </div>
  );
};

export default Home;
