import React from "react";

export const Display = ({strToDisplay, Prank}) => {

    const clsName = Prank ? "display prank" : "display" 
    return  (
    <div className={clsName}>{strToDisplay || "0.00"}</div>
    )
};