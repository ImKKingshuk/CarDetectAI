import { throttle } from "lodash";

interface Prediction {
  bbox: number[];
  class: string;
}

export const PredictionModules = (
  predictions: Prediction[],
  hyperRender: CanvasRenderingContext2D | null
) => {
  if (!hyperRender) return;

  hyperRender.clearRect(
    0,
    0,
    hyperRender.canvas.width,
    hyperRender.canvas.height
  );

  const font = "16px sans-serif";
  hyperRender.font = font;
  hyperRender.textBaseline = "top";

  predictions.forEach((prediction) => {
    const [x, y, width, height] = prediction.bbox;

    const isPerson = prediction.class === "person";
    const isPhone = prediction.class === "cell phone";

    hyperRender.strokeStyle = isPerson
      ? "#FF0700"
      : isPhone
      ? "#00fff7"
      : "#FFFF00";
    hyperRender.lineWidth = 4;
    hyperRender.strokeRect(x, y, width, height);

    hyperRender.fillStyle = isPerson
      ? "rgba(255, 0, 0, 0.1)"
      : isPhone
      ? "rgba(0, 255, 247, 0.25)"
      : "rgba(255, 255, 0, 0.1)";
    hyperRender.fillRect(x, y, width, height);

    hyperRender.fillStyle = isPerson
      ? "#FF0000"
      : isPhone
      ? "#00FFFF"
      : "#FFFF00";
    const textWidth = hyperRender.measureText(prediction.class).width;
    const textHeight = parseInt(font, 10);
    hyperRender.fillRect(x, y, textWidth + 4, textHeight + 4);

    hyperRender.fillStyle = "#000000";
    hyperRender.fillText(prediction.class, x, y);

