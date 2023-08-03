import "./about.css";
import bookAbout from "../bookAbout.png";

function About() {
  return (
    <div className="about-container">
      <div>
        <img src={bookAbout} alt="" id="about-img" />
      </div>
      <div className="about-text">
        <h1 className="about-h1">About Us</h1>
        <p className="about-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae aperiam exercitationem consequuntur, culpa voluptates aspernatur. Reiciendis ut tenetur quisquam placeat dolores mollitia! Repudiandae, at veniam doloribus aliquid non sed molestiae!</p>
        <button className="about-btn">Know More</button>
      </div>
    </div>
  );
}

export default About;
