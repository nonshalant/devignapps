import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { emailJs } from "../../config/site";
import Button from "../ui/Button";
import "./ContactForm.css";

const initialState = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phoneNumber: "",
  hearAboutUs: "",
  description: "",
};

/**
 * Contact form backed by EmailJS. Field names are kept identical to the
 * EmailJS template so the existing template keeps working.
 */
export default function ContactForm({ title = "Let's begin your journey." }) {
  const formRef = useRef(null);
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    // Honeypot: real users never fill this in.
    if (formRef.current.website.value) return;

    setStatus({ state: "sending", message: "" });
    try {
      await emailjs.sendForm(emailJs.serviceId, emailJs.templateId, formRef.current, {
        publicKey: emailJs.publicKey,
      });
      setValues(initialState);
      setStatus({
        state: "success",
        message:
          "Thanks! Your message is on its way. Someone from Devign Apps will be in touch shortly.",
      });
    } catch (error) {
      console.error("Contact form failed", error);
      setStatus({
        state: "error",
        message: "Something went wrong sending your message. Please try again or call us directly.",
      });
    }
  };

  const sending = status.state === "sending";

  return (
    <form ref={formRef} className="contact-form" onSubmit={onSubmit} noValidate={false}>
      <h2>{title}</h2>
      <p className="contact-form__intro">
        Tell us a little about your project and we&apos;ll get back to you within one business day.
      </p>

      <div className="contact-form__grid">
        <label>
          <span>First name</span>
          <input
            required
            type="text"
            name="firstName"
            autoComplete="given-name"
            value={values.firstName}
            onChange={onChange}
          />
        </label>
        <label>
          <span>Last name</span>
          <input
            required
            type="text"
            name="lastName"
            autoComplete="family-name"
            value={values.lastName}
            onChange={onChange}
          />
        </label>
        <label>
          <span>Company</span>
          <input
            required
            type="text"
            name="company"
            autoComplete="organization"
            value={values.company}
            onChange={onChange}
          />
        </label>
        <label>
          <span>Email address</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label>
          <span>Phone number</span>
          <input
            required
            type="tel"
            name="phoneNumber"
            autoComplete="tel"
            inputMode="tel"
            value={values.phoneNumber}
            onChange={onChange}
          />
        </label>
        <label>
          <span>How did you hear about us?</span>
          <input
            required
            type="text"
            name="hearAboutUs"
            value={values.hearAboutUs}
            onChange={onChange}
          />
        </label>
        <label className="contact-form__full">
          <span>
            Tell us about your project <small>(optional)</small>
          </span>
          <textarea
            name="description"
            rows="4"
            placeholder="E-commerce website, booking site, portfolio, mobile app..."
            value={values.description}
            onChange={onChange}
          />
        </label>
        {/* Honeypot field, hidden from people but visible to bots. */}
        <label className="contact-form__hp" aria-hidden="true">
          Website
          <input type="text" name="website" tabIndex="-1" autoComplete="off" />
        </label>
      </div>

      <div className="contact-form__footer">
        <Button type="submit" size="lg" icon={FiSend} disabled={sending}>
          {sending ? "Sending..." : "Send message"}
        </Button>
        <p role="status" aria-live="polite" className={`contact-form__status is-${status.state}`}>
          {status.state === "success" && <FiCheckCircle aria-hidden="true" />}
          {status.state === "error" && <FiAlertCircle aria-hidden="true" />}
          {status.message}
        </p>
      </div>
    </form>
  );
}
