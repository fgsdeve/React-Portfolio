import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  mainContent: {
    width: "70%",
    padding: 10,
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
  bulletMargin: {
    marginTop: 7,
  },
});

/* Sumary */
const MainContent = () => (
  <View style={styles.mainContent}>
    <View style={styles.section}>
      <Text style={[styles.subheader, { marginBottom: 15 }]}>Summary</Text>
      <Text style={styles.text}>
        Dynamic Full Stack Web Developer with 6+ years of international sales
        management experience and a recent comprehensive certification from UT
        Austin. Proven track record of leading projects to completion, enhancing
        customer satisfaction, and driving team productivity. Skilled in
        JavaScript, HTML, and CSS with a passion for mentoring and developing
        junior talent. Eager to take on a lead role in a growing company.
      </Text>
    </View>
    {/* Project */}
    <View style={[styles.section, { marginTop: 15 }]}>
      <Text style={styles.subheader}>Projects</Text>
      <Text style={{ fontSize: 11, marginBottom: 8, lineHeight: 1.5 }}>
        <Text style={{ fontWeight: "bold", fontSize: 11 }}>
          React Portfolio
        </Text>
      </Text>
      <Text
        style={{
          fontSize: 11,
          marginTop: 10,
          marginBottom: 10,
          lineHeight: 1.5,
        }}
      >
        Description: A polished portfolio showcasing various projects, complete
        with detailed documentation and live demos. Emphasizes front-end skills
        and project management.
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
        https://main--fgsdevportfolio.netlify.app/
      </Text>
    </View>

    {/* Education */}
    <View style={[styles.section, { marginTop: 15 }]}>
      <Text style={styles.subheader}>Education</Text>
      <Text style={[styles.text, { marginTop: 15 }]}>
        <Text style={styles.strongText}>
          The University of Texas at Austin — Full Stack Web Development
        </Text>
        {"\n"}
        January 2023 - June 2023
      </Text>
      <Text style={styles.text}>
        Completed a comprehensive and rigorous program focusing on HTML5, CSS3,
        JavaScript, React, Node.js, Express.js, MongoDB, and SQL. Developed and
        deployed over 20 full stack applications.
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
        Major in International Business and Marketing. Specialized in creating
        and implementing business strategies for new markets, honing skills in
        strategic planning and market analysis. Actively participated in
        Business Club and various business competitions.
      </Text>
    </View>

    {/* Experience */}
    <View style={[styles.section, { marginTop: 15 }]} break>
    <Text style={styles.subheader}>Experience</Text>
      <View
        style={[
          styles.text,
          { marginTop: 15, flexDirection: "row", flexWrap: "wrap" },
        ]}
      >
        <Text style={styles.strongText}>
          Estee Lauder Companies Europe, Stockholm, Sweden — Luxury Team{" "}
        </Text>
        <Text style={styles.strongText}>Director</Text>
        {"\n"}
        <Text>January 2016 - January 2021</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text>
          • Increased Sales by 40%: Implemented strategic growth initiatives and
          aligned customer experience with marketing efforts.
        </Text>
        <Text style={styles.bulletMargin}>
          • Enhanced Customer Satisfaction by 35%: Identified and addressed
          customer needs, resulting in improved satisfaction and loyalty.
        </Text>
        <Text style={styles.bulletMargin}>
          • Led Diverse Team to 50% Productivity Increase: Improved performance
          and productivity through effective coaching and goal-setting.
        </Text>
        <Text style={styles.bulletMargin}>
          • Developed Onboarding Program: Created a comprehensive onboarding
          program for new hires covering luxury products, sales techniques, and
          communication skills.
        </Text>
        <Text style={styles.bulletMargin}>
          • Navigated International Business Cultures: Successfully enhanced
          operational efficiency and cultural integration.
        </Text>
      </View>

      <View
        style={[
          styles.text,
          { marginTop: 15, flexDirection: "row", flexWrap: "wrap" },
        ]}
      >
        <Text style={styles.strongText}>
          Carlson Rezidor Hotel Group, Helsinki, Finland — Customer Relationship{" "}
        </Text>
        <Text style={styles.strongText}>Management Specialist</Text>
        {"\n"}
        <Text>January 2015 - December 2015</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bulletMargin}>
          • Improved Client Retention by 20%: Developed personalized sales and
          marketing approaches, boosting customer satisfaction.
        </Text>
        <Text style={styles.bulletMargin}>
          • Optimized CRM Utilization: Streamlined performance monitoring and
          pipeline management, resulting in a 25% increase in lead conversion.
        </Text>
        <Text style={styles.bulletMargin}>
          • Secured New Business Opportunities: Identified and capitalized on
          new business opportunities, contributing to a 15% revenue growth.
        </Text>
        <Text style={styles.bulletMargin}>
          • Analyzed Customer Data: Utilized data mining tools to inform
          strategic decisions, increasing campaign effectiveness by 30%.
        </Text>
      </View>
    </View>
  </View>
);

export default MainContent;
