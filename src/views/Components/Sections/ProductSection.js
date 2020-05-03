import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Straighten from "@material-ui/icons/Straighten";
import Language from "@material-ui/icons/Language";
import Cloud from "@material-ui/icons/CloudQueue";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>About this Project</h2>
          <h5 className={classes.description}>
            My virtual piano was built using Node.js and React. This project was 
            written in javascript. I have compiled sources from the following to 
            bring it all together. Sources for each can be found at the top of the page.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="React Piano"
              description="React Piano is the virtual piano used to play music given user input"
              icon={Straighten}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Material-ui-kit by Creative Tim"
              description="This website was created with the help of a web template"
              icon={Language}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Digital Ocean"
              description="Digital Ocean hosts this website through an easy and efficient process"
              icon={Cloud}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
