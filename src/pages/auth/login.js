import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./login.css";

function Login() {
  const history = useHistory();

  const [name, setname] = useState('Igor');
  const [password, setpassword] = useState('1234');


  const handleSubmit = (e) => {

    e.preventDefault();

    if (name === "", password === "") {
      alert("Digite email e senha!")
    }

    // const values = {
    //   name: name,
    //   password: password
    // }



    if (name === "Igor" && password === "1234") {
      // return <Redirect to='/home' />
      history.push("/home");

    } else {
      alert("Usuario nao autenticado!")

    }



  }


  return (
    <div className="BgLogin">
      <h2>Granistone</h2>
      <div className="card">
        <div className="card-body">
          {/* <h5 className="card-title login">Login</h5> */}
          <div className="ContainerImage">
          <img src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_5056093.jpg" 
          className="ImagemLogin"
          />

          </div>

         
          <form>
            <div className="containerform">
              <div className="form-group">
                <div className="form-group">

                  {/* <label for="exampleInputname1">Usuario</label> */}
                  <input type="text" className="form-control" id="exampleInputname1" placeholder="Nome de Usuario"
                    value={name}
                    onChange={e => setname(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  {/* <label for="exampleInputPassword1">Password</label> */}
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                    value={password}
                    onChange={e => setpassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="containerbutton">
              <button href="#" className="btn btn-primary buttonLogin" onClick={handleSubmit} >Go</button>
            </div>

          </form>

        </div>
      </div>
      <div className="Element01"></div>
    </div>
  );
}

export default Login;