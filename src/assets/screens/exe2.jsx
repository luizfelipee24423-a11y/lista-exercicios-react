//components

import { useState } from "react";

import Header from "../components/header";
import Description from "../components/description";
import Footer from "../components/footer";

const Exe2 = () => {
  const [distancia, setDistancia] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [vm, setVM] = useState(0);

  function calcula_vm() {

    if(tempo>0)
    {

          setVM(distancia / tempo);

    }
    
  }

  return (
    <>
      <Header titulo="Exercicio 2" />
      <Description descricao="Sabendo que a velocidade linear é calculada pela seguinte equação
velocidade=distancia/tempo. Desenvolva um algoritmo que receba os valores relativos
à distância e tempo, calcule e mostre o valor da velocidade média.
 " />
      <label>Informe a distancia gasta: </label>
      <input
        type="number"
        value={distancia}
        onChange={(e) => setDistancia(parseFloat(e.target.value))}
      />
      <label>Informe o tempo gasto: </label>
      <input
        type="number"
        value={tempo}
        onChange={(e) => setTempo(parseFloat(e.target.value))}
      />
      <button onClick={calcula_vm}>Calcular a velocidade média</button>
      <h3>a velocidade média foi de {vm}</h3>

      <Footer rodape = "Desenvolvido por Luiz Felipe- luizfelipealmeidaa12@gmail.com" />
    </>
  );
};

export default Exe2;
