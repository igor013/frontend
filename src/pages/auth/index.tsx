import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './index.css';


const Login: React.FC = () => {
  const history = useHistory();

  const [ismouted, setismouted] = useState(false);
  const [userdata, setuserdata] = useState(localStorage.getItem('user') || '');
  const [loading, setloading] = useState(false);
  const [mail, setmail] = useState('admin@mail.com');
  const [password, setpassword] = useState('123456');

useEffect(()=>{
if(!ismouted){  
  setismouted(true);
}
},[ismouted]);


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

      let data = {
        mail: mail,
        password: password
      }

      api.post('/sessions', data)
        .then(function (response) {
          // console.log(response);
          let user = response.data.user;
          let token = response.data.token;
          console.log(user,token);
          localStorage.setItem('user',JSON.stringify(user)); // salva a variável no browser 
          localStorage.setItem('token',token); // salva a variável no browser 
          history.push('/home')
          
        })
        .catch(function (error) {
          // console.log('Erro na request', error.response);
          if(error.response.data){
            // console.log(data);
            
            alert(error.response.data.message);

          }
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