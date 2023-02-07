import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
import SignUp from "./routes/sign-up/sign-up.component";
import Footer from "./components/footer/footer.component";
import Home from "./routes/home/home.component";
import Commander from "./routes/commander/commander.component";

import Fournisseurs from "./routes/fournisseurs/fournisseurs.component";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="fournisseurs" element={<Fournisseurs />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="commander" element={<Commander />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
