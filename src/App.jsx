import React from "react";
import { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
    console.log("最初")
    const [num, setNum] = useState(0);
    const [faceShowFlag, setFaceShowFlag] = useState(true)

    const onClickCountup = () => {
        setNum(num + 1);
    };
    const onClickSwitchShowFlag = () => {
        setFaceShowFlag(!faceShowFlag);
    };

    return (
        <>
        <h1 style={{ color: 'red' }}>こんにちは</h1>
        <ColorfulMessage color="blue">お元気ですか?</ColorfulMessage>
        <ColorfulMessage color="pink">元気です!</ColorfulMessage>
        <button onClick={onClickCountup}>カウントアップ</button>
        <br />
        <button onClick={onClickSwitchShowFlag}>on/off</button>
        <p>{num}</p>
        {faceShowFlag && <p>(^_^)</p>}
        </>
    );
};

export default App;