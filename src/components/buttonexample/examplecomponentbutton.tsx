import React from 'react';
import './examplecomponentbutton';

// const Esseeumbotao: React.FC = (props) => { abaixo esta desestruturado
const Esseeumbotao: React.FC = ({titulo}) => {
return <button className="buttonexample">{titulo}</button>;
}

export default Esseeumbotao;