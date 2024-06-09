import React from "react";
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../resume.css";
import Skills from "../components/Skills";
import ResumePDF from "../components/ResumePDF";

const Resume = () => (
  <Container>
    <Box sx={{ py: 5, color: "primary.contrastText" }}>
      <Typography variant="h4" gutterBottom>
        Resume
      </Typography>
      <Box sx={{ mb: 3 }}>
        <ResumePDF />
      </Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="proficiencies-content"
          id="proficiencies-header"
        >
          <Typography variant="h5" gutterBottom fontSize={25}>
            Proficiencies
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText
                primary={<Skills text="HTML, CSS, JavaScript" value={75} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Skills text="React" value={70} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Skills text="Node.js, Express.js" value={75} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Skills text="SQL, PostgreSQL, MongoDB" value={70} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Skills text="Git, GitHub" value={75} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Skills text="Webpack, Babel, NPM" value={70} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Skills text="Testing: Jest, Mocha, Chai" value={65} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="languages-content"
          id="languages-header"
        >
          <Typography variant="h5" gutterBottom fontSize={25}>
            Languages
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText
                primary={<Skills text="English" value={90} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Skills text="Finnish" value={80} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Skills text="Portuguese" value={100} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Skills text="Spanish" value={95} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Skills text="Italian" value={70} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="softskills-content"
          id="softskills-header"
        >
          <Typography variant="h5" gutterBottom fontSize={25}>
            Soft Skills
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText
                primary={<Skills text="Communication" value={90} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Skills text="Problem-Solving" value={85} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Skills text="Teamwork" value={90} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Skills text="Adaptability" value={80} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Skills text="Time Management" value={85} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Skills text="Attention to Detail" value={75} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Skills text="Leadership" value={80} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Skills text="Critical Thinking" value={85} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Skills text="Empathy" value={90} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Skills text="Creativity" value={80} />}
                sx={{ "& .MuiListItemText-primary": { fontSize: "1.2rem" } }}
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  </Container>
);

export default Resume;
