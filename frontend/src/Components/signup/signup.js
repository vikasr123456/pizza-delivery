import React from "react";
import "../styles/desforlog.css";

function Signup() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const submitHandler = (e) => {
  //   e.preventDefault();
  // };
  return (
    <>
      
      <div className="body">
        {/* <img src="" alt="pizza-oven" className="pizza-oven-img"></img> */}
        <div className="x">
        <div className="container">
          <form action="#" method="POST" >
            <div className="login">
              <h2>SIGN IN</h2>
            </div>
            <hr></hr>
            <div className="name">
              <label htmlFor="name" className="label-for-name">
                
              </label>
              <input
                type="name"
                id="name"
                placeholder="Username"
                name="name"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>
            <div className="e-mial">
              <label htmlFor="e-mails" className="label-for-email">
                
              </label>
              <input
                type="email"
                id="e-mails"
                placeholder="E-mail"
                name="E-mail"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>
            <div className="password">
              <label htmlFor="password" className="label-for-password">
                
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                name="password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
            </div>

            
          
            <div className="login-btn">
            <button
                type="Submit"
                id="sumbit"
                name="submit"
                
              >Signup</button>
            </div>
          </form>
          
        </div>
      </div>
      </div>
    </>
  );
}

export default Signup;
