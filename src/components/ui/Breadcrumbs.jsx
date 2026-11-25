import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import "./Breadcrumbs.css";

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol role="list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label}>
              {isLast || !item.to ? (
                <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
              ) : (
                <Link to={item.to}>{item.label}</Link>
              )}
              {!isLast && <FiChevronRight aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
