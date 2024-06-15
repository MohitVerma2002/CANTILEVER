import React, { useState } from "react";
import "./register.css";
import { Button, TextField } from "@mui/material";
import { CircularProgress } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Google from "../../assests/images/google.png";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../Firebase";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    signUp();
  };

  const signUp = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User registered:", user);
        setErrorMessage("");
        resetFormFields();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in with Google:", user);
        setErrorMessage(""); // Clear any previous error messages
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
    setName("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <div className="register">
        <div className="registerContainer">
          <div className="registerCard">
            <h2>Welcome to VeloxMart !</h2>
            <div className="registerInfo">
              <form onSubmit={handleRegister}>
                <TextField
                  type="text"
                  className="inputText"
                  id="outlined-basic"
                  required
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
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
                  <TextField
                    type={showPassword ? "text" : "password"}
                    className="inputText"
                    id="outlined-basic"
                    required
                    label="Confirm Password"
                    variant="outlined"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
