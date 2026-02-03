import { Card, CardContent, Typography, Grid} from '@mui/material';

export default function Section() {
    return (
        <Grid container spacing={3} sx={{ p: 4}}>
            <Grid item xs={12} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">Zomato API</Typography>
                        <Typography>
                            SpringBoot + Kafka based food delivery Brand
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant='h5'>Log Monitoring</Typography>
                        <Typography variant='body2'>
                            ELK Stack based log monitoring system
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
