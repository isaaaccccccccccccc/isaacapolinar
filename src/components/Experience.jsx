import { experience } from "../data";

const Experience = () => (
  <div>
    <h3>Work experience</h3>
    <ul className="tl">
      {experience.map((job) => (
        <li key={job.role + job.when}>
          <time>{job.when}</time>
          <b>{job.role}</b>
          <span>{job.where}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Experience;
