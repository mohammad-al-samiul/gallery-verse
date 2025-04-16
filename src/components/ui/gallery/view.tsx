"use client";
import { CldImage } from "next-cloudinary";
import React from "react";

export default function View({ source }: { source: string }) {
  return (
    <div>
      <CldImage
        width="400"
        height="400"
        src={source}
        // sizes="100vw"
        alt="Description of my image"
      />
    </div>
  );
}
