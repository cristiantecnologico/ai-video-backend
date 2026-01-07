const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/script", async (req, res) => {
  const { prompt } = req.body;

  const script = `
🎙️ INTRO
Bienvenidos al canal. Hoy hablaremos de: ${prompt}.

🏟️ CONTENIDO
Analizaremos los mejores momentos, récords, datos curiosos
y todo lo relacionado con este tema del fútbol mundial.

🔥 PUNTOS CLAVE
- historia del jugador/equipo
- jugadas importantes
- estadísticas destacadas
- impacto en el fútbol actual

🔚 DESPEDIDA
Si te gustó el vídeo deja tu like y suscríbete para más contenido del Real Madrid y fútbol mundial.
`;

  res.json({ script });
});

app.get("/", (req, res) => {
  res.send("Backend funcionando correctamente 🟢");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});
