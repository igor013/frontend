import React from 'react';
import api from '../../services/api'


const Usercomponent = () => {

const [name, setname] = React.useState('');
const [mail, setmail] = React.useState('');
const [age, setage] = React.useState('');
const [pass, setpass] = React.useState('');

const onsubmit = async ()=>{
    let data = {
        id_city: 1,
        name,
        mail,
        age,
        pass,
        ismaster: false
        
    };
    // console.log(data);
try {
    const response = await api.post('users',data);
    // console.log(response);
    if(!response){
        alert("Falha ao cadastrar o usuário")
    }else{alert(response.data.message)}

    if(response.data.error){
        alert(response.data.error.error)
    }
    
} catch (error) {
    console.log(error);
    
    
}
}

return (
<div>
<h5>Cadastro de Usuário</h5>
<br/>
<p>Formulário de Cadastro</p>
<input name="name" value={name} onChange={e=>setname(e.target.value)}  placeholder="Digite seu Nome"/>
<br/>
<input name="mail" value={mail} onChange={e=>setmail(e.target.value)}  placeholder="Digite seu Email"/>
<br/>
<input name="age" value={age} onChange={e=>setage(e.target.value)}  placeholder="Digite sua Idade"/>
<br/>
<input name="pass" value={pass} onChange={e=>setpass(e.target.value)} placeholder="Digite sua Senha"/>
<br/>
<button onClick={()=>onsubmit()}>Cadastrar</button>

</div>
  );

}

export default Usercomponent;