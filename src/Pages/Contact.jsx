import { Container } from 'react-bootstrap';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export default function Contact() {
    return(
        <Container style={{ marginTop: "80px", textAlign: "center" }}>
            <h2>Contact Me</h2>
            <p>Email : deval.back.js129@gmail.com</p>

            <div style={{
                fontSize: "40px",
                marginTop: "20px"
            }}>
                <a href="https://github.com/DevalGarg129/" target='_blank'>
                    <GitHub style={{ margin: "10px"}} />
                </a>

                <a href="https://www.linkedin.com/in/deval-garg-b5431a280/" target='_blank'>
                    <LinkedIn style={{ margin: "10px"}}/>
                </a>

                <a href="mailto: deval.back.js129@gmail.com">
                    <Email style={{ margin: "10px" }}/>
                </a>

            </div>
        </Container>
    )
}



