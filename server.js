const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// IA – Simulación generador de guion
app.post("/generate-script", async (req, res) => {
  const { prompt } = req.body;

  const script = `
🎥 INTRO
Bienvenidos al canal. Hoy hablaremos de: ${prompt}.

📌 CONTENIDO
Repasaremos los mejores momentos, récords, curiosidades y puntos importantes.

🔥 PUNTOS CLAVE
- historia del jugador/equipo
- momentos importantes
- estadísticas destacadas
- impacto en el fútbol actual

👋 DESPEDIDA
Si te gustó el vídeo deja tu like y suscríbete para más contenido.
`;

  res.json({ script });
});

// AUDIO falso (luego se conecta a API real)
app.post("/generate-audio", async (req, res) => {
  res.json({ audioUrl: "https://file-examples.com/storage/fe7d/example.mp3" });
});

// VIDEO falso (luego se conecta a API real)
app.post("/generate-video", async (req, res) => {
  res.json({ videoUrl: "https://file-examples.com/storage/fe7d/example.mp4" });
});

app.get("/", (req, res) => {
  res.send("Backend funcionando correctamente 🎉");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor en puerto " + PORT));
