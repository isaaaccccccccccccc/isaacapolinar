import { education } from "../data";

const Education = () => (
  <div>
    <h3>Education</h3>
    <ul className="tl">
      {education.map((e) => (
        <li key={e.title}>
          <time>{e.when}</time>
          <b>{e.title}</b>
          <span>{e.school}</span>
          <span className="honor">{e.honor}</span>
          <span>{e.text}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Education;
