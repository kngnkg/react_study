/* eslint react-hooks/exhaustive-deps: off */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
    console.log("最初")
    const [num, setNum] = useState(0);
    const [faceShowFlag, setFaceShowFlag] = useState(false)

    const onClickCountup = () => {
        setNum(num + 1);
    };
    const onClickSwitchShowFlag = () => {
        setFaceShowFlag(!faceShowFlag);
    };

    useEffect(() => {
        if (num === 0) {
            return;
        }
        if (num % 3 === 0) {
            // 左側がfalseの場合のみ右側を実行
            faceShowFlag || setFaceShowFlag(true);
            return;
        }
        // 左側がtrueの場合のみ右側を実行
        faceShowFlag && setFaceShowFlag(false);
    }, [num]);
    

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