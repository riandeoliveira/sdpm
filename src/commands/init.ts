import { GluegunToolbox, prompt } from 'gluegun'
import questions from '../questions'

export = {
  name: 'init',
  description: 'Start a new project',

  run: async ({ template: { generate } }: GluegunToolbox) => {
    const result = await prompt.ask(questions)

    const { username, technologies, github_username, project_name } = result

    const lowerProjectName = project_name.toLowerCase().split(' ').join('-')
    const currentYear = new Date().getFullYear()

    switch (technologies) {
      case 'HTML / CSS / JS':
        await generate({
          template: 'vanilla/.github/.gitkeep.ejs',
          target: `${lowerProjectName}/.github/.gitkeep`,
        })

        await generate({
          template: 'vanilla/assets/css/styles.css.ejs',
          target: `${lowerProjectName}/assets/css/styles.css`,
        })

        await generate({
          template: 'vanilla/assets/fonts/.gitkeep.ejs',
          target: `${lowerProjectName}/assets/fonts/.gitkeep`,
        })

        await generate({
          template: 'vanilla/assets/icons/.gitkeep.ejs',
          target: `${lowerProjectName}/assets/icons/.gitkeep`,
        })

        await generate({
          template: 'vanilla/assets/images/.gitkeep.ejs',
          target: `${lowerProjectName}/assets/images/.gitkeep`,
        })

        await generate({
          template: 'vanilla/assets/js/script.js.ejs',
          target: `${lowerProjectName}/assets/js/script.js`,
        })

        await generate({
          template: 'vanilla/assets/videos/.gitkeep.ejs',
          target: `${lowerProjectName}/assets/videos/.gitkeep`,
        })

        await generate({
          template: 'vanilla/.gitignore.ejs',
          target: `${lowerProjectName}/.gitignore`,
        })

        await generate({
          template: 'vanilla/index.html.ejs',
          target: `${lowerProjectName}/index.html`,
          props: { project_name },
        })

        await generate({
          template: 'vanilla/LICENSE.ejs',
          target: `${lowerProjectName}/LICENSE`,
          props: { currentYear, username },
        })

        await generate({
          template: 'vanilla/README.md.ejs',
          target: `${lowerProjectName}/README.md`,
          props: { project_name, github_username, username },
        })

        await generate({
          template: 'vanilla/TODO.md.ejs',
          target: `${lowerProjectName}/TODO.md`,
        })

        break
      case 'React':
        await generate({
          template: 'react-js/.github/.gitkeep.ejs',
          target: `${lowerProjectName}/.github/.gitkeep`,
        })

        await generate({
          template: 'react-js/src/assets/icons/.gitkeep.ejs',
          target: `${lowerProjectName}/src/assets/icons/.gitkeep`,
        })

        await generate({
          template: 'react-js/src/assets/images/.gitkeep.ejs',
          target: `${lowerProjectName}/src/assets/images/.gitkeep`,
        })

        await generate({
          template: 'react-js/src/assets/videos/.gitkeep.ejs',
          target: `${lowerProjectName}/src/assets/videos/.gitkeep`,
        })

        await generate({
          template: 'react-js/src/assets/index.js.ejs',
          target: `${lowerProjectName}/src/assets/index.js`,
        })

        await generate({
          template: 'react-js/src/components/.gitkeep.ejs',
          target: `${lowerProjectName}/src/components/.gitkeep`,
        })

        await generate({
          template: 'react-js/src/pages/.gitkeep.ejs',
          target: `${lowerProjectName}/src/pages/.gitkeep`,
        })

        await generate({
          template: 'react-js/src/services/api.js.ejs',
          target: `${lowerProjectName}/src/services/api.js`,
        })

        await generate({
          template: 'react-js/src/themes/colors/index.js.ejs',
          target: `${lowerProjectName}/src/themes/colors/index.js`,
        })

        await generate({
          template: 'react-js/src/themes/fonts/index.js.ejs',
          target: `${lowerProjectName}/src/themes/fonts/index.js`,
        })

        await generate({
          template: 'react-js/src/App.jsx.ejs',
          target: `${lowerProjectName}/src/App.jsx`,
        })

        await generate({
          template: 'react-js/src/index.js.ejs',
          target: `${lowerProjectName}/src/index.js`,
        })

        await generate({
          template: 'react-js/src/main.jsx.ejs',
          target: `${lowerProjectName}/src/main.jsx`,
        })

        await generate({
          template: 'react-js/.ejs',
          target: `${lowerProjectName}/.env`,
        })

        await generate({
          template: 'react-js/.gitignore.ejs',
          target: `${lowerProjectName}/.gitignore`,
        })

        await generate({
          template: 'react-js/index.html.ejs',
          target: `${lowerProjectName}/index.html`,
          props: { project_name },
        })

        await generate({
          template: 'react-js/LICENSE.ejs',
          target: `${lowerProjectName}/LICENSE`,
          props: { currentYear, username },
        })

        await generate({
          template: 'react-js/package.json.ejs',
          target: `${lowerProjectName}/package.json`,
          props: { lowerProjectName },
        })

        await generate({
          template: 'react-js/README.md.ejs',
          target: `${lowerProjectName}/README.md`,
          props: { project_name, github_username, username },
        })

        await generate({
          template: 'react-js/TODO.md.ejs',
          target: `${lowerProjectName}/TODO.md`,
        })

        await generate({
          template: 'react-js/vite.config.js.ejs',
          target: `${lowerProjectName}/vite.config.js`,
        })

        break
      case 'React / TS':
        await generate({
          template: 'react-ts/.github/.gitkeep.ejs',
          target: `${lowerProjectName}/.github/.gitkeep`,
        })

        await generate({
          template: 'react-ts/src/assets/icons/.gitkeep.ejs',
          target: `${lowerProjectName}/src/assets/icons/.gitkeep`,
        })

        await generate({
          template: 'react-ts/src/assets/images/.gitkeep.ejs',
          target: `${lowerProjectName}/src/assets/images/.gitkeep`,
        })

        await generate({
          template: 'react-ts/src/assets/videos/.gitkeep.ejs',
          target: `${lowerProjectName}/src/assets/videos/.gitkeep`,
        })

        await generate({
          template: 'react-ts/src/assets/index.ts.ejs',
          target: `${lowerProjectName}/src/assets/index.ts`,
        })

        await generate({
          template: 'react-ts/src/components/.gitkeep.ejs',
          target: `${lowerProjectName}/src/components/.gitkeep`,
        })

        await generate({
          template: 'react-ts/src/interfaces/index.ts.ejs',
          target: `${lowerProjectName}/src/interfaces/index.ts`,
        })

        await generate({
          template: 'react-ts/src/pages/.gitkeep.ejs',
          target: `${lowerProjectName}/src/pages/.gitkeep`,
        })

        await generate({
          template: 'react-ts/src/services/api.ts.ejs',
          target: `${lowerProjectName}/src/services/api.ts`,
        })

        await generate({
          template: 'react-ts/src/themes/colors/index.ts.ejs',
          target: `${lowerProjectName}/src/themes/colors/index.ts`,
        })

        await generate({
          template: 'react-ts/src/themes/fonts/index.ts.ejs',
          target: `${lowerProjectName}/src/themes/fonts/index.ts`,
        })

        await generate({
          template: 'react-ts/src/types/.gitkeep.ejs',
          target: `${lowerProjectName}/src/types/.gitkeep`,
        })

        await generate({
          template: 'react-ts/src/App.tsx.ejs',
          target: `${lowerProjectName}/src/App.tsx`,
        })

        await generate({
          template: 'react-ts/src/index.ts.ejs',
          target: `${lowerProjectName}/src/index.ts`,
        })

        await generate({
          template: 'react-ts/src/main.tsx.ejs',
          target: `${lowerProjectName}/src/main.tsx`,
        })

        await generate({
          template: 'react-ts/src/vite-env.d.ts.ejs',
          target: `${lowerProjectName}/src/vite-env.d.ts`,
        })

        await generate({
          template: 'react-ts/.env.ejs',
          target: `${lowerProjectName}/.env`,
        })

        await generate({
          template: 'react-ts/.gitignore.ejs',
          target: `${lowerProjectName}/.gitignore`,
        })

        await generate({
          template: 'react-ts/index.html.ejs',
          target: `${lowerProjectName}/index.html`,
          props: { project_name },
        })

        await generate({
          template: 'react-ts/LICENSE.ejs',
          target: `${lowerProjectName}/LICENSE`,
          props: { currentYear, username },
        })

        await generate({
          template: 'react-ts/package.json.ejs',
          target: `${lowerProjectName}/package.json`,
          props: { lowerProjectName },
        })

        await generate({
          template: 'react-ts/README.md.ejs',
          target: `${lowerProjectName}/README.md`,
          props: { project_name, github_username, username },
        })

        await generate({
          template: 'react-ts/TODO.md.ejs',
          target: `${lowerProjectName}/TODO.md`,
        })

        await generate({
          template: 'react-ts/tsconfig.json.ejs',
          target: `${lowerProjectName}/tsconfig.json`,
        })

        await generate({
          template: 'react-ts/tsconfig.node.json.ejs',
          target: `${lowerProjectName}/tsconfig.node.json`,
        })

        await generate({
          template: 'react-ts/vite.config.ts.ejs',
          target: `${lowerProjectName}/vite.config.ts`,
        })

        break
      default:
        break
    }
  },
}
