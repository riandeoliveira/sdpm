import { GluegunToolbox, prompt } from "gluegun";
import * as questions from "../questions";
import { PathList } from "../interfaces";
import * as path from "../paths";

export = {
  name: "init",
  description: "Start a new project",

  run: async ({ template: { generate } }: GluegunToolbox) => {
    const mainQuestionsProps = await prompt.ask(questions.main);

    const lowerProjectName = mainQuestionsProps.project_name
      .toLowerCase()
      .split(" ")
      .join("-");

    const currentYear = new Date().getFullYear();

    const createProjectByPath = (path: PathList): void => {
      path.map(async (item) => {
        await generate({
          template: item.template,
          target: lowerProjectName + item.target,
          props: { ...mainQuestionsProps, lowerProjectName, currentYear },
        });
      });
    };

    const askByTypeScript = async (): Promise<boolean> => {
      const { ts_option } = await prompt.ask(questions.typescript);

      switch (ts_option) {
        case "✅  Yes":
          return true;
        case "❌  No":
          return false;
        default:
          break;
      }
    };

    switch (mainQuestionsProps.dev_side) {
      case "🖥️   Front-End":
        const { client_stack } = await prompt.ask(questions.client);

        switch (client_stack) {
          case "🌐  HTML / CSS / JS":
            createProjectByPath(path.vanilla);

            break;
          case "⚛️   React":
            (await askByTypeScript())
              ? createProjectByPath(path.reactjs_ts)
              : createProjectByPath(path.reactjs);

            break;
          default:
            break;
        }

        break;
      case "🗄️   Back-End":
        const { server_stack } = await prompt.ask(questions.server);

        switch (server_stack) {
          case "⚙️   Node.js":

          default:
            break;
        }

        break;
      case "📱  Mobile":
        const { mobile_stack } = await prompt.ask(questions.mobile);

        switch (mobile_stack) {
          case "⚛️ React Native":
            break;
          default:
            break;
        }

        break;
      case "🛠️   Full-Stack":
        const { stack } = await prompt.ask(questions.fullstack);

        switch (stack) {
          case "⚛️   MERN Stack":
            break;
          case "🅰️   MEAN Stack":
            break;
          case "❇️   MEVN Stack":
            break;
          default:
            break;
        }

        break;
      default:
        break;
    }
  },
};
