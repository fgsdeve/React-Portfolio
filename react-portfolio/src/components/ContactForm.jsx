import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Box, TextField, Button, Typography } from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors({ ...errors, [name]: `${name} is required` });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_i0494l8",
        "template_ahwdvpg",
        form.current,
        "jvVqj93WmfXRzqSva"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitted(true); // Set the submission status to true
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Box
      component="form"
      ref={form}
      onSubmit={handleSubmit}
      sx={{
        "& .MuiTextField-root": { mb: 2 },
        maxWidth: "600px",
        margin: "0 auto",
        padding: 3,
        backgroundColor: "background.paper",
        borderRadius: 1,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Contact Me
      </Typography>
      <TextField
        fullWidth
        label="Name"
        name="name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(errors.name)}
        helperText={errors.name}
        required
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        variant="outlined"
        type="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(errors.email)}
        helperText={errors.email}
        required
      />
      <TextField
        fullWidth
        label="Message"
        name="message"
        variant="outlined"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(errors.message)}
        helperText={errors.message}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      {isSubmitted && (
        <Typography
          variant="h6"
          color="success.main"
          sx={{ mt: 2, textAlign: "center" }}
        >
          Thank you for contacting me!
        </Typography>
      )}
    </Box>
  );
};

export default ContactForm;
