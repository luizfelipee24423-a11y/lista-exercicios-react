//components

import { useState } from "react";

import Header from "../components/header";
import Description from "../components/description";
import Footer from "../components/footer";

const Exe1 = () => {
  const [nome, setNome] = useState("");

  return (
    <>
      <Header titulo="Exercicio 1" />
      <Description descricao="Receba o nome do usuário em um campo de Input e escreva o cumprimento Seja bem vindo seguido do nome informado." />
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <h3>Seja bem vindo {nome}</h3>

      <Footer rodape = "Desenvolvido por Luiz Felipe - luizfelipealmeidaa12@gmail.com" />
    </>
  );
};

export default Exe1;
