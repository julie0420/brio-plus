import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { ReactComponent as Test } from "../../assets/img.svg";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate("/fournisseurs");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      navigate("/fournisseurs");

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Connexion</h2>
      <span>
        Se connecter ou{" "}
        <Link to="/signUp" className="sign-up-link">
          créer un compte
        </Link>
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Connexion</Button>
          <div className="divider center">
            <hr />
            <label>ou</label>
            <hr />
          </div>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            <Test className="googleImg" />
            Connexion avec Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
