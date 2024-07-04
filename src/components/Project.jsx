import React from "react";
import "../portfolio.css";
import { motion } from "framer-motion";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const Project = ({ title, image, deployedLink, repoLink }) => (
  <motion.div
  whileHover={{ scale: 1.1 }}
  onHoverStart={(e) => {}}
  onHoverEnd={(e) => {}}
  
>
 <Card sx={{ maxWidth: 345, margin: "20px", backgroundColor: "#1c1c1c" }}>
    <CardMedia component="img" height="140" image={image} alt={title} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" color="white">
        {title}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        size="small"
        color={deployedLink ? "secondary" : "disabled"}
        href={deployedLink}
        target="_blank"
        disabled={deployedLink ? false : true}
      >
        Deployed Application
      </Button>
      <Button size="small" color="secondary" href={repoLink} target="_blank">
        GitHub Repository
      </Button>
    </CardActions>
  </Card>
  </motion.div>
);

export default Project;
