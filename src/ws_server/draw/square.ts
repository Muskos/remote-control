import { mouse, Point } from "@nut-tree/nut-js";
import { DRAW_SQUARE, STEPS } from "../constants";

export const drawSquare = async (data, ws) => {
  ws.send(DRAW_SQUARE);
  console.log(DRAW_SQUARE);

  const width = parseInt(data);

  const mousePosition = await mouse.getPosition();

  const bottomPoints = Array.apply(null, Array(STEPS)).map((_, index) => {
    return new Point(
      mousePosition.x + (width / STEPS) * index,
      mousePosition.y
    );
  });
  const rightPoints = Array.apply(null, Array(STEPS)).map((_, index) => {
    return new Point(
      mousePosition.x + width,
      mousePosition.y + (width / STEPS) * index
    );
  });

  const topPoints = Array.apply(null, Array(STEPS)).map((_, index) => {
    return new Point(
      mousePosition.x + width - (width / STEPS) * index,
      mousePosition.y + width
    );
  });

  const leftPoints = Array.apply(null, Array(STEPS)).map((_, index) => {
    return new Point(
      mousePosition.x,
      mousePosition.y + width - (width / STEPS) * index
    );
  });

  await mouse.drag([
    ...bottomPoints,
    ...rightPoints,
    ...topPoints,
    ...leftPoints,
  ]);
};
