import { useState } from "react";
import { AiFillAlert } from "react-icons/ai";


function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",          // full viewport height
        width: "100vw",           // full viewport width
        display: "flex",          // enable flex
        justifyContent: "center", // vertical center
        alignItems: "center",     // horizontal center
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // horizontal center inside
          gap: "10px",
        }}
      >
        <h1 style={{ fontStyle: "italic", margin: "0" }}>Hello</h1>

        <button onClick={() => setColor("red")}>Red<AiFillAlert /></button> 
        <button onClick={() => setColor("black")}>black <AiFillAlert /></button> 
        <button onClick={() => setColor("green")}>Green<AiFillAlert /></button> 
        <button onClick={() => setColor("purple")}>Purple<AiFillAlert /></button> 
        <button onClick={() => setColor("yellow")}>Yellow<AiFillAlert /></button> 
        <button onClick={() => setColor("white")}>white<AiFillAlert /></button> 
      </div>
    </div>
  );
}

export default App;
