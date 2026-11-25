import { cld } from "../../lib/cloudinary";
import "./ProcessSteps.css";

export default function ProcessSteps({ steps }) {
  return (
    <ol role="list" className="process">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="process__step reveal"
          style={{ "--reveal-delay": `${index * 100}ms` }}
        >
          <div className="process__media">
            <img
              src={cld(step.image, { width: 720 })}
              alt=""
              loading="lazy"
              decoding="async"
              width="720"
              height="480"
            />
            <span className="process__number">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="process__body">
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
            {step.note ? <p className="process__note">{step.note}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
