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
        break
      case 'React + TS':
        break
      default:
        break
    }
  },
}
