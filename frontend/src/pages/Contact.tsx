import FormContainer from "../components/layout/FormContainer";
import useForm from "../hooks/useForm";
import { useState } from "react";
import TextInput from "../components/ui-elements/TextInput";
import Textarea from "../components/ui-elements/Textarea";
import Button from "../components/ui-elements/Button";
import axios from "axios";
import { BACKEND_URL } from "../utils/api";
import ErrorMessage from "../components/ui-elements/ErrorMessage";

const Contact = () => {
  const { values, handleChange, setValues } = useForm({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const validateForm = () => {
    const errors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!values.name) {
      errors.name = "Name is required.";
      isValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid.";
      isValid = false;
    }

    if (!values.message || values.message.length < 20) {
      errors.message = "Message must be at least 20 characters long.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setFormErrors({ name: "", email: "", message: "" });
    setMessage(null);

    try {
      const response = await axios.post(`${BACKEND_URL}/api/contact`, values);
      console.log("Submitted:", response.data);
      setMessage({ text: "Message received!", type: "success" });
      setValues({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage({ text: "Error submitting form. Please try again.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit} className="space-y-4">
        {message && (
          <ErrorMessage message={message.text} type={message.type} />
        )}
        <TextInput
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Input your name"
          error={formErrors.name}
          onErrorClear={() =>
            setFormErrors((prev) => ({ ...prev, name: "" }))
          }
        />
        <TextInput
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Input your email"
          error={formErrors.email}
          onErrorClear={() =>
            setFormErrors((prev) => ({ ...prev, email: "" }))
          }
        />
        <Textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="Enter your message..."
          error={formErrors.message}
          onErrorClear={() =>
            setFormErrors((prev) => ({ ...prev, message: "" }))
          }
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </Button>
      </form>
    </FormContainer>
  );
};

export default Contact;
