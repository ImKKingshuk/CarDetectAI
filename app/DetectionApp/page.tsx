"use client";

import ObjectDetectionWindow from "@/Components/CoreAI/ObjectDetectionWindow";

interface DetectionAppProps {}

function DetectionApp({}: DetectionAppProps) {
  return (
    <div className="mx-auto">
      <ObjectDetectionWindow />
    </div>
  );
}

export default DetectionApp;
