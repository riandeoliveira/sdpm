import { GluegunToolbox, prompt } from "gluegun";
import question from "../questions/create/question.json";

export = {
  name: "create",
  description: "Create a React component",

  run: async ({ template: { generate } }: GluegunToolbox) => {
    const { component_name } = await prompt.ask(question);

    await generate({
      template: "create/component_tsx/component.ejs",
      target: `src/components/${component_name}/index.tsx`,
      props: { component_name },
    });

    await generate({
      template: "create/component_tsx/styles.ejs",
      target: `src/components/${component_name}/styles.module.scss`,
    });
  },
};
