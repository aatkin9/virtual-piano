/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../components/CustomDropdown/CustomDropdown.js";
import Button from "../components/CustomButtons/Button.js";

import styles from "../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://github.com/aatkin9/virtual-piano"
              target="_blank"
              className={classes.dropdownLink}
            >
              Github
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
      <Button
          href="https://github.com/kevinsqi/react-piano"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> React Piano
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Button
          href="https://demos.creative-tim.com/material-kit-react/#/documentation/tutorial"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Material Kit React
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Button
          href="https://www.digitalocean.com/"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Digital Ocean
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        
      </ListItem>
    </List>
  );
}
