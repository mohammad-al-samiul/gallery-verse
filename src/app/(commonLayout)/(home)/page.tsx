"use client";
import { CldImage } from "next-cloudinary";

import { useState } from "react";

export default function Home() {
  const [imageId, setImageId] = useState("y9xmk7sjcvctxhqef2rb");
  return (
    <main>
      <div className="flex justify-center items-center min-h-screen"></div>
      <div>
        <CldImage
          width="400"
          height="400"
          src={imageId}
          sizes="80vw"
          alt="Description of my image"
        />
      </div>
    </main>
  );
}
