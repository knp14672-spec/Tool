import React from "react";

export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #6a11cb, #2575fc)",
      fontFamily: "'Roboto', sans-serif",
      color: "#fff"
    }}>
      <div style={{
        background: "rgba(255,255,255,0.05)",
        padding: "50px",
        borderRadius: "20px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
        width: "90%",
        maxWidth: "600px",
        textAlign: "center",
        backdropFilter: "blur(10px)"
      }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>AI Blog Writer</h1>
        <textarea
          placeholder="Enter your topic here..."
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            resize: "none",
            height: "150px",
            fontSize: "1rem",
            marginBottom: "20px"
          }}
        />
        <br />
        <button style={{
          padding: "15px 30px",
          borderRadius: "10px",
          border: "none",
          background: "linear-gradient(45deg, #ff512f, #dd2476)",
          color: "#fff",
          fontSize: "1.1rem",
          cursor: "pointer",
          transition: "0.3s"
        }}
        onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
        onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}>
          Generate Blog
        </button>
      </div>
    </div>
  );
}
