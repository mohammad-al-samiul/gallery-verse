"use client";
import { Dialog, ImageListItem } from "@mui/material";
import { CldImage } from "next-cloudinary";
import React, { useState } from "react";

export default function View({ source }: { source: string }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ImageListItem onClick={handleOpen} style={{ cursor: "pointer" }}>
        <CldImage
          width="400"
          height="400"
          src={source}
          alt="Gallery image"
          loading="lazy"
        />
      </ImageListItem>

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <div style={{ padding: 20 }}>
          <CldImage
            width="800"
            height="800"
            src={source}
            alt="Large preview"
            loading="lazy"
          />
        </div>
      </Dialog>
    </>
  );
}
