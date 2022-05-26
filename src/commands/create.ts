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
      {
        type: "select",
        name: "extensions",
        message: "Select your component extension:",
        choices: ["JSX", "TSX"],
      },
    ]);

    const { extensions, component_name } = result;

    switch (extensions) {
      case "JSX":
        await generate({
          template: "components/jsx/index.jsx.ejs",
          target: `src/components/${component_name}/index.jsx`,
          props: { component_name },
        });

        await generate({
          template: "components/jsx/styles.js.ejs",
          target: `src/components/${component_name}/styles.js`,
          props: { component_name },
        });

        break;
      case "TSX":
        await generate({
          template: "components/tsx/index.tsx.ejs",
          target: `src/components/${component_name}/index.tsx`,
          props: { component_name },
        });

        await generate({
          template: "components/tsx/styles.ts.ejs",
          target: `src/components/${component_name}/styles.ts`,
          props: { component_name },
        });

        break;
      default:
        break;
    }
  },
};
