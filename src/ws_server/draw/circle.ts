import { mouse, Point } from "@nut-tree/nut-js";
import { DRAW_CIRCLE, STEPS } from "../constants";

export const drawCircle = async (data, ws) => {
  ws.send(DRAW_CIRCLE);
  console.log(DRAW_CIRCLE);
  const mousePosition = await mouse.getPosition();
  const radius = parseInt(data);
  const points = Array.apply(null, Array(STEPS)).map((_, index) => {
    const x =
      mousePosition.x -
      radius +
      radius * Math.cos((2 * Math.PI * index) / STEPS);
    const y =
      mousePosition.y + radius * Math.sin((2 * Math.PI * index) / STEPS);

    return new Point(x, y);
  });

  await mouse.drag(points);
};
