import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:shaahah.bscs21seecs@seecs.edu.pk">
        <Button>Contact: shaahah.bscs21seecs@seecs.edu.pk</Button>
      </a>
    </div>
  );
};

export default Contact;
