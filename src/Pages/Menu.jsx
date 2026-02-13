import { Paper, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Person, Work, Email } from "@mui/icons-material";

export default function Menu() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
      }}
    >
      {/* Projects */}
      <Paper
        elevation={6}
        onClick={() => navigate("/section")}
        sx={{
          width: 220,
          height: 130,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "18px",
          cursor: "pointer",
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.08)",
            backgroundColor: "#198754",
            color: "white",
          },
        }}
      >
        <Work fontSize="large" />
        <Typography variant="h6" sx={{ mt: 1 }}>
          Projects
        </Typography>
      </Paper>

      {/* About */}
      <Paper
        elevation={6}
        onClick={() => navigate("/about")}
        sx={{
          width: 220,
          height: 130,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "18px",
          cursor: "pointer",
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.08)",
            backgroundColor: "#198754",
            color: "white",
          },
        }}
      >
        <Person fontSize="large" />
        <Typography variant="h6" sx={{ mt: 1 }}>
          About Me
        </Typography>
      </Paper>

      {/* Contact */}
      <Paper
        elevation={6}
        onClick={() => navigate("/contact")}
        sx={{
          width: 220,
          height: 130,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "18px",
          cursor: "pointer",
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.08)",
            backgroundColor: "#198754",
            color: "white",
          },
        }}
      >
        <Email fontSize="large" />
        <Typography variant="h6" sx={{ mt: 1 }}>
          Contact
        </Typography>
      </Paper>
    </Box>
  );
}
