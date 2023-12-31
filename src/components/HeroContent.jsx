import Button from "./Button";
import "./CSS_Files/HeroContent.css";

const HeroContent = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-heading">
          <h1>
            Hi. <br /> I am Shivam Bharti <br />A Fullstack Developer
          </h1>
        </div>

        <div className="hero-button">
          <Button
            text="Download CV"
            padding="20px 75px"
            borderRadius="45px"
            backgroundColor="#e4b5cb"
            backgroundImage="linear-gradient(315deg, #e4b5cb 0%, #722ae6 74%)"
            fontSize="20px"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
