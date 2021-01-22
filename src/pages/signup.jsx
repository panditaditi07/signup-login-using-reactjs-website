import { Component } from "react";
import styles from "./signup.module.css";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Loader from "react-loader-spinner";

const url = "https://login-app-auth-mongoose-nodejs.herokuapp.com/";
class SignUp extends Component {
  state = {
    isSignedUp: false,
    isSubmit: false,
    email: "",
  };
  signUp = (event) => {
    this.setState({ issubmit: true });
    event.preventDefault();
    let user = {
      email: event.target.email.value,
      userName: event.target.userName.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
    };
    fetch(`${url}users/signup`, {
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
        this.setState({ isSubmit: false, email: user.email });
        if (data.data) {
          this.setState({ isSignedUp: true });
        } else {
          this.setState({ isSignedUp: false });
        }
        if (data.status === "Successful") {
          alert(`Signup Successful, Welcome ${this.state.email}`);
          this.props.history.push("/");
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
      <div>
        {this.state.submit === true ? (
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
          <div>
            <Header page={"Home"} />
            <div className={styles["main-container"]}>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17ObWhBUWrHMaMeq6hmjRiCU6kIlgYaVu-A&usqp=CAU"
                  width="120"
                  height="90"
                  alt=""
                  className={styles["heading"]}
                />
                <h3 className={styles["heading"]}>Please Sign Up</h3>
              </div>
              <div className={styles["sign-in"]}>
                <form onSubmit={this.signUp} autoComplete="off" name="sign-in">
                  <label htmlFor="email">Name</label>
                  <br></br>
                  <input
                    className={styles["email-input"]}
                    type="text"
                    id="userName"
                    name="userName"
                    placeholder="John Doe"
                    required
                  />
                  <br></br>
                  <label htmlFor="email">Email</label>
                  <br></br>
                  <input
                    className={styles["email-input"]}
                    type="text"
                    id="email"
                    name="email"
                    placeholder="someone@example.com"
                    required
                  />
                  <br></br>
                  <label htmlFor="password">Password </label>
                  <br></br>
                  <input
                    className={styles["password-input"]}
                    type="password"
                    id="pwd"
                    name="password"
                    placeholder="enter minimum 8 characters"
                    required
                  />
                  <br></br>
                  <label htmlFor="password">Confirm Password </label>
                  <br></br>
                  <input
                    className={styles["password-input"]}
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="enter minimum 8 characters"
                    required
                  />
                  <br></br>
                  <button className={styles["signin-button"]} type="submit">
                    Create Account
                  </button>
                  <br></br>
                  Already have a account?{" "}
                  <Link to="/login" className={styles["signin"]}>
                    Sign in
                  </Link>
                </form>
              </div>
            </div>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
export default SignUp;
