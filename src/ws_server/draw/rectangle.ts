import { mouse, Point } from "@nut-tree/nut-js";
import { DRAW_SQUARE, STEPS } from "../constants";

export const drawRectangle = async (data, ws) => {
  ws.send(DRAW_SQUARE);
  console.log(DRAW_SQUARE, data);

  const width = parseInt(data.split(" ")[0].trim());
  const hight = parseInt(data.split(" ")[1].trim());

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
      mousePosition.y + (hight / STEPS) * index
    );
  });

  const topPoints = Array.apply(null, Array(STEPS)).map((_, index) => {
    return new Point(
      mousePosition.x + width - (width / STEPS) * index,
      mousePosition.y + hight
    );
  });

  const leftPoints = Array.apply(null, Array(STEPS)).map((_, index) => {
    return new Point(
      mousePosition.x,
      mousePosition.y + hight - (hight / STEPS) * index
    );
  });

  await mouse.drag([
    ...bottomPoints,
    ...rightPoints,
    ...topPoints,
    ...leftPoints,
  ]);
};
