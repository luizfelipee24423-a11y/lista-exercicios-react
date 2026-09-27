import Header from "../components/header";
import Footer from "../components/footer";
import Description from "../components/description";

import { useState} from "react";


const Exe3 = () =>
{

    const [celsius,setCelsius] = useState(0);
    const [farenheit,setFarenheit] = useState(0);
    
    function conversao()
    {

        setCelsius((farenheit - 32) / 1.8);
      
    }

    return(

         <>
     <Header titulo = "Exercicio 3"/>

    <Description descricao="Desenvolva um programa que transforme um valor de temperatura fornecido pelo
    usuário, de Farenheit ( F ) para Graus Celcius ( ºC ). [C = (F – 32) / 1,8]." />

        
        <label >Informe a temperatura em Farenheit: </label>
        <input type="number" value = {farenheit}  onChange = {(e)=> setFarenheit(parseFloat(e.target.value))} />

        <button onClick = {conversao}>Converter para Celsius</button>
        <h3>A temperatura em celsius é {celsius.toFixed(2)}</h3>

    <Footer rodape = "Desenvolvido por Luiz Felipe - luizfelipealmeidaa12@gmail.com"/>
    </>


    );

   

   




};


export default Exe3;