import { Component } from "react";
import footerstyle from "./footer.module.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <span className={footerstyle["footer-heading"]}>
          <p className={footerstyle["copyright-heading"]}>Code with Us!</p>
          <br />
          <p className={footerstyle["copyright"]}>
            Copyright &copy; CodeWithUs.com 2021
          </p>
        </span>
      </footer>
    );
  }
}

export default Footer;
