import "../style.less";
import React from "react";

export const SVGDoubleUp: React.FC<React.SVGProps<SVGSVGElement>> = props => (
    <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            className="flat-icon-stroke"
            d="m16 11-2-2-2-2-2 2-2 2m8 6-2-2-2-2-2 2-2 2"
            stroke="#5D6066"
            strokeLinejoin="round"
            strokeWidth="1.25"
        ></path>
    </svg>
);

export default SVGDoubleUp;
