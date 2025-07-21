import { useState } from "react";
import "./authPage.css";
import Button from "@mui/material/Button";
import apiRequest from "../../utils/apiRequest";

const Authpage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
      const res = await apiRequest.post(
        `/users/auth/${isRegister ? "register" : "login"}`,
        data
      );
      console.log(res.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

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
          <form key="registerForm" onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                placeholder="Username"
                required
                name="userName"
                id="userName"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="displayName">Name</label>
              <input
                type="text"
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
              type="submit"
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
            <p>
              Do you have an account?{" "}
              <b onClick={() => setIsRegister(false)}>Login</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        ) : (
          <form action="" key="loginForm" onSubmit={handleSubmit}>
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
              type="submit"
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
