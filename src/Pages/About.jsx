import { Container, Typography, Grid, Chip } from "@mui/material";

export default function About() {
  return (
    <Container sx={{ mt: 8 }}>
      {/* Heading */}
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>

      {/* Intro */}
      <Typography variant="body1" sx={{ mb: 3 }}>
        Hi, I’m <strong>Deval Garg</strong>, an engineering student passionate about
        backend development and building scalable systems. I enjoy solving
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
            Skills
          </Typography>

          <Chip label="Java" sx={{ mr: 1, mb: 1 }} />
          <Chip label="Spring Boot" sx={{ mr: 1, mb: 1 }} />
          <Chip label="Kafka" sx={{ mr: 1, mb: 1 }} />
          <Chip label="React" sx={{ mr: 1, mb: 1 }} />
          <Chip label="MongoDB" sx={{ mr: 1, mb: 1 }} />
          <Chip label="Docker" sx={{ mr: 1, mb: 1 }} />
        </Grid>

      </Grid>
    </Container>
  );
}