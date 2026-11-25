import { FiArrowLeft } from "react-icons/fi";
import { usePageMeta } from "../../lib/usePageMeta";
import Button from "../../components/ui/Button";
import "./not-found.css";

export default function NotFoundPage() {
  usePageMeta({
    title: "Page not found",
    description: "The page you were looking for does not exist.",
    path: "/404",
  });

  return (
    <section className="section not-found">
      <div className="container container--narrow">
        <span className="eyebrow">404</span>
        <h1>We couldn&apos;t find that page.</h1>
        <p className="lead">The link may be out of date, or the page may have moved.</p>
        <Button to="/" icon={FiArrowLeft}>
          Back to home
        </Button>
      </div>
    </section>
  );
}
