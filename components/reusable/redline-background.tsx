import React from "react";

const RedLinesBackground = () => {
  return (
    <svg
      width="684"
      height="542"
      viewBox="0 0 684 542"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 -z-10" // optional styling
    >
      <path
        d="M-218 250.227L156.959 297.488"
        stroke="#FE0000"
        strokeOpacity="0.06"
        strokeWidth="0.987073"
      />
      <path
        d="M-218 250.227L156.959 297.488"
        stroke="#FE0000"
        strokeOpacity="0.06"
        strokeWidth="0.987073"
        strokeMiterlimit={10}
      />
      {/* … keep the rest of your paths here exactly as they are … */}
    </svg>
  );
};

export default RedLinesBackground;
