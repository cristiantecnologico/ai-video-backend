const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Backend conectado correctamente 🚀");
});

// 1️⃣ Ruta para generar guion
app.post("/generate-script", async (req, res) => {
  const { topic } = req.body;

  const script = `
🎬 INTRO
Hoy hablaremos sobre: ${topic}

🔥 CONTENIDO
Historia, datos curiosos y momentos importantes.

🏁 DESPEDIDA
Si te gustó el vídeo suscríbete.
`;

  res.json({ script });
});

// 2️⃣ Ruta para generar TODO (guion + todo lo demás)
app.post("/generate-all", async (req, res) => {
  const { topic } = req.body;

  res.json({
    status: "ok",
    message: "Contenido generado correctamente",
    topic
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});
