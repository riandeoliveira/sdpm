import { appendFileSync, readdir, writeFileSync } from "fs";
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

    process.chdir("./src/components");

    readdir(process.cwd(), (err, files) => {
      const sourceFileIndex = files.indexOf("index.ts");

      files.splice(sourceFileIndex, 1);

      files.map((file, i) => {
        if (file !== "index.spec.tsx") {
          if (i === 0) writeFileSync("index.ts", "");

          appendFileSync("index.ts", `import ${file} from "./${file}";\n`);
        }
      });

      appendFileSync("index.ts", `\nexport { ${files.join(", ")} };\n`);
    });
  },
};
