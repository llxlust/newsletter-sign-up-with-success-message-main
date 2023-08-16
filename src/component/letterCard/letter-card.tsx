import classes from "./letter-card.module.scss";
import validator from "validator";
import desktopPicture from "../../assets/illustration-sign-up-desktop.svg";
import succesful from "../../assets/icon-success.svg";
import { useState } from "react";
export default function LetterCard() {
  const [status, setStatus] = useState<boolean>(false);
  const [email,setEmail] = useState<string>('');
  const [inputStatus, setInputStatus] = useState<boolean>(true);
  const [alert,setAlert] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");

  const dismissHandler = () =>{
    setStatus(false);
    setInputStatus(false)
    setAlert(true);
    setEmail('');
  }

  const requireHandler = () =>{
    if(inputStatus === true){
      setStatus(true)
    }
    else if(message === ''){
      setStatus(false)
      setAlert(false)
      setMessage("Require,Email!");
    }
    else{
      setStatus(false)
      
    }
  }

  const validateEmail = (e: string) => {
    const email = e;
    setEmail(e);
    if (validator.isEmail(email)) {
      setMessage("");
      setInputStatus(true)
      setAlert(true)
    } else if (email === "") {
      setMessage("");
      setInputStatus(false)
      setAlert(true)
    } else {
      setMessage("Please, enter valid Email!");
      setInputStatus(false)
      setAlert(false)
    }
  };
  return (
    <>
      {status ? (
        <div className={classes.succesCard}>
          <img src={succesful}></img>
          <h1 className="m-t-25">Thanks for subscribling!</h1>
          <p className={classes.succesP}>
            A confirmation email has been sent to <span>{email}</span> Please
            open it and click the button inside to confirm your subscription.
          </p>
          <button onClick={()=>{dismissHandler()}} className={classes.btn}>Dismiss massage</button>
        </div>
      ) : (
        <div className={`row ${classes.card}`}>
          <div
            className={`col-6 ${classes.left} ${classes.textA} p-l-30 p-t-75 p-b-75 p-r-20`}
          >
            <h1 className="m-b-20">Stay Updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <div className={classes.fontD}>
              <img src={succesful}></img>Product discovery and building what
              matters
            </div>
            <div className={classes.fontD}>
              <img src={succesful}></img>Measuring to ensure updates are a
              success
            </div>
            <div className={classes.fontD}>
              <img src={succesful}></img>And much more!
            </div>
            <div className={`${classes.labelFlex} m-t-20`}>
              <label>Email address</label>
              <label className={alert ? classes.labelNormal : classes.labelError}>{message}</label>
            </div>
            <div className={`m-b-20 `}>
              <input
                value={email}
                onChange={(e) => validateEmail(e.target.value)}
                className={alert ? classes.inputNormal : classes.inputError}
                placeholder="email@company.com"
              ></input>
            </div>
            <button
              onClick={() => {
                requireHandler();
              }}
              className={classes.btn}
            >
              Subscribe to monthly newsletter
            </button>
          </div>
          <div className={`col-6 ${classes.left} p-t-15 p-b-15 `}>
            <img className={classes.mainPic} src={desktopPicture}></img>
          </div>
        </div>
      )}
    </>
  );
}
