import React, { useState } from "react";
import "./Wrapper.css";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";

const Wrapper = () => {
    
    let[oper, setOper] = useState("");
    let[num, setNum] = useState(0);
    let[res, setres] = useState("");

    function onButtonClick (event) {
        console.log(event.target.innerHTML);
        setNum(event.target.innerHTML);
        switch(event.target.innerHTML){
            case "AC":
                resetClickHandler();
                break;  
            case "+/-":
                invertClickHandler();
                break;
            case "%":
                percentClickHandler();
                break;
            case "÷":
            case "x":  
            case "-":
            case "+":
                operClickHandler(event);
                break;
            case "=":
                equalClickHandler();
                break;
            case ".":
                decClickHandler();
                break;
            default:
                numClickHandler(event);
                break;
        }

        console.log("After the handlers");
        console.log("num: " + num);
        console.log("res: " + res);
        console.log("oper: " + oper);   
    }

    function resetClickHandler(){
        console.log("in resetClickHandler");
        setNum(0);
        setOper("");
        setres("");
    }
    
    function invertClickHandler(){
        console.log("in invertClickHandler");
        setNum(-num);
    }

    function percentClickHandler(){
        console.log("in percentClickHandler");
        num = num/100;
        if(num.toString().length > 13){
            num = num.toExponential(2);
        }
        setNum(num);
    }

    function operClickHandler(event){
        console.log("in operClickHandler");
        setOper(event.target.innerHTML);
        setres(num);
        setNum(0);
    }

    function equalClickHandler(){
        console.log("in equalClickHandler");
        switch(oper){
            case "+":
                setNum(res + num);
                break;
            case "-":
                setNum(res - num);
                break;
            case "x":
                num = res * num;
                if(num.toString().length > 13){
                    num = num.toExponential(2);
                }
                setNum(num);
                break;
            case "÷":
                num = res / num;
                if(num.toString().length > 13){
                    num = num.toExponential(2);
                }
                setNum(num);
                break;
            default:
                break;
        }
    }

    function decClickHandler(){
        console.log("in decClickHandler");
        if(!num.toString().includes(".")){
            setNum(num + ".");
        }else{
            setNum(num);
        }
    }

    function numClickHandler(event){
        console.log("in numClickHandler");
        if(num.toString().length < 13){
            if(num === 0){
                setNum(Number(event.target.innerHTML));
            } else {
                setNum(Number(num + event.target.innerHTML));
            }
        }else{
            setNum(num);
        }
    }



    
    return (
        <div className="wrapper pa3 br3 bg-dark-gray">
            <Screen value= {num}/>
            <ButtonBox handleClick={onButtonClick}/>
        </div>
        );
}
export default Wrapper;