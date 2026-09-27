import Header from "../components/header";
import Footer from "../components/footer";
import Description from "../components/description";

import { useState } from "react";

const Exe6 = () =>
{

    

    function calcularLucro()
    {

            const venda = litrosLeite * 2.5;

            setLucro(venda - (venda*0.3));


    }

   
    const [litrosLeite, setLitrosLeite] = useState(0);
    const [lucro, setLucro] = useState(0);
    


    return(<>

    
    <Header titulo = "Exercicio 6"/>
    <Description descricao= " Um fazendeiro tem como principal atividade a venda de leite. Do valor total ganho de sua produção, 30% vai para custear a produção. Sabendo que ele vende o litro de leite por R$2,50 para seus distribuidores, faça um programa que receba uma quantidade de litros vendidas e informe quanto ele ganhará com a venda"/>

    <label >Digite a quantidade de litros de leite: </label>
    <input type = "number" value = {litrosLeite} onChange = {(e)=>setLitrosLeite(parseFloat(e.target.value))}/>
    <button onClick ={calcularLucro}>Calcular lucro</button>
    <h4>O fazendeiro ganhará {lucro.toFixed(2)} reais!</h4>


    <Footer rodape = "Desenvolvido por Luiz Felipe- luizfelipealmeidaa12@gmail.com"/>



    </>);

}



export default Exe6;