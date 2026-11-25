import { FiStar } from "react-icons/fi";

export default function Stars({ count = 5 }) {
  return (
    <span className="stars" aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: count }, (_, i) => (
        <FiStar key={i} aria-hidden="true" />
      ))}
    </span>
  );
}
