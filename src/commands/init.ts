import { GluegunToolbox, print, prompt } from "gluegun";
import paths from "../paths/init/nextjs_ts.json";
import questions from "../questions/init/questions.json";

export = {
  name: "init",
  description: "Start a new project",

  run: async ({ template: { generate } }: GluegunToolbox) => {
    const answers = await prompt.ask(questions);

    const lowerCaseProjectName = answers.project_name
      .toLowerCase()
      .split(" ")
      .join("-");

    const currentYear = new Date().getFullYear();

    paths.map(async (path) => {
      await generate({
        template: path.template,
        target: `${lowerCaseProjectName}/${path.target}`,
        props: { ...answers, lowerCaseProjectName, currentYear },
      });
    });

    print.success("\nProject created successfully");
  },
};
