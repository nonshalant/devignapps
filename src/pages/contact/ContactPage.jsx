import { usePageMeta } from "../../lib/usePageMeta";
import { useReveal } from "../../lib/useReveal";
import PageHero from "../../components/ui/PageHero";
import ContactSection from "../../components/sections/ContactSection";

export default function ContactPage() {
  usePageMeta({
    title: "Contact",
    description:
      "Book a free consultation with Devign Apps. Tell us about your website or app project and we'll get back to you within one business day.",
    path: "/contact",
  });
  useReveal();

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        eyebrow="Contact"
        title="Let's talk about your project."
        lead="Book a complimentary consultation. We'll listen to your goals and map out the fastest path to launch."
      />
      <ContactSection title="Tell us what you're building." eyebrow="Free consultation" />
    </>
  );
}
