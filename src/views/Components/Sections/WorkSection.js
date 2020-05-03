import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contact the Developer</h2>
          <h4 className={classes.description}>
            This project was created for COSC 412 taught by Rebecca Broadwater
            at Towson University. Feel free to email the developer at aatkin9@students.towson.edu
            for any questions on this project.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
