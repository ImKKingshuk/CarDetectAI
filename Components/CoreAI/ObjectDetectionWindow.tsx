"use client";

import { useEffect, useRef, useState } from "react";

import { PredictionModules } from "./UtilsAI/PredictionModules";

interface ObjectDetectionWindowProps {}

interface DetectedObject {
  bbox: number[];
  class: string;
}

function ObjectDetectionWindow({}: ObjectDetectionWindowProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const detectIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const runCoco = async () => {
    setIsLoading(true);
    setIsLoading(false);
    detectIntervalRef.current = setInterval(() => {
      runObjectDetection(net);
    }, 10);
  };

  const runObjectDetection = async (net: any) => {
    if (
      canvasRef.current &&
      webcamRef.current !== null &&
      webcamRef.current.video?.readyState === 4
    ) {
      const video = webcamRef.current.video!;
      canvasRef.current.width = video.videoWidth;
      canvasRef.current.height = video.videoHeight;

      const detectedObjects = await net.detect(video, undefined, 0.6);

      const context = canvasRef.current.getContext("2d")!;
      if (context) {
        PredictionModules(detectedObjects, context);
      }
    }
  };

  const showMyVideo = () => {
    const video = webcamRef.current?.video!;
    if (video && video.readyState === 4) {
      const { videoWidth, videoHeight } = video;
      video.width = videoWidth;
      video.height = videoHeight;
    }
  };

  useEffect(() => {
    const loadModel = async () => {
      if (typeof window !== "undefined") {
        try {
          await tf.setBackend("webgl");
          await tf.ready();
        } catch (error) {
          console.error("Error loading Coco-SSD model:", error);
        }
      }
    };
    loadModel();

    return () => {
      if (detectIntervalRef.current) {
        clearInterval(detectIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="mt-8">
      {isLoading ? (
        <div className="w-20 h-20 border-l-2 justify-center items-center mx-auto border-[#1a5cff] rounded-full animate-spin" />
      ) : (
        <div className="relative m-auto border-4 border-white rounded-2xl w-3/4 h-3/4 z-100">
          <Webcam
            ref={webcamRef}
            className="rounded-xl w-full h-3/4 m-auto"
            muted
            onUserMedia={showMyVideo}
          />
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 z-80 w-full h-3/4"
          />
        </div>
      )}
    </div>
  );
}

export default ObjectDetectionWindow;
