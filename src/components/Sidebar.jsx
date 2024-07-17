import React from "react";
import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import profilePic from "../img/resumepic.jpg";

const styles = StyleSheet.create({
  sidebar: {
    width: "30%",
    backgroundColor: "#2c3e50",
    color: "#fff",
    padding: 10,
  },
  profilePic: {
    width: 130,
    height: 130,
    borderRadius: "5%",
    marginVertical: 10,
    alignSelf: "center",
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
  bulletPoint: {
    fontSize: 11,
    marginLeft: 15,
    marginBottom: 5,
  },
});

const Sidebar = () => (
    /* Info */
  <View style={styles.sidebar}>
    <Text style={{ fontSize: 24, textAlign: "center" }}>Francisco Garcia</Text>
    <Image style={styles.profilePic} src={profilePic} />
    <View style={styles.contactInfo}>
      <Text style={{ fontSize: 10, marginTop: 10, marginBottom: 5 }}>
        2725 Kickapoo Carver Dr, Pflugerville, TX
      </Text>
      <Text style={{ fontSize: 10, marginBottom: 5 }}>+1 512 767-4062</Text>
      <Text style={{ fontSize: 10, marginBottom: 5 }}>fgsdeve@gmail.com</Text>
      <Text style={{ fontSize: 10, color: "#fff" }}>https://github.com/fgsdeve</Text>
    </View>

    {/* Skill */}
    <View style={styles.skills}>
      <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 10, marginTop: 10 }}>Skills</Text>
      <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 10, marginTop: 10 }}>Technical</Text>
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
      {/* sales management */}
      <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 15, marginTop: 30 }}>Sales & Management</Text>
      <Text style={styles.bulletPoint}>Sales Strategy</Text>
      <Text style={styles.bulletPoint}>Customer Experience</Text>
      <Text style={styles.bulletPoint}>Team Management</Text>
      <Text style={styles.bulletPoint}>Data Analysis</Text>
      <Text style={styles.bulletPoint}>International Business Adaptation</Text>
      {/* soft skills */}
      <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 15, marginTop:20}} break> Soft Skills</Text>
      <Text style={styles.bulletPoint}>Effective Communication</Text>
      <Text style={styles.bulletPoint}>Problem Solving</Text>
      <Text style={styles.bulletPoint}>Team Collaboration</Text>
      <Text style={styles.bulletPoint}>Leadership Development</Text>
    </View>
    {/* languages */}
    <View style={styles.languages}>
      <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 10 }}>Languages</Text>
      <Text style={styles.languageEntry}>English: Fluent</Text>
      <Text style={styles.languageEntry}>Finnish: Fluent</Text>
      <Text style={styles.languageEntry}>Spanish: Fluent</Text>
      <Text style={styles.languageEntry}>Portuguese: Fluent</Text>
    </View>
  </View>
);

export default Sidebar;
