import FormContainer from "../components/FormContainer";
import useForm from "../hooks/useForm";
import { useState } from "react";
import TextInput from "../components/TextInput";
import ErrorMessage from "../components/ErrorMessage";
import Textarea from "../components/Textarea";
import Button from "../components/Button";
import axios from "axios";
import { BACKEND_URL } from "../utils/api";

const Contact = () => {
  const { values, handleChange, setValues } = useForm({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const validateForm = () => {
    if (!values.name || !values.email || !values.message) {
      setErrors({ message: "All fields are required.", type: "error" });
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(values.email)) {
      setErrors({ message: "Email is invalid.", type: "error" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setErrors(null);
    try {
      const response = await axios.post(`${BACKEND_URL}/api/contact`, values);
      console.log("Submitted:", response.data);
      setErrors({ message: "Message received!", type: "success" });
      setValues({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({
        message: "Error submitting form. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit} className="space-y-4">
        {errors && <ErrorMessage message={errors.message} type={errors.type} />}
        <TextInput
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Input your name"
        />
        <TextInput
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Input your email"
        />
        <Textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="Enter your message..."
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </Button>
      </form>
    </FormContainer>
  );
};

export default Contact;
