"use client";

import React from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import { CldImage } from "next-cloudinary";
import CloseIcon from "@mui/icons-material/Close";

interface IImageModalProps {
  open: boolean;
  onClose: () => void;
  src: string;
}

const ImageModal = ({ open, onClose, src }: IImageModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogContent>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <CldImage width="800" height="800" src={src} alt="Preview" />
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
