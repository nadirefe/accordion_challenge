import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Accordion.css";
import AccordionActions from "@material-ui/core/AccordionActions";
q;
const QAs = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "40%",
    float: "right",
    marginRight: "120px",
    "& .MuiPaper-elevation1": {
      boxShadow: "none",
    },
  },
  QHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontFamily: "Kumbh Sans, sans-serif",
  },
  AHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightLight,
    color: "grey",
    fontFamily: "Kumbh Sans, sans-serif",
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderedAccordions = QAs.map((accordion, index) => {
    const { question, answer } = accordion;
    return (
      <Accordion
        expanded={expanded === `{panel${index}}`}
        onChange={handleChange(`{panel${index}}`)}
        className="accordion"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="accordion-icon" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              fontWeight: expanded === `{panel${index}}` ? "bold" : "lighter",
            }}
            className={classes.QHeading}
          >
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.AHeading}>{answer}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  });
  return <div className={classes.root}>{renderedAccordions}</div>;
}
