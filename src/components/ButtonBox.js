import React from 'react';
import './ButtonBox.css';
import Button from './Button';
const ButtonBox = ({handleClick}) => {
    const buttonValues = [
    ["AC", "+/-", "%", "÷"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="]
    ];
    return (
        <div className='buttonBox'>
            {buttonValues.flat().map((value, index) => {
                return <Button 
                        key={index}
                        className={value === "=" ? "equals f3 bg-red br3 pa2 white" : "f3 bg-purple br3 pa2 white"}
                        value={value}
                        onClick={handleClick}
                    />     
            })}

        </div>
        );
}

export default ButtonBox;