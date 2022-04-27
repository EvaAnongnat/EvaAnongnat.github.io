import "./Footer.css";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className="foot-main-flex">
      <div className="foot-left-flex">
        <div className="foot-logo">
          <h2>WORKOUTIO</h2>
        </div>
        <div className="foot-details">
          <p> Alway free to use!</p>
          <h2>The activities tracker web app!</h2>
          <p>
            Let's go get excercise for your good health. use WORKOUTIO web app companion as your tracker now.
          </p>
        </div>
      </div>
      <div className="foot-right-flex">
        <div className="foot-right-column1">
          <ul className="foot-list">
            <li><a href="https://www.facebook.com/anongnat.meepim/">Facebook</a></li>
            <li><a href="https://github.com/EvaAnongnat">Github</a></li>
            <li><a href="mailto:eva.anongnat@gmail.com">Email me</a></li>
            <li><a href="tel:+66637960686">Mobile</a></li>
          </ul>
        </div>
        <div className="foot-right-column2">
          <ul className="foot-list">
          <Link to="/"><li>Profile</li></Link>
          <Link to="/"><li>Activity</li></Link>
          <Link to="/activity_list"><li>History</li></Link>
          <Link to="/"><li>Setting</li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer