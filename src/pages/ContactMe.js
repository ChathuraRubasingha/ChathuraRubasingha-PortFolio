import React, { useContext, useRef, useState, useEffect } from "react";
import "../style/ContactMe.css";
import { isDarkContext } from "../App";
import { Dark, Light } from "../Theme";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactMe() {
  const Theme = useContext(isDarkContext);
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_tel: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.user_name.trim()) {
      newErrors.user_name = "Name is required and cannot be a number";
    } else if (/\d/.test(formData.user_name)) {
      newErrors.user_name = "Name cannot contain numbers";
    }

    if (
      !formData.user_email.trim() ||
      !emailPattern.test(formData.user_email)
    ) {
      newErrors.user_email = "Valid email is required";
    }

    if (!formData.user_tel.trim() || !/^\d{10}$/.test(formData.user_tel)) {
      newErrors.user_tel = "Telephone number must be 10 digits";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (isSubmitted) {
      validateForm();
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    validateForm();
    if (isFormValid) {
      emailjs
        .sendForm("service_788dwnd", "template_w992ual", form.current, {
          publicKey: "G5NYbx0zzpGxFTvYX",
        })
        .then(
          () => {
            toast.success("Form submitted successfully!");
            form.current.reset();
            setFormData({
              user_name: "",
              user_email: "",
              user_tel: "",
              message: "",
            });
            setIsSubmitted(false);
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          },
          (error) => {
            toast.error(`Failed: ${error.text}`);
          }
        );
    } else {
      toast.error("Please correct the errors before submitting");
    }
  };

  return (
    <div
      className="contact-wrapper"
      style={
        Theme.isDark
          ? { backgroundColor: Dark.backgroundSecondary, color: Dark.color }
          : { backgroundColor: Light.backgroundSecondary, color: Light.color }
      }
    >
      <div className="contact-container">
        <div className="contact-header" style={{ color: Dark.foreground }}>
          Contact Me
        </div>
        <div className="form-wrapper">
          <form ref={form} onSubmit={sendEmail} className="form">
            <label>Your Name:</label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
              placeholder="Type your name here.."
            />
            {isSubmitted && errors.user_name && (
              <p className="error">{errors.user_name}</p>
            )}
            <label>Your Email:</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
              placeholder="Type your email here.."
            />
            {isSubmitted && errors.user_email && (
              <p className="error">{errors.user_email}</p>
            )}
            <label>Your Telephone:</label>
            <input
              type="text"
              name="user_tel"
              value={formData.user_tel}
              onChange={handleInputChange}
              placeholder="Type your telephone number here.."
            />
            {isSubmitted && errors.user_tel && (
              <p className="error">{errors.user_tel}</p>
            )}
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Type message here.."
            />
            {isSubmitted && errors.message && (
              <p className="error">{errors.message}</p>
            )}
            <button
              style={
                Theme.isDark ? { color: Dark.color,backgroundColor:Dark.foreground } : { color: Light.color,backgroundColor:Dark.foreground }
              }
              type="submit"
              className="submit-button"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ContactMe;
