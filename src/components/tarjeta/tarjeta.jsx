import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TarjetaSanValentin = () => {
    const [position, setPosition] = useState({ top: "707px", left: "500px" });

    const moverBoton = () => {
      const randomTop = Math.floor(Math.random() * 300) + "px";
      const randomLeft = Math.floor(Math.random() * 300) + "px";
      setPosition({ top: randomTop, left: randomLeft });
    };

    const redirigirVideo = () => {
        window.location.href = "https://www.youtube.com/watch?v=oPaTYfcgjRE&t=4698s";
      };  
  
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundColor: "#0a0a1a",
        color: "white",
        textAlign: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(30, 30, 30, 0.9)",
          padding: "20px",
          borderRadius: "10px",
          border: "2px solid rgba(255, 0, 0, 0.8)",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ color: "#ff0000" }}>¿Quieres ser mi San Valentín?</h2>
        <div style={{ padding: "10px" }}>
        <div class="tenor-gif-embed" data-postid="16224832" data-share-method="host" data-aspect-ratio="0.83125" data-width="100%"><a href="https://tenor.com/view/love-heart-slap-cute-i-love-you-gif-16224832">Love Heart GIF</a>from <a href="https://tenor.com/search/love-gifs">Love GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        </div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-success" style={{ width: "45%" }} onClick={redirigirVideo}>
            ¡Sí, quiero!
          </button>
          <button
           className="btn btn-danger" 
           style={{ width: "15%" , position: "absolute", ...position }}
           onMouseEnter={moverBoton}
           >
            No, gracias
          </button>
        </div>
      </div>
    </div>
  );
};

export default TarjetaSanValentin;
