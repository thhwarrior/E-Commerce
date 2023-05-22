import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png"
              alt="Founder"
            />
            <Typography>Hamza, Zaeem, Rayyan</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>This is still a work in progress. Created by BSCS-21 C</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Connect with us</Typography>
            <a href="#" target="blank">
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="#" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
