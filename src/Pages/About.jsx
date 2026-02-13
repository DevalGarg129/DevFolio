import { Container, Typography, Grid, Chip, Box } from "@mui/material";
import { Storage, Cloud, Code, Memory } from "@mui/icons-material";

export default function About() {
  return (
    <Container sx={{ mt: 10 }}>
      {/* Heading */}
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>

      {/* Intro */}
      <Typography variant="body1" sx={{ mb: 4 }}>
        Hi, I’m <strong>Deval Garg</strong>, an engineering student passionate
        about backend development and building scalable systems. I enjoy solving
        real-world problems using clean architecture and modern technologies.
      </Typography>

      {/* Grid layout */}
      <Grid container spacing={4}>
        {/* Education */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Education
          </Typography>
          <Typography variant="body2">
            B.Tech (AIML) <br />
            Second Year Engineering Student <br />
            Graduation Year: 2027
          </Typography>
        </Grid>

        {/* Skills */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Tech Stack
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            <Chip icon={<Java />} label="Java" />
            <Chip icon={<Code />} label="Spring Boot" />
            <Chip icon={<Memory />} label="Kafka" />
            <Chip icon={<Storage />} label="MongoDB" />
            <Chip icon={<Cloud />} label="Docker" />
            <Chip icon={<Code />} label="React" />
          </Box>
        </Grid>
      </Grid>

      {/* Goal */}
      <Typography variant="body1" sx={{ mt: 4 }}>
        I’m currently focused on strengthening my backend skills, learning
        system design, and preparing for internships where I can contribute and
        grow as a software engineer.
      </Typography>
    </Container>
  );
}
