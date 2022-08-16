import React from "react";

import Card from "../UI/UX/Card";

import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.container}>
      <Card>
        <h2>About this project</h2>
        <div className={classes.content}>
          This Project was built in order to practice the knowlange i've gaind
          after completing a Udemy course called "React The Complete Guide. In
          this project i have implemented and praciced the following : using
          React library, using useState hook and managing state, using Props and
          forwarding information though props. I have also praciced receiving an
          input from the user, using useRef, and then sending that informating
          to an API with 'POST' request.
        </div>
      </Card>
    </div>
  );
};

export default About;
