import Header from "../components/header";

import Footer from "../components/footer";

import Description from "../components/description";

import { useState } from "react";

const Exe4 = () => {

    const [raio, setRaio] = useState(0);
    const [circunferencia,setCircunferencia] = useState(0);

    function circulo()
    {
        setCircunferencia(2*Math.PI*raio);
    }

  return(

   

 <>

  <Header titulo = "Exercicio 4"/>
  <Description descricao= " Receba o valor de um raio e calcule a circunferência de um círculo ( C = 2 * pi * raio)."/>
  
  
    <label>Digite o valor do raio: </label>
    <input type="number" value = {raio} onChange={(e)=>setRaio(parseFloat(e.target.value))}/>

    <button onClick = {circulo}>Calcular circunferencia</button>
    <h3>A circunferencia é {circunferencia.toFixed(2)}</h3>

  <Footer rodape = "Desenvolvido por Luiz Felipe- luizfelipealmeidaa12@gmail.com"/>
  </>
  )
};


  

export default Exe4;
