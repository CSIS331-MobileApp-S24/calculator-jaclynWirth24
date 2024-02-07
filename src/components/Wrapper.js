import React from "react";
import "./Wrapper.css";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";
const Wrapper = () => {
    return (
        <div className="wrapper pa3 br3 bg-dark-gray">
            <Screen value="0"/>
            <ButtonBox />
        </div>
        );
}
export default Wrapper;