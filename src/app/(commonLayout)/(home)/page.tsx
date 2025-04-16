"use client";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import Button from "@mui/material/Button";
import { useState } from "react";

interface IImageUpload {
  event: "success";
  info: {
    public_id: string;
  };
}
export default function Home() {
  const [imageId, setImageId] = useState("y9xmk7sjcvctxhqef2rb");
  return (
    <main>
      <div className="flex justify-center items-center min-h-screen">
        <CldUploadWidget
          uploadPreset="image-gallery"
          onSuccess={(results) => {
            const res = results as IImageUpload;
            // console.log("Public ID", res.info.public_id);
            setImageId(res.info.public_id);
          }}
        >
          {({ open }) => {
            return (
              <Button variant="outlined" onClick={() => open()}>
                Upload
              </Button>
            );
          }}
        </CldUploadWidget>
      </div>
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
