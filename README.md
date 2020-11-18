# Projeto ReactJS

Neste projeto vamos iniciar a criação de um projeto web em reactjs, abaixo veremos passo a passo.

## Criar projeto

Vamos navegar até nosso diretório de projeto e para vamos startar o projeto com o comando:

```js
npx create-react-app nome_projeto --template typescript
```

Após gerado digite **cd nome_projeto** para entrar na pasta criada e o comando **yarn start** para iniciar o projeto, será aberto uma aba no navegador rodando em **http://localhost:3000** com o projeto base que o reactjs nos trás.

> Observe que usamos o comando para criação com a flag **--template typescript** para criar o projeto ja configurado em typescript.

## Estruturar nosso projeto

Agora vamos abrir o nosso projeto no Editor de código e vamos ajeitar alguns arquivos em um padrão mais fácil e sugestivo de trabalharmos.

-- Na nossa pasta SRC vamos deixar somente o arquivos **index.ts**, **react-app-env.d.ts**, **reportWebVitals.ts**, **setupTestes.ts**

> Sim nossos arquivos estão em .ts que é o typescript assim nossos componentes e classes estarem mais performaticos e tratados com a tipagem do typescript,e ao buildar o projeto para produção o nosso build fará o transpile para .js

-- Agora vamos criar algumas pastas para organizar nosso código:

- **assets** - Salvaremos aqui arquivos de imagem, fonts e etc;
- **components** - Criaremos aqui nossos componenetes que usaremos na aplicação;
- **config** - Criaremos aqui arquivos de configuração como config de firebase, google etc;
- **helpers** - Criaremos aqui arquivos auxiliares, sejam funções de ts ou css;
- **pages** - Criaremos aqui nossos componentes de views, a interface de comunicação aos usuários;
- **routes** - Criaremos aqui nossa integração de rotas com react-router-dom;
- **styles** - Criaremos aqui nosso arquivo de estilização css padrão ao que é comum a pagina, body, h1, etc;

-- Vamos instalar algumas bibliotecas que utilizaremos:

- **react-router-dom** - Fará o roteamento e navegação entre nossas páginas;
- **history** - Fará o registro para histórico de navegação;
- **axios** - Utilizaremos para requisição http (buscar de alguma api);

```js
yarn add react-router-dom history axios

yarn add -D typescript @types/node @types/react @types/react-dom @types/jest @types/react-router-dom
```

-- Vamos editar nosso arquivo index.ts da raiz da pasta src para:

```js
import React from "react";

import ReactDOM from "react-dom";

//Aqui importaremos o arquivo que iremos criar no proximo passo.
import App from "./app";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function

// to log results (for example: reportWebVitals(console.log))

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
```

> Aqui é inicio de tudo, todos componentes que criarmos será renderizado na tag com id **root** que está presente em /public/index.html, la também podemos editar o titulo de nossa pagina o icones, algumas tag de matadata, etc;

-- Vamos criar agora um arquivo em src/routes/index.tsx para colocarmos as nossas rotas:

```js
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// Deixar para importação e utilização futura
// import RoutesPrivates from './routesprivates';

// Esse 2 próximos arquivos serão criado no passo seguinte
import Login from "../pages/auth/index";
import Home from "../pages/home/index";
import Profile from "../pages/profile/index";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/profile" exact component={Profile} />

        {/* <RoutesPrivates path="/home" exact component={props => <ClientLayout><Home {...props} /></ClientLayout>} /> */}
        {/* <RoutesPrivates path="/nopermission" exact component={NoPermission} /> */}

        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
```

Criar um arquivo **routesprivates.tsx** para uso futuro:

```js
import React from "react";
// import {Route, Redirect} from 'react-router';
// import {userIsLogged} from './pages/auth/authActions'

const RoutesPrivate: React.FC = (props) => {
  return <div />;
  // return userIsLogged() ? <Route {...props} /> : <Redirect to="/login" />;
};

export default RoutesPrivate;
```

-- Vamos criar agora um arquivo na raiz da pasta src/app.tsx com o seguinte conteúdo:

> Arquivo .ts para algum helper algo que so tenha codigo de funcao, .tsx para arquivos que tenha return de renderização html

```js
import React from "react";
import Routes from "./routes/index";

const App: React.FC = () => {
  return <Routes />;
};

export default App;
```

Estando tudo de acordo até aqui, se iniciarmos nosso projeto com **yarn start** ele será aberto em **http://localhost:3000** com a pagina de login, onde podemos estilizar e começarmos a trabalhar os componentes e layouts, assim ja temos nosso projeto com estrutura básica.

-- vamos criar um arquivo src/pages/auth/index.tsx e src/pages/auth/index.css

