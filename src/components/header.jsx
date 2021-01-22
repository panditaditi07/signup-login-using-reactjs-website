import { Component } from "react";
import { Link } from "react-router-dom";
import NavStyle from "./header.module.css";

class Header extends Component {
  state = {
    navbar: [],
  };
  componentDidMount = (event) => {
    if (this.props.page === "Home") {
      let navbar = [{ link: "/", name: "Home" }];
      this.setState({ navbar: navbar });
    } else if (this.props.page === "Dashboard") {
      let navbar = [{ link: "/", name: "Logout" }];
      this.setState({ navbar: navbar });
    }
  };
  render() {
    return (
      <div className={NavStyle["topnav"]}>
        <h3 className={NavStyle["logo"]}>Code with Us!</h3>
        <ul>
          {this.state.navbar.map((nav, i) => {
            return (
              <div key={i}>
                <Link className={NavStyle["link"]} to={nav.link}>
                  <li className={NavStyle["link-name"]}>{nav.name}</li>
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Header;
