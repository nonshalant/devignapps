import { testimonials } from "../../data/testimonials";
import Stars from "../ui/Stars";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="section section--muted" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-heading section-heading--center reveal">
          <span className="eyebrow">Client reviews</span>
          <h2 id="testimonials-title">Trusted by founders and growing brands</h2>
          <p>Here is what a few of our clients have to say about working with us.</p>
        </div>
        <ul role="list" className="testimonials">
          {testimonials.map((item, index) => (
            <li
              key={item.id}
              className="testimonial reveal"
              style={{ "--reveal-delay": `${index * 80}ms` }}
            >
              <Stars count={item.rating} />
              <blockquote>
                <p>&ldquo;{item.quote}&rdquo;</p>
              </blockquote>
              <footer>
                <span className="testimonial__avatar" aria-hidden="true">
                  {item.author.charAt(0)}
                </span>
                <div>
                  <cite>{item.author}</cite>
                  <span>{item.role}</span>
                </div>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
