import WebSocket, { WebSocketServer } from "ws";
import { COMMANDS } from "./constants";
import { commandsMapping } from "./commands";

const PORT = 8080;

const wsServer = () => {
  const wss = new WebSocketServer({
    port: PORT,
  });

  console.log("Start socket on port: ", PORT);

  wss.on("connection", (ws) => {
    console.log("Connected");
    ws.send("Connected");
    ws.on("message", async (data) => {
      const dataString = data.toString();
      const command = COMMANDS.find((command) => dataString.includes(command));

      if (commandsMapping[command]) {
        const parameters = dataString.split(command)[1].trim();

        await commandsMapping[command](parameters, ws);
      }
    });
  });

  wss.on("close", function close() {
    console.log("Close Socket");
  });
};

export { wsServer };
