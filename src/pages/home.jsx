import { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import homeStyle from "./home.module.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <div>
          <Header page={"Home"} />
        </div>
        <div className={homeStyle["main-container"]}>
          <div>
            <img
              className={homeStyle["banner-image"]}
              src="https://media1.tenor.com/images/786e6c1d63b24d53a872f467c81547e8/tenor.gif?itemid=14118662"
              alt="banner pic"
            />
          </div>
          <div className={homeStyle["intro-card"]}>
            <h1 className={homeStyle["banner-heading"]}>
              Welcome to Code with Us!
            </h1>
            <div>
              <img
                src="https://thehackernews.com/images/-NzsLoeMW1-k/XfdnYQzpY6I/AAAAAAAA1-A/JmTdw-USLmIY608y--HAlK8kBsnaCEryQCLcBGAsYHQ/s728-e100/cybersecurity-training-for-software-developers.jpg"
                alt="welcome pic"
                className={homeStyle["welcome-image"]}
              />
            </div>
            <div className={homeStyle["signup-card"]}>
              <p className={homeStyle["signup-link"]}>
                <Link to="/signup" className={homeStyle["link"]}>
                  Create an account
                </Link>
              </p>
            </div>
            <div className={homeStyle["login-card"]}>
              <p className={homeStyle["login-link"]}>
                <Link to="/login" className={homeStyle["link"]}>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
