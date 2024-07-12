import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  sidebar: {
    width: "30%",
    backgroundColor: "#2c3e50",
    color: "#fff",
    padding: 10,
  },
  mainContent: {
    width: "70%",
    padding: 10,
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  profilePic: {
    width: 130,
    height: 130,
    borderRadius: "5%",
    marginVertical: 10,
    alignSelf: "center",
  },
  section: {
    marginBottom: 10,
  },
  subheader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    borderBottom: "1px solid #000",
    paddingBottom: 5,
  },
  text: {
    fontSize: 11,
    marginBottom: 8,
    lineHeight: 1.5,
  },
  bulletPoint: {
    fontSize: 11,
    marginLeft: 15,
    marginBottom: 5,
  },
  contactInfo: {
    marginBottom: 20,
  },
  skills: {
    marginBottom: 20,
  },
  languages: {
    marginBottom: 10,
  },
  languageEntry: {
    marginLeft: 15,
    marginBottom: 5,
    fontSize: 11,
  },
});

// Create Document Component
const ResumeDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.sidebar}>
        <Text style={{ fontSize: 24, textAlign: "center" }}>
          Francisco Garcia
        </Text>
        <Image
          style={styles.profilePic}
          src="src/img/resumepic.jpg" // Replace with actual path to profile picture
        />
        <View style={styles.contactInfo}>
          <Text style={{ fontSize: 10, marginTop: 10, marginBottom: 5 }}>
            {" "}
            2725 Kickapoo Carver Dr, Pflugerville, TX
          </Text>
          <Text style={{ fontSize: 10, marginBottom: 5 }}>+1 512 767-4062</Text>
          <Text style={{ fontSize: 10, marginBottom: 5 }}>
            fgsdeve@gmail.com
          </Text>
          <Text style={{ fontSize: 10 }}>
            <a href="https://github.com/fgsdeve" style={{ color: "#fff" }}>
              https://github.com/fgsdeve
            </a>
          </Text>
        </View>
        <View style={styles.skills}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            {" "}
            Skills{" "}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            {" "}
            Technical{" "}
          </Text>
          <Text style={styles.bulletPoint}>HTML5</Text>
          <Text style={styles.bulletPoint}>CSS3</Text>
          <Text style={styles.bulletPoint}>JavaScript (ES6+)</Text>
          <Text style={styles.bulletPoint}>React</Text>
          <Text style={styles.bulletPoint}>Node.js</Text>
          <Text style={styles.bulletPoint}>Express.js</Text>
          <Text style={styles.bulletPoint}>MongoDB</Text>
          <Text style={styles.bulletPoint}>SQL</Text>
          <Text style={styles.bulletPoint}>Git</Text>
          <Text style={styles.bulletPoint}>Agile Methodologies</Text>
          <Text style={styles.bulletPoint}>CRM Systems</Text>
          {/* Sales & Management Skills  */}
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              marginBottom: 15,
              marginTop: 10,
            }}
          >
            {" "}
            Sales & Management{" "}
          </Text>
          <Text style={styles.bulletPoint}>Sales Strategy</Text>
          <Text style={styles.bulletPoint}>Customer Experience</Text>
          <Text style={styles.bulletPoint}>Team Management</Text>
          <Text style={styles.bulletPoint}>Data Analysis</Text>
          <Text style={styles.bulletPoint}>
            International Business Adaptation
          </Text>
          {/* Soft Skills */}
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              marginBottom: 15,
              marginTop: 15,
            }}
          >
            Soft Skills
          </Text>
          <Text style={styles.bulletPoint}>Effective Communication</Text>
          <Text style={styles.bulletPoint}>Problem Solving</Text>
          <Text style={styles.bulletPoint}>Team Collaboration</Text>
          <Text style={styles.bulletPoint}>Leadership Development</Text>
        </View>
        {/* Languages */}
        <View style={styles.languages}>
          <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 10 }}>
            Languages
          </Text>
          <Text style={styles.languageEntry}>English: Fluent</Text>
          <Text style={styles.languageEntry}>Finnish: Fluent</Text>
          <Text style={styles.languageEntry}>Spanish: Fluent</Text>
          <Text style={styles.languageEntry}>Portuguese: Fluent</Text>
        </View>
      </View>
      {/* Summary */}
      <View style={styles.mainContent}>
        <View style={styles.section}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 5,
              borderBottom: "1px solid #000",
              paddingBottom: 5,
            }}
          >
            Summary
          </Text>
          <Text style={{ fontSize: 11, marginBottom: 8, lineHeight: 1.5, marginTop:10 }}>
            Dynamic Full Stack Web Developer with 6+ years of international
            sales management experience and a recent comprehensive certification
            from UT Austin. 
            
            Proven track record of leading projects to
            completion, enhancing customer satisfaction, and driving team
            productivity. Skilled in JavaScript, HTML, and CSS with a passion
            for mentoring and developing junior talent. Eager to take on a lead
            role in a growing company.
          </Text>
        </View>
        <View style={styles.section}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 5,
              borderBottom: "1px solid #000",
              paddingBottom: 5,
              lineHeight: 1.5
            }}
          >
            Projects
          </Text>
          <Text style={{ fontSize: 11, marginBottom: 8, lineHeight: 1.5 }}>
            <Text style={{ fontWeight: "bold", fontSize: 11 }}>
              React Portfolio
            </Text>
          </Text>
          <Text
            style={{
              fontSize: 11,
              marginTop: 10, // Added margin top to ensure spacing
              marginBottom: 10,
              lineHeight: 1.5,
            }}
          >
            Description: A polished portfolio showcasing various React projects,
            complete with detailed documentation and live demos. Emphasizes
            front-end skills and project management.
          </Text>
          <Text style={{ fontSize: 11, lineHeight: 1.5 }}>
            Technologies: React, JavaScript, HTML5, CSS3, material-ui.
          </Text>
          <Text
            style={{
              fontSize: 11,
              color: "#0000EE",
              textDecoration: "underline",
              lineHeight: 1.5,
            }}
          >
            Link: React Portfolio
          </Text>
        </View>
        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.subheader}>Education</Text>
          <Text style={styles.text}>
            <Text style={styles.strongText}>
              The University of Texas at Austin — Full Stack Web Development
            </Text>
            {"\n"}
            January 2023 - June 2023
          </Text>
          <Text style={styles.text}>
            Completed a comprehensive and rigorous program focusing on HTML5,
            CSS3, JavaScript, React, Node.js, Express.js, MongoDB, and SQL.
            Developed and deployed over 20 full stack applications.
          </Text>
          <Text style={styles.text}>
            <Text style={styles.strongText}>
              Helsinki Business College Oy, Helsinki, Finland — Bachelor’s in
              Business Administration
            </Text>
            {"\n"}
            January 2013 - January 2016
          </Text>
          <Text style={styles.text}>
            Major in International Business and Marketing. Specialized in
            creating and implementing business strategies for new markets,
            honing skills in strategic planning and market analysis. Actively
            participated in Business Club and various business competitions.
          </Text>
        </View>
        {/* Past experiences */}
        <View style={styles.section}>
          <Text style={styles.subheader}>Experience</Text>
          <Text style={styles.text}>
            <Text style={styles.strongText}>
              Estee Lauder Companies Europe, Stockholm, Sweden — Luxury Team
              Director
            </Text>
            {"\n"}
            January 2016 - January 2021
          </Text>
          <View style={styles.bulletPoint}>
            <Text>
              • Increased Sales by 40%: Implemented strategic growth initiatives
              and aligned customer experience with marketing efforts.
            </Text>
            <Text>
              • Enhanced Customer Satisfaction by 35%: Identified and addressed
              customer needs, resulting in improved satisfaction and loyalty.
            </Text>
            <Text>
              • Led Diverse Team to 50% Productivity Increase: Improved
              performance and productivity through effective coaching and
              goal-setting.
            </Text>
            <Text>
              • Developed Onboarding Program: Created a comprehensive onboarding
              program for new hires covering luxury products, sales techniques,
              and communication skills.
            </Text>
            <Text>
              • Navigated International Business Cultures: Successfully enhanced
              operational efficiency and cultural integration.
            </Text>
          </View>
          <Text style={styles.text}>
            <Text style={styles.strongText}>
              Carlson Rezidor Hotel Group, Helsinki, Finland — Customer
              Relationship Management Specialist
            </Text>
            {"\n"}
            January 2015 - December 2015
          </Text>
          <View style={styles.bulletPoint}>
            <Text>
              • Improved Client Retention by 20%: Developed personalized sales
              and marketing approaches, boosting customer satisfaction.
            </Text>
            <Text>
              • Optimized CRM Utilization: Streamlined performance monitoring
              and pipeline management, resulting in a 25% increase in lead
              conversion.
            </Text>
            <Text>
              • Secured New Business Opportunities: Identified and capitalized
              on new business opportunities, contributing to a 15% revenue
              growth.
            </Text>
            <Text>
              • Analyzed Customer Data: Utilized data mining tools to inform
              strategic decisions, increasing campaign effectiveness by 30%.
            </Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

const ResumePDF = () => (
  <PDFDownloadLink document={<ResumeDocument />} fileName="Resume.pdf">
    {({ loading }) => (loading ? "Loading document..." : "Download Resume")}
  </PDFDownloadLink>
);

export default ResumePDF;
