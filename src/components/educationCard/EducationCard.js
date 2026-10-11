import React, {createRef, useContext, useEffect, useRef, useState} from "react";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({school, index}) {
  const imgRef = createRef();
  const rowRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const {isDark} = useContext(StyleContext);
  const isCpge = school.schoolName.includes("CPGE");
  const visualClass = school.logo
    ? "education-logo"
    : isCpge
      ? "education-badge education-badge-cpge"
      : "education-badge education-badge-degree";

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };

  useEffect(() => {
    if (!rowRef.current || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {threshold: 0.15}
    );

    observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      className={`education-card-row${isVisible ? " education-card-row-visible" : ""}`}
      style={{"--education-delay": `${index * 120}ms`}}
    >
      <div className="education-card">
        <div className="education-card-left">
          {school.logo ? (
            <img
              crossOrigin="anonymous"
              ref={imgRef}
              className="education-roundedimg"
              src={school.logo}
              alt={school.schoolName}
            />
          ) : (
            <div className={visualClass} aria-hidden="true">
              {isCpge ? "CPGE" : <span className="education-cap" />}
            </div>
          )}
        </div>

        <div className="education-card-right">
          <h5 className="education-text-school">{school.schoolName}</h5>
          <div className="education-text-details">
            <h5
              className={
                isDark
                  ? "dark-mode education-text-subHeader"
                  : "education-text-subHeader"
              }
            >
              {school.subHeader}
            </h5>
            <p
              className={`${isDark ? "dark-mode" : ""} education-text-duration`}
            >
              {school.duration}
            </p>
            <p className="education-text-desc">{school.desc}</p>
            <div className="education-text-bullets">
              <ul>
                <GetDescBullets descBullets={school.descBullets} />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="education-card-border"></div>
    </div>
  );
}
