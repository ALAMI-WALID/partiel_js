import React, { useState } from "react";

const Item = ({ item }) => {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input onChange={() => setIsCheck(!isCheck)} type="checkbox" />
      <p style={{  }}>{item}</p>
    </div>
  );
};

export default Item;
