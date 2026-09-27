import Header from "../components/header";
import Footer from "../components/footer";
import Description from "../components/description";

import { useState } from "react";


const Exe5 = () =>
{

    const [conta, setConta] = useState(0);
    const [amigos, setAmigos] = useState(0);
    const [divisao, setDivisao] = useState(0);
    const [taxaGarcom, setTaxaGarcom] = useState(0);

    function calcularDivisao()
    {

        if(amigos>0)
        {


            if(taxaGarcom>0)
            {
            setDivisao((conta+taxaGarcom)/amigos);

            }

             else{

            setDivisao(conta/amigos);

            }

        }

        


    }

    return(<>
    
  <Header titulo = "Exercicio 5"/>
  <Description descricao = "Receba o valor referente da conta de um restaurante, gerada pelo consumo de um grupo de amigos, efetue o cálculo de quanto cada um irá pagar, e inclua a opção detaxa de garçom. "/>

        <label>Informe quanto deu a conta: </label>
        <input type="number" value={conta} onChange={(e)=>setConta(parseFloat(e.target.value))}/>
        <label>Informe a quantidade de amigos:</label>
        <input type= "number" value = {amigos} onChange={(e)=> setAmigos(parseInt(e.target.value))} />
        <label>Quer deixar uma taxa para o Garçom?</label>
        <input type  = "number" value = {taxaGarcom} onChange={(e)=> setTaxaGarcom(parseFloat(e.target.value))} />
        <button onClick = {calcularDivisao}>Calcular divisão pra cada amigo</button>
        <h4>Cada amigo irá pagar {divisao.toFixed(2)} reais!</h4>





  <Footer rodape = "Desenvolvido por Luiz Felipe- luizfelipealmeidaa12@gmail.com"/>

   
    
    
    
    
    </>);





}


export default Exe5;