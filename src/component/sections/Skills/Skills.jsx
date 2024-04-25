import "./Skills.css";
import skills from "../../../Data/skillsData.json";
import MainTitle from "../../MainTitle/MainTitle";
import SkillProgress from "../../SkillProgress/SkillProgress";

const Skills = () => {
  return (
    <div className="skill">
      <div className="container">
        <div className="head d-flex justify-content-between align-items-center mb-5">
          <div className="mx-auto mx-lg-0">
            <MainTitle title="SKILL" className="mx-lg-0" />
            <h3 className="mt-3 fw-bold">My Expertise</h3>
          </div>
          <button className="btn btn-primary px-4 py-3 fs-5 d-none d-md-bloce">
            Hire Me
          </button>
        </div>
        <div className="row">
          {skills.skills.map((skill) => (
            <SkillProgress
              key={skill.id}
              name={skill.skillName}
              rate={skill.rate}
              tools={skill.tools}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
