import { GluegunToolbox, prompt } from "gluegun";

export = {
  name: "create",
  description: "Create a React component",

  run: async ({ template: { generate } }: GluegunToolbox) => {
    const result = await prompt.ask([
      {
        type: "input",
        name: "component_name",
        message: "Component name:",
      },
    ]);

    const { component_name } = result;

    await generate({
      template: "create/component.ejs",
      target: `src/components/${component_name}/index.tsx`,
      props: { component_name },
    });

    await generate({
      template: "create/styles.ejs",
      target: `src/components/${component_name}/styles.module.scss`,
    });
  },
};
