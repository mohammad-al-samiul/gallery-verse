/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload"; // ✅ Import icon
import { useRouter } from "next/navigation";

interface IImageUpload {
  event: "success";
  info: {
    public_id: string;
  };
}

export default function UploadButton() {
  //page refresh

  const router = useRouter();
  return (
    <div>
      <CldUploadWidget
        uploadPreset="image-gallery"
        onSuccess={(results) => {
          const res = results as IImageUpload;
          setTimeout(() => {
            router.refresh();
          }, 1000);
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
