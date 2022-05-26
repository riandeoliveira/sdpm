import { QuestionList } from "../../interfaces";

const questions: QuestionList = [
  {
    type: "input",
    name: "author",
    message: "Your name:",
  },
  {
    type: "input",
    name: "github_username",
    message: "Your GitHub username:",
  },
  {
    type: "input",
    name: "project_name",
    message: "Project name:",
  },
  {
    type: "select",
    name: "dev_side",
    message: "Select your side:",
    choices: [
      "🖥️   Front-End",
      "🗄️   Back-End",
      "📱  Mobile",
      "🛠️   Full-Stack",
    ],
  },
];

export default questions;
