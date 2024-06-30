import "./Log.css";
// import { LuHeartHandshake } from "react-icons/lu";
import videobg from '../../Images/videos/857136-hd_1280_720_24fps.mp4'
import { FaUser } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { useState } from "react";
import Button from "../../components/Buttons/Button";

const Log = () => {
  const [action, setAction] = useState("signin");
  const login = action === "login" ? "login-feild" : "hidden";
  const signin = action === "signin" ? "login-feild" : "hidden";


  return (
    <section className="log ">
      <video autoPlay loop muted>
        <source src={videobg} type="video/mp4" />
      </video>
      <form className={login }>
        <div className="wisard">
          
          <h1>
            <em>w</em>izard
          </h1>
          
        </div>
        {/* email */}
        <div className="email-feild">
          <i className="icon-email">
            <FaUser />
          </i>
          <input type="email" placeholder="Your email" required/>
        </div>
        {/* pass */}
        <div className="pass-feild">
          <i className="icon-pass">
            <FaUnlockAlt />
          </i>
          <input type="password" placeholder="Your password" required/>
        </div>

        {/* checkbox & forget */}

        <div className="after_pass ">
          <div>
            <input type="checkbox" id="ch" />
            <label for="ch">Rememder Me</label>
          </div>
          <div>
            <a href="kk">forget password</a>
          </div>
        </div>

        {/* login_button */}

        <div className="login_button-feild">
        <Button>login</Button>
        
          <p>
            Don't have an account ?
            <span
              onClick={() => {
                setAction("signin");
              }}
            >
              Register
            </span>
          </p>
        </div>
      </form>









      <form className={signin}>
        <div className="wizard">
          
          <h1>
            <em>w</em>isard
          </h1>
          
        </div>
        {/* name */}
        <div className="email-feild">
          <i className="icon-email">
            <FaUser />
          </i>
          <input type="text" placeholder="Your name" required/>
        </div>
        {/* email */}
        <div className="email-feild">
          <i className="icon-email">
            <FaUser />
          </i>
          <input type="email" placeholder="Your email" required/>
        </div>
        {/* pass */}
        <div className="pass-feild">
          <i className="icon-pass">
            <FaUnlockAlt />
          </i>
          <input type="password" placeholder="Your password" required/>
        </div>

        {/* pass */}
        <div className="pass-feild">
          <i className="icon-pass">
            <FaUnlockAlt />
          </i>
          <input type="password" placeholder="confirm password" required/>
        </div>

        {/* checkbox & forget */}

        <div className="after_pass ">
          <div>
            <input type="checkbox" id="ch" />
            <label for="ch">Rememder Me</label>
          </div>
          <div>
            {" "}
            <a href="kk">forget password</a>
          </div>
        </div>

        {/* login_button */}

        <div className="login_button-feild">
        <Button>login</Button>
          <p>
            Do Y have an account ?
            <span
              id="reg_login"
              onClick={() => {
                setAction("login");
              }}
            >
              Login
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Log;
