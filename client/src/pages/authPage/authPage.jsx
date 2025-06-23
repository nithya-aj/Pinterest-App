import { useState } from "react";
import "./authPage.css";
import Button from "@mui/material/Button";

const Authpage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  return (
    <div className="authPage">
      <div
        className={
          isRegister ? "authContainer registerContainer" : `authContainer`
        }
      >
        <img src="../general/logo.png" alt="" />
        <h1> {isRegister ? "Create an Account" : "Login to your account"}</h1>
        {isRegister ? (
          <form action="" key="registerForm">
            <div className="formGroup">
              <label htmlFor="username">Username</label>
              <input
                type="username"
                placeholder="Username"
                required
                name="username"
                id="username"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="displayName">Name</label>
              <input
                type="displayName"
                placeholder="Name"
                required
                name="displayName"
                id="displayName"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                id="email"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="password"
                required
                name="password"
                id="password"
              />
            </div>
            <Button
              variant="contained"
              color="error"
              sx={{
                textTransform: "none",
                fontFamily: "Rubik",
                borderRadius: "32px",
              }}
            >
              Register
            </Button>
            {/* <button type="submit">Register</button> */}
            <p>
              Do you have an account?{" "}
              <b onClick={() => setIsRegister(false)}>Login</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        ) : (
          <form action="" key="loginForm">
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                id="email"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="password"
                required
                name="password"
                id="password"
              />
            </div>
            <Button
              variant="contained"
              color="error"
              sx={{
                textTransform: "none",
                fontFamily: "Rubik",
                borderRadius: "32px",
              }}
            >
              Login
            </Button>
            {/* <button type="submit">Login</button> */}
            <p>
              Don&apos;t have an account?{" "}
              <b onClick={() => setIsRegister(true)}>Register</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default Authpage;
