import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import { Person, Work, Email } from "@mui/icons-material";
import { motion } from "motion/react";

const options = [
  {
    title: "Projects",
    desc: "Explore my Projects",
    path: "/Section",
    icon: <Work fontSize="large" />,
  },
  {
    title: "About Me",
    desc: "Learn About Me",
    path: "/About",
    icon: <Person fontSize="large" />,
  },
  {
    title: "Contact",
    desc: "Get in Touch",
    path: "/Contact",
    icon: <Email fontSize="large" />,
  },
];

function Menu() {
  const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={4}
      sx={{
        p: 4,
        textAlign: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          backgroundColor: "#f0f0f0",
          color: "#333",
          boxShadow: 8,
        },
      }}
    >
      {options.map((opt, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
          <Paper
            elevation={3}
            onClick={() => navigate(opt.path)}
            sx={{
              p: 4,
              textAlign: "center",
              cursor: "pointer",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.5)",
                backgroundColor: "#1976d2",
                color: "white",
              },
            }}
          >
            <Typography variant="h5">{opt.title}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default Menu;
