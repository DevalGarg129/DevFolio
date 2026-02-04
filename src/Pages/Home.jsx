import { Button, Typography, Container, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" gutterBottom>
          Hi, I'm <strong>Deval Garg</strong>
        </Typography>
      </motion.div>

      {/* Animated Subtitle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Typography variant="h6" color="text.secondary">
          Engineering Student | Software Developer | Fitness Enthusiast
        </Typography>
      </motion.div>

      {/* Animated Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{ mt: 4, px: 4 }}
          onClick={() => navigate("/menu")}
        >
          View
        </Button>
      </motion.div>
    </Container>
  );
}
