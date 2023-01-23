import { mouse, left, right, up, down, Point } from "@nut-tree/nut-js";
import {
  MOUSE_UP,
  MOUSE_DOWN,
  MOUSE_LEFT,
  MOUSE_RIGHT,
  MOUSE_POSITION,
  DRAW_CIRCLE,
  DRAW_SQUARE,
  DRAW_RECTANGLE,
} from "./constants";
import { drawRectangle } from "./draw/rectangle";
import { drawSquare } from "./draw/square";
import { drawCircle } from "./draw/circle";

export const commandsMapping = {
  [MOUSE_UP]: async (data, ws) => {
    await mouse.move(up(parseInt(data)));

    const logMessage = `${MOUSE_UP}-${data}`;

    ws.send(logMessage);
    console.log(logMessage);
  },
  [MOUSE_DOWN]: async (data, ws) => {
    await mouse.move(down(parseInt(data)));

    const logMessage = `${MOUSE_DOWN}-${data}`;

    ws.send(logMessage);
    console.log(logMessage);
  },
  [MOUSE_LEFT]: async (data, ws) => {
    await mouse.move(left(parseInt(data)));

    const logMessage = `${MOUSE_LEFT}-${data}`;

    ws.send(logMessage);
    console.log(logMessage);
  },
  [MOUSE_RIGHT]: async (data, ws) => {
    await mouse.move(right(parseInt(data)));

    const logMessage = `${MOUSE_RIGHT}-${data}`;

    ws.send(logMessage);
    console.log(logMessage);
  },
  [MOUSE_POSITION]: async (data, ws) => {
    const mousePosition = await mouse.getPosition();

    const logMessage = `${MOUSE_POSITION} ${mousePosition.x}px,${mousePosition.y}px`;

    ws.send(logMessage);
    console.log(logMessage);
  },
  [DRAW_CIRCLE]: drawCircle,
  [DRAW_SQUARE]: drawSquare,
  [DRAW_RECTANGLE]: drawRectangle,
};
