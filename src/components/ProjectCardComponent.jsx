import todolist from "../assets/todolist.png";

const ProjectCardComponent = ({ projectHeading, aboutProject }) => {
  return (
    <div className="projectCard">
      <div className="projectImage">
        <img src={todolist} alt="" />
      </div>
      <div className="projectDescription">
        <h2 style={{ fontSize: "30px" }}>{projectHeading}</h2>
        <p style={{ fontWeight: "200" }}>{aboutProject}</p>
        <a href="">Click to View</a>
      </div>
    </div>
  );
};

export default ProjectCardComponent;
