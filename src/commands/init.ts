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
          template: 'vanilla/.github/.gitkeep',
          target: `${lowerProjectName}/.github/.gitkeep`,
        })

        await generate({
          template: 'vanilla/assets/css/styles.css.ejs',
          target: `${lowerProjectName}/assets/css/styles.css`,
        })

        await generate({
          template: 'vanilla/assets/fonts/.gitkeep',
          target: `${lowerProjectName}/assets/fonts/.gitkeep`,
        })

        await generate({
          template: 'vanilla/assets/icons/.gitkeep',
          target: `${lowerProjectName}/assets/icons/.gitkeep`,
        })

        await generate({
          template: 'vanilla/assets/images/.gitkeep',
          target: `${lowerProjectName}/assets/images/.gitkeep`,
        })

        await generate({
          template: 'vanilla/assets/js/script.js.ejs',
          target: `${lowerProjectName}/assets/js/script.js`,
        })

        await generate({
          template: 'vanilla/assets/videos/.gitkeep',
          target: `${lowerProjectName}/assets/videos/.gitkeep`,
        })

        await generate({
          template: 'vanilla/.gitignore',
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
          template: 'react-js/.github/.gitkeep',
          target: `${lowerProjectName}/.github/.gitkeep`,
        })

        await generate({
          template: 'react-js/src/assets/icons/.gitkeep',
          target: `${lowerProjectName}/src/icons/.gitkeep`,
        })

        await generate({
          template: 'react-js/src/assets/images/.gitkeep',
          target: `${lowerProjectName}/src/assets/images/.gitkeep`,
        })

        await generate({
          template: 'react-js/src/assets/videos/.gitkeep',
          target: `${lowerProjectName}/src/assets/videos/.gitkeep`,
        })

        await generate({
          template: 'react-js/src/assets/index.js.ejs',
          target: `${lowerProjectName}/src/assets/index.js`,
        })

        await generate({
          template: 'react-js/src/components/.gitkeep',
          target: `${lowerProjectName}/src/components/.gitkeep`,
        })

        await generate({
          template: 'react-js/src/pages/.gitkeep',
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
          template: 'react-js/.env',
          target: `${lowerProjectName}/.env`,
        })

        await generate({
          template: 'react-js/.gitignore',
          target: `${lowerProjectName}/.gitignore`,
        })

        await generate({
          template: 'react-js/index.html.ejs',
          target: `${lowerProjectName}/.index.html`,
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
      case 'React + TS':
        break
      default:
        break
    }
  },
}
