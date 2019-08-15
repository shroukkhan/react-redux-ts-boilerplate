import React from "react";
import posed from "react-pose";

const Box =  posed.div({
    left: { x: -100 },
    right: { x: 100 },
});

export const CurrentCellsIndicator = (props: { cellIndex: number }) => {
    const x = 5 * props.cellIndex + "%";
    return <Box className={"current-cells-indicator"} pose={"left"}/>;
};
