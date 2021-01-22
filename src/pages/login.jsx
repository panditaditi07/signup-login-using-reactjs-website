import { Component } from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import DashBoard from "./dashboard";
import Loader from "react-loader-spinner";
const url = "https://login-app-auth-mongoose-nodejs.herokuapp.com/";
class Login extends Component {
  state = {
    isLoggedIn: false,
    isSubmit: false,
    email: "",
  };

  login = (event) => {
    this.setState({ isSubmit: true });
    event.preventDefault();
    let user = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    fetch(`${url}users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ isSubmit: false });
        if (data.data) {
          this.setState({ isLoggedIn: true, email: user.email });
        } else {
          this.setState({ isLoggedIn: false });
        }
        if (data.status === "Successful") {
          alert(`Login Successful, Welcome ${this.state.email}`);
        } else {
          alert(`${data.message}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <div>
          {this.state.isLoggedIn === true ? (
            <DashBoard email={this.state.email} />
          ) : (
            <div>
              {this.state.isSubmit === true ? (
                <div className={styles["loading"]}>
                  <Loader
                    type="Puff"
                    color="blue"
                    height={100}
                    width={100}
                    timeout={3000}
                  />
                </div>
              ) : (
                <>
                  <div>
                    <Header page={"Home"} />
                  </div>

                  <div className={styles["main-container"]}>
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnMjBMy6US0PHhfC7-yv8E9q0fvWVBfooaw&usqp=CAU"
                        width="120"
                        height="80"
                        alt=""
                        className={styles["heading"]}
                      />
                      <h3 className={styles["heading-login"]}>Please login</h3>
                    </div>
                    <div className={styles["login"]}>
                      <form
                        onSubmit={this.login}
                        name="login"
                        autoComplete="off"
                      >
                        <label htmlFor="email">Email</label>
                        <br></br>
                        <input
                          className={styles["email-input"]}
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          required
                        />
                        <br></br>
                        <label htmlFor="password">Password</label>
                        <br></br>
                        <input
                          className={styles["password-input"]}
                          type="password"
                          id="pwd"
                          name="password"
                          placeholder="Enter your password"
                          required
                        />
                        <br></br>
                        <button
                          className={styles["signin-button"]}
                          type="submit"
                        >
                          Login
                        </button>
                        <br />
                        Not have a account?
                        <Link to="/signup" className={styles["signup"]}>
                          Sign up
                        </Link>
                      </form>
                    </div>
                  </div>
                  <Footer />
                </>
              )}
            </div>
          )}
        </div>
      </>
    );
  }
}
export default Login;
