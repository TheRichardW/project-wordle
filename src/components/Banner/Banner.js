import React from "react";

function Banner({ className = "", children  }) {
  return (
    <div className={`banner ${className}`}>
     {children}
    </div>
  );
}

export default Banner;
