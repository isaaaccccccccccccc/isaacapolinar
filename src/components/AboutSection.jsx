import about from "../assets/optimized/aboutt.webp";

const AboutSection = () => (
  <div className="about reveal">
    <div className="pic">
      <img src={about} alt="Isaac Apolinar" width="761" height="1024" loading="lazy" />
    </div>
    <div className="txt">
      <span className="eyebrow">More about me</span>
      <h2>Technology is the tool. Helping people is the point.</h2>
      <p>
        I am an IT graduate with a specialization in Network Administration and a passion for technology-driven
        solutions.
      </p>
      <p>
        As a freelance web developer and virtual assistant, I help businesses improve their online presence, streamline
        operations, and achieve their goals through reliable technical and administrative support. Outside of
        technology, I am also a musician who values creativity, discipline, and continuous learning.
      </p>
      <p>
        Technology has been a big part of my journey, but what motivates me most is the opportunity to help people and
        businesses solve problems. I enjoy building websites, learning new skills, and finding better ways to get things
        done. I value growth, reliability, and continuous improvement, and I try to bring those qualities into every
        project I work on.
      </p>
    </div>
  </div>
);

export default AboutSection;
