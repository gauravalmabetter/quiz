import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { Facebook, Instagram, WhatsApp, YouTube } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./style.css";
function Footer() {
  return (
    <Box
      className="footer"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box
        className="footer"
        display="flex"
        flexDirection="row"
        justifyContent="center"
      >
       
       
        
      </Box>
      <Typography variant="caption" textAlign="center">
        All Rights Are Reserved @Dreamers
      </Typography>
    </Box>
  );
}

export default Footer;
