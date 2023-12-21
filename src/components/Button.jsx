// import "./Button.css";
import PropTypes from "prop-types";
import styled from "styled-components";

//Proptypes of Button Component

const Button = ({
  text,
  padding,
  borderRadius,
  fontSize,
  border,
  backgroundColor,
  backgroundImage,
  color,
  letterSpacing,
}) => {
  return (
    <JSXButton
      style={{
        padding: `${padding}`,
        borderRadius: `${borderRadius}`,
        fontSize: `${fontSize}`,
        border: `${border}`,
        backgroundColor: `${backgroundColor}`,
        backgroundImage: `${backgroundImage}`,
        letterSpacing: `${letterSpacing}`,
      }}
    >
      {text}
    </JSXButton>
  );
};

const JSXButton = styled.button`
  cursor: pointer;
  font-weight: 200;
  color: white;
  &:hover {
  }
`;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
  borderRadius: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Button;
