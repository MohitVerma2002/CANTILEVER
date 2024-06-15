import React, { useContext, useState } from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";
import { Button, CircularProgress } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Google from "../../assests/images/google.png";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../AuthContext";
import "../../responsive.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);

  const history = useNavigate();

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in:", user);
        setErrorMessage("");
        resetFormFields();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      })
      .finally(() => {
        setLoading(false);
        history("/");
        localStorage.setItem("isLogin", true);
        login();
      });
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in with Google:", user);
        setErrorMessage("");
        resetFormFields();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const resetFormFields = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginCard">
          <h2>Welcome Back!</h2>
          <div className="loginInfo">
            <form onSubmit={handleLogin}>
              <TextField
                type="email"
                className="inputText"
                id="outlined-basic"
                required
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="inputPassword">
                <TextField
                  type={showPassword ? "text" : "password"}
                  className="inputText"
                  id="outlined-basic"
                  required
                  label="Password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  className="eyeIcon"
                  onClick={handlePasswordToggle}
                  type="button"
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </Button>
              </div>

              {errorMessage && <p className="error">{errorMessage}</p>}
              {loading ? (
                <CircularProgress className="loader" />
              ) : (
                <Button type="submit" className="signInBtn">
                  Sign In
                </Button>
              )}
            </form>
            <br />
            <p>------- OR -------</p>
            <br />

            {loading ? (
              <CircularProgress className="loader" />
            ) : (
              <Button className="googleBtn" onClick={handleGoogleSignIn}>
                <img src={Google} className="googleIcon" alt="" />
                Login with Google
              </Button>
            )}

            <span className="newUser">
              New User?{" "}
              <Link to="/register" className="link">
                Register Here!
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
