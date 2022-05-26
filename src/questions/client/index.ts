import { QuestionList } from "../../interfaces";

const questions: QuestionList = [
  {
    type: "select",
    name: "client_stack",
    message: "Select your client stack:",
    choices: ["🌐  HTML / CSS / JS", "⚛️   React"],
  },
];

export default questions;
