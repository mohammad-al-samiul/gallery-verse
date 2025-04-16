"use client";
import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload"; // ✅ Import icon

interface IImageUpload {
  event: "success";
  info: {
    public_id: string;
  };
}

export default function UploadButton() {
  const [imageId, setImageId] = useState("y9xmk7sjcvctxhqef2rb");

  return (
    <div>
      <CldUploadWidget
        uploadPreset="image-gallery"
        onSuccess={(results) => {
          const res = results as IImageUpload;
          setImageId(res.info.public_id);
        }}
      >
        {({ open }) => {
          return (
            <Button
              variant="outlined"
              onClick={() => open()}
              startIcon={<UploadIcon />} // ✅ Add icon to the start
              sx={{
                color: "#fff", // white text
                borderColor: "#fff", // white border
                "&:hover": {
                  borderColor: "#ccc", // light gray on hover
                },
              }}
            >
              Upload
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}
