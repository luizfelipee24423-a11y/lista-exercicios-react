import Header from "../components/header";
import Footer from "../components/footer";
import Description from "../components/description";

import { useState } from "react";

const Exe7 = () => {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [numero3, setNumero3] = useState(0);
  const [numero4, setNumero4] = useState(0);
  const [numero5, setNumero5] = useState(0);

  function gerarNumeros() {
    setNumero1(Math.floor(Math.random() * 31));
    setNumero2(Math.floor(Math.random() * 31));
    setNumero3(Math.floor(Math.random() * 31));
    setNumero4(Math.floor(Math.random() * 31));
    setNumero5(Math.floor(Math.random() * 31));
  }

  const agora = new Date();

  return (
    <>
      <Header titulo="Exercicio 7" />
      <Description descricao=" Desenvolva um algoritmo que exiba cinco números aleatórios 0 a 30 e exiba a data e a hora atual do sistema." />

      <button onClick={gerarNumeros}>Gerar Números</button>

      <h3>
        {numero1}, {numero2}, {numero3}, {numero4}, {numero5}
      </h3>

      <h3>Data: {agora.toLocaleDateString()}</h3>
      <h3>Hora: {agora.toLocaleTimeString()}</h3>

      <Footer rodape="Desenvolvido por Luiz Felipe- luizfelipealmeidaa12@gmail.com" />
    </>
  );
};

export default Exe7;