```js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./index.css";

const Login: React.FC = () => {
  const history = useHistory();

  const [loading, setloading] = useState(false);
  const [mail, setmail] = useState("mail@mail.com");
  const [password, setpassword] = useState("1234");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (mail === "" || password === "") {
      alert("Preencha Todos os campos!");
    } else {
      console.log({ mail, password });
      setloading(true);

      if (mail === "mail@mail.com" && password === "1234") {
        return history.push("/home");
      } else {
        alert("Senha ou e-mail não conferem!");
      }

      setTimeout(() => {
        setloading(false);
      }, 2000);
    }
  };

  return (
    <div className="container">
      <div className="titlelogin">
        <h5>Granistone</h5>
      </div>
      <div className="spancolordiv" />

      <div className="cardlogin">
        <form className="formlogin" onSubmit={handleSubmit}>
          <h5>Realize Seu Acesso</h5>
          <input
            className="inputlogin"
            type="mail"
            value={mail}
            placeholder="Digite seu e-mail"
            onChange={(e) => setmail(e.target.value)}
          />
          <input
            className="inputlogin"
            type="password"
            value={password}
            placeholder="Sua Senha Secreta"
            onChange={(e) => setpassword(e.target.value)}
          />

          <button type="submit" className="buttonlogin">
            {loading ? "Carregando..." : "Acessar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
```

```js
.container {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    justify-content: center;
    align-items: center
}
.titlelogin {
    position: absolute;
    justify-content: start;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    z-index: 4;
}
.titlelogin h5 {
    height: 30px;
    font-family: 'Montserrat';
    font-size: 30px;
    color: #00c9d8;
    font-weight: bold;
    text-align: start;
    margin-left: 10%;
}

.spancolordiv{
    position: absolute;
    width: 3000px;
    height: 100vh;
    z-index: 1;
    background-color: #009cd8;
    box-shadow: 0px 0 45px 8px #3e3e3e20;
    transform: rotate(150deg);
    margin-top: 50%;
    /* margin-left: 20%; */
    top: 0;
}


.cardlogin{
    z-index: 3;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 60%;
    max-width: 550px;
    height: 250px;
    background-color: #f5f5f5;
    box-shadow: 0px 0 65px 8px #3e3e3e40;
    border-radius: 10px;
    margin-top: -10%;
}


.formlogin{
    display: flex;
    width: 100%;
    padding: 15%;
    flex-direction: column;
}

.formlogin h5{
    font-family: 'Montserrat';
    text-align: center;
    font-size: 14px;
    color: #282828;
}

.inputlogin{
    margin: 5px;
    width: 100%;
    height: 25px;
    border-width: 0.3px;
    border-color: #3e3e3e30;
    padding: 5px;
}

.buttonlogin{
    margin: 10px;
    align-self: center;
    border: none;
    outline: none;
    width: 120px;
    height: 30px;
    background-color: #009cd8;
    color: #fff;
    font-weight: bold;
    font-family: 'Montserrat';
}
```

> Com essa pagina de login implementada e com css estilizado, ao rodar projeto temos o login mocado a ao acessar é redrecionado a pagina home, dai em diante so prosseguir com estruturacao e confecao.

Agora vamos utilizar uma lib para fazer requisições a serviço (como a nossa api criada), que é a que iremos utilizar, a lib é a axios, seguiremos:

-- Vamos criar agora um arquivo na raiz da pasta src/services/api.ts com o seguinte conteúdo:
Antes disse instalar a lib \***\*yarn add axios\*\***

```js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use(
// async config => {
// console.log("CONFIG", config);
// return config;
// },
// error => {
// console.log('Interc request error', error)
// }
// );

// api.interceptors.response.use(response => {
// console.log("interceptor", response);
// return response
// },
// error => {
// console.log("Intercetor", error);
// // return error.response
// }
// );
export default api;
```

-- No nosso arquivo de login, src/pages/auth/index.tsx vamos executar os seguintes passos:

- Importar no topo do arquivo o service/api.ts que criamos:

```js
import api from "../../services/api";
```

- Vamos criar um state captando do armazenamento local do navegador (caso tenha algo):

```js
const [userdata, setuserdata] = useState(localStorage.getItem("user") || "");
```

- Na funcao \***\*handleSubmit\*\*** implemente o metodo usando o axios para captar do serviço na rota de login, e armazenar no local storage:

```js
// Criar um objeto com mail e password captados do formulario
let data = {
  mail: mail,
  password: password,
};

// api e nosso servico que criamnos, post e o metodo, passamos a url da apique criamos para login e data e o objeto que enviamos similar ao imsominia, o .then é se der certo erespones e uma variavel que usamos para identificar o retorno.
api
  .post("/sessions", data)
  .then(function (response) {
    // console.log(response);
    // o retorno possui dados do usuário e o token, criamos variaveis e separamos esse retorno
    let user = response.data.user;
    let token = response.data.token;
    // Com a funcao localStorage.setItem armazenamos no navegador esse dados tanto o token quanto os dados do usuario.
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    // JSON.stringfy converte o objeto de usuario recebido em string para ficar facil de salvar no navegador e nao dar erro.

    // Com history push se deu tudo certo jogamos usuario para home, observe a importacao do useHistory por volta da linha 9
    history.push("/home");
  })
  .catch(function (error) {
    // console.log('Erro na request', error.response);
    // A funcao catch captura o erro caso aconteça algo de errado.
    // o error.response.data pega o retorno do erro, e o error.response.data.message pega a mensagem que retonamos da api, observe que na api colocamo res.status(400).json({messag: ......});
    if (error.response.data) {
      // console.log(data);
      alert(error.response.data.message);
    }
  });
```







---

Desenvolvido por: [Gil](https://github.com) | [Igor](https://github.com) | [Joilson](https://github.com)
