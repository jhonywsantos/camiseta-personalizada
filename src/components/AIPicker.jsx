import React, { useEffect } from "react";
import { download } from "../assets";
import { downloadCanvasToImage } from "../config/helpers";

const AIPicker = () => {
  useEffect(() => {
    downloadCanvasToImage();
  }, []);
};

export default AIPicker;
