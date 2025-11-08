import React from "react";
import { useState } from "react";


function Home() {
    const api = process.env.REACT_APP_API;
    const [joke , setjoke]= useState("");
  const apiFunction = async ()=>{
    const apiData = await fetch(api ,{method:"GET"});
    const data = await apiData.json();
    console.log(data);
    setjoke(data);
};

return (
  
<div style={{ 
  backgroundColor: "black", 
  minHeight: "100vh", 
  display: "flex", 
  justifyContent: "center", 
  alignItems: "center", 
  padding: "20px"
}}>

  <div style={{
    maxWidth: "450px",
    width: "100%",
    padding: "35px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    textAlign: "center",
    boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
  }}>

    <h1 style={{ 
      marginBottom: "30px", 
      fontSize: "32px",
      fontWeight: "bold",
      letterSpacing: "2px",
      textTransform: "uppercase",
      textShadow: "2px 2px 4px rgba(0,0,0,0.2)"
    }}>
      😄 Joke Generator
    </h1>

    <div style={{
      background: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(10px)",
      borderRadius: "15px",
      padding: "25px",
      marginBottom: "20px",
      border: "1px solid rgba(255, 255, 255, 0.2)"
    }}>
      <div style={{
      background: "linear-gradient(135deg, #0707ebff 0%, #2a1280ff 100%)",

        padding: "20px",
        borderRadius: "12px",
        marginBottom: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
        
      }}>
        <h2 style={{ 
          fontSize: "18px",
          
          marginBottom: "8px",
          color: "white",
          fontWeight:"Bold",
        }}>
          🎭 JOKE
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.5" }}>{joke.setup}</p>
      </div>

      <div style={{
       background: "linear-gradient(135deg, #0d0d0d 0%, #1a1f3b 100%)"
,
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
      }}>
        <h2 style={{ 
          fontSize: "18px",
          
          marginBottom: "8px",
          color: "white",
          fontWeight:"bold",
        }}>
          💥 PUNCHLINE
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.5" }}>{joke.punchline}</p>
      </div>
    </div>

    <button
      style={{
        padding: "15px 30px",
        border: "none",
        borderRadius: "12px",
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        color: "#333",
        fontSize: "18px",
        fontWeight: "700",
        cursor: "pointer",
        width: "100%",
        transition: "transform 0.2s",
        boxShadow: "0 5px 20px rgba(253, 160, 133, 0.4)",
        textTransform: "uppercase",
        letterSpacing: "1px"
      }}
      onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
      onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
      onClick={apiFunction}
    >
      ✨ Get New Joke
    </button>

  </div>
</div>

  
  );
}

export default Home;
