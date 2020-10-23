import React from 'react';
import './Header.css'

// import { Container } from './styles';

function Components({title,user}) {
  
    return (

        <div className="header">
            <h5>{title}</h5>
            <span>{user}</span>
        </div>

    );
}

export default Components;