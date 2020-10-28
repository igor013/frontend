import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './index.css';

const Login: React.FC = () => {
  const history = useHistory();

  const [loading, setloading] = useState(false);
  const [mail, setmail] = useState('mail@mail.com');
  const [password, setpassword] = useState('1234');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (mail === "" || password === "") {
      alert("Preencha Todos os campos!")
    } else {
      // console.log({ mail, password })
      setloading(true);

      // if(mail === 'mail@mail.com' && password === "1234"){
      //   return history.push('/home');
      // }else{
      //   alert("Senha ou e-mail não conferem!")        
      // }

      let data = new FormData();
      data.append("json", JSON.stringify({
        mail: mail,
        password: password
      }
      ));



      fetch("http://localhost:3333/sessions",
        {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: data
        }).then(data => {
          return data.json();
        }).then(resp => {
          console.log("MESSAGE", resp);

        }).catch(ERRO => {
          console.log("ERRO", ERRO);

        });

      setTimeout(() => {
        setloading(false);
      }, 2000);

    }
  }

  return (
    <div className="container">
      <div className="titlelogin">
        <h5>Granistone</h5>
      </div>
      <div className="spancolordiv" />

      <div className="cardlogin">
        <form className="formlogin" onSubmit={handleSubmit}>
          <h5>Realize Seu Acesso</h5>
          <input className="inputlogin" type="mail" value={mail} placeholder="Digite seu e-mail" onChange={e => setmail(e.target.value)} />
          <input className="inputlogin" type="password" value={password} placeholder="Sua Senha Secreta" onChange={e => setpassword(e.target.value)} />

          <button type="submit" className="buttonlogin" >{loading ? 'Carregando...' : 'Acessar'}</button>
        </form>

      </div>

    </div>
  );
}

export default Login;