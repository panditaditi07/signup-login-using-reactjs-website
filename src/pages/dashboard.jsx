import { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./dashboard.module.css";

class DashBoard extends Component {
  render() {
    return (
      <div className={styles["container"]}>
        <Header page={"Dashboard"} />
        <div className={styles["home-container"]}>
          <h1 className={styles["heading"]}>DashBoard</h1>
          <p className={styles["welcome"]}>
            Login Successful, Welcome {this.props.email}
          </p>
          <img
            src="https://thumbs.gfycat.com/AncientBouncyLeafcutterant-size_restricted.gif"
            alt="welcome banner"
            className={styles["welcome-banner"]}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default DashBoard;
