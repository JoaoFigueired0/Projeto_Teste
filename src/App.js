import React from 'react';
import { Input } from './components/inputLogin';
import Links from './components/link.js'; // Importando o Link correto do react-router-dom

function App() {
  return (
    <main className="App">
      <div className="container_login">
        <Input label="Email" placeholder="Digite seu e-mail"/>
        <Input label="Senha" placeholder="Digite sua senha"/>
      </div>
      <Links href="/newAccount" obrigation={true} texto="Criar uma conta">Criar uma conta</Links> 
    </main>
  );
}


export default App
