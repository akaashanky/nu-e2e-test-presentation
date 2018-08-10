// Import React
import React from "react";
import logo from "../assets/nulogo.svg";
import puppeteer from "../assets/puppeteer.png";
import nightwatch from "../assets/nightwatch.png";
import cypress from "../assets/cypress.png";
import seleniumarch from "../assets/seleniumarch.png";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Image,
  Typeface
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#26c3ed",
  tertiary: "#000",
  quarternary: "#CECECE"
}, {
  primary: {
    name: "Lato",
    googleFont: true,
    styles: ["400","900"]
  },
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide>
          <Image src={logo} height="200"/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Better E2E Tests
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
            ...and less fish curry!
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Current Setup</Heading>
          <List textColor="tertiary">
            <ListItem>Java + Selenium</ListItem>
            <ListItem>Page Object Model based</ListItem>
            <ListItem>Mature</ListItem>
            <ListItem>Widely used</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Issues faced</Heading>
          <List textColor="tertiary">
            <ListItem>Flaky (due to architectural issues)</ListItem>
            <ListItem>Requires training</ListItem>
            <ListItem>Java isn't *our* dev stack</ListItem>
            <ListItem>Difficult to setup</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={2} textColor="primary" caps>Alternatives</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={puppeteer} height="200" />
          <List textColor="tertiary" textSize="1.5em">
            <ListItem>Node.js library for Chrome</ListItem>
            <ListItem>General-purpose browser automation</ListItem>
            <ListItem>For UI testing needs other add-ons</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={nightwatch} height="200" />
          <Typeface googleFont="Source Sans Pro" weight={300}>
            <Text>Nightwatch.js</Text>
          </Typeface>
          <List textColor="tertiary" textSize="1.5em">
            <ListItem>Node.js library for UI testing</ListItem>
            <ListItem>Uses the same protocol as Selenium</ListItem>
            <ListItem>Same flakiness as other Selenium frameworks</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={cypress} height="150" />
          <List textColor="tertiary" textSize="1.5em">
            <ListItem>Node.js library for UI testing</ListItem>
            <ListItem>All-in-one UI testing framework</ListItem>
            <ListItem>Has its own API</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={2} textColor="primary" caps>Walkthrough</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={2} textColor="primary" caps>Initial Impressions</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>The Good</Heading>
          <List textColor="tertiary">
            <ListItem>Easy to setup</ListItem>
            <ListItem>Can access anything the frontend can access</ListItem>
            <ListItem>Selector playground, test recording, reports</ListItem>
            <ListItem>Plain old javascript</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>The Bad</Heading>
          <List textColor="tertiary">
            <ListItem>QA team will need to learn JS (Devs will help)</ListItem>
            <ListItem>For now, only Chrome support</ListItem>
            <ListItem>Playground suggestions don't always work</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={2} textColor="primary" caps>Looking Forward</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Next Steps</Heading>
          <List textColor="tertiary">
            <ListItem>More involvement from Devs</ListItem>
            <ListItem>Start adding data-testid everywhere!!!</ListItem>
            <ListItem>Start using in regression testing</ListItem>
            <ListItem>Whitebox tests</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={2} textColor="primary" caps>References</Heading>
        </Slide>
        <Slide>
          <Image src={seleniumarch} height="400" />
        </Slide>
      </Deck>
    );
  }
}
