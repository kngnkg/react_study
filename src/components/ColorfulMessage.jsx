import React from "react";

export const ColorfulMessage = (props) => {
    // console.log("カラフル")
    const { color, children } = props;
    const contentStyle = {
        color,
        fontsize: '18px'
    };

    return(
        <p style={contentStyle}>{children}</p>
    );
};
