import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 20, // Reduce padding to fit more content
  },
  section: {
    marginBottom: 10, // Reduce margin to fit more content
    padding: 10,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10, // Reduce margin to fit more content
  },
  subheader: {
    fontSize: 18,
    marginBottom: 5, // Reduce margin to fit more content
    textAlign: "center",
    borderBottom: "1px solid #000",
    paddingBottom: 5,
  },
  text: {
    fontSize: 11, // Reduce font size to fit more content
    marginBottom: 8, // Reduce margin to fit more content
    lineHeight: 1.5,
  },
  bulletPoint: {
    fontSize: 11, // Reduce font size to fit more content
    marginLeft: 15,
    marginBottom: 5,
  },
  coverLetter: {
    fontSize: 11, // Reduce font size to fit more content
    lineHeight: 1.5,
    marginBottom: 8, // Reduce margin to fit more content
  },
  bodyText: {
    fontSize: 11, // Reduce font size to fit more content
    lineHeight: 1.5,
  },
});

// Create Document Component
const GenericResumeDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text>Generic Resume</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subheader}>Cover Letter</Text>
        <Text style={styles.coverLetter}>Dear Hiring Manager,</Text>
        <Text style={styles.coverLetter}>
          I am writing to express my interest in the Junior Developer position.
          My background in sales and team management, combined with recent full
          stack development training at The Coding Boot Camp at UT Austin,
          uniquely positions me to contribute to your team.
        </Text>
        <Text style={styles.coverLetter}>
          In my previous roles, I delivered exceptional results and fostered
          strong relationships in both B2B and B2C environments. I have achieved
          significant growth through strategic leadership and skill enhancement.
        </Text>
        <Text style={styles.coverLetter}>My technical skills include:</Text>
        <Text style={styles.bulletPoint}>
          • Front-End: HTML, CSS, JavaScript, React.js
        </Text>
        <Text style={styles.bulletPoint}>
          • Back-End: Node.js, Express.js, PostgreSQL
        </Text>
        <Text style={styles.bulletPoint}>• Tools: Git, Webpack, Jest</Text>
        <Text style={styles.coverLetter}>
          These skills enable me to build efficient, scalable web applications
          and contribute to both front-end and back-end development tasks
          effectively.
        </Text>
        <Text style={styles.coverLetter}>What I Offer:</Text>
        <Text style={styles.bulletPoint}>
          • Technical Proficiency: Expertise in modern web technologies and
          practices.
        </Text>
        <Text style={styles.bulletPoint}>
          • Strategic Insight: Ability to translate business goals into
          technical solutions.
        </Text>
        <Text style={styles.bulletPoint}>
          • Team Collaboration: Strong communication and leadership skills.
        </Text>
        <Text style={styles.bulletPoint}>
          • Adaptability: Quick learner with a track record of adapting to new
          technologies.
        </Text>
        <Text style={styles.coverLetter}>International Experience:</Text>
        <Text style={styles.coverLetter}>
          Relocating has given me a global perspective and adaptability. My work
          in diverse environments has equipped me with a deep understanding of
          different business cultures, enhancing my problem-solving skills and
          ability to thrive in dynamic settings.
        </Text>
        <Text style={styles.coverLetter}>
          Fluent in multiple languages, and with a Business and Management
          education, I am well-prepared to add value to your team.
        </Text>
        <Text style={styles.coverLetter}>
          Thank you for considering my application. I look forward to discussing
          how my background and skills align with your needs.
        </Text>
        <Text style={styles.coverLetter}>Sincerely,</Text>
        <Text style={styles.coverLetter}>[Francisco Garcia]</Text>
      </View>
    </Page>
  </Document>
);

const GenericResumePDF = () => (
  <PDFDownloadLink
    document={<GenericResumeDocument />}
    fileName="Generic_Resume.pdf"
  >
    {({ loading }) => (loading ? "Loading document..." : "Download Resume")}
  </PDFDownloadLink>
);

export default GenericResumePDF;
