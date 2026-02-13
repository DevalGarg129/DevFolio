import { Card, CardContent, Typography, Grid, Button } from "@mui/material";

const projects = [
  {
    title: "Zomato API",
    desc: "SpringBoot + kafka based Monitoring system",
    github: "https://github.com/DevalGarg129/ZomatoAPI",
  },

  {
    title: "Prohive",
    desc: "Full stack Social networking platform, enabling professional to connect",
    github: "https://github.com/DevalGarg129/Prohive",
  },

  {
    title: "MeetX",
    desc: "ReactJS based video conferencing application",
    github: "https://github.com/DevalGarg129/MeetX",
  },
];

export default function Section() {
  return (
    <Grid container spacing={3} sx={{ p: 4 }} justifyContent="center">
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ textAlign: "center"}}>
            <CardContent>
              <Typography variant="h5">{project.title}</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {project.desc}
              </Typography>
              <Button variant="contained" href={project.github} target="_blank">
                Github
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
