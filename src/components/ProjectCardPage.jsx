import "./CSS_Files/ProjectCard.css";
import ProjectCardComponent from "./ProjectCardComponent";

const ProjectCardPage = () => {
  return (
    <>
      <div className="projectCardsDiv">
        <ProjectCardComponent
          projectHeading="ToDoList"
          aboutProject="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          hic animi. Sunt aliquam cupiditate quo."
        />
        <ProjectCardComponent
          projectHeading="Social Media"
          aboutProject="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          hic animi. Sunt aliquam cupiditate quo."
        />
      </div>
    </>
  );
};

export default ProjectCardPage;
