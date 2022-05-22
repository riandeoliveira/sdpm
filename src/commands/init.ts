import { GluegunToolbox, prompt } from 'gluegun'
import questions from '../questions'

export = {
  name: 'init',
  description: 'Start a new project',

  run: async ({ template: { generate } }: GluegunToolbox) => {
    const result = await prompt.ask(questions)

    const { username, technologies, github_username, project_name } = result

    const lowerProjectName = project_name.toLowerCase().split(' ').join('-')
    // const currentYear = new Date().getFullYear()

    switch (technologies) {
      case 'HTML / CSS / JS':
        await generate({
          template: 'README.md.ejs',
          target: `${lowerProjectName}/README.md`,
          props: { project_name, technologies, github_username, username },
        })

        await generate({
          template: 'index.html.ejs',
          target: `${lowerProjectName}/index.html`,
          props: { project_name, technologies },
        })

        break
      case 'React':
        await generate({
          template: 'README.md.ejs',
          target: `${lowerProjectName}/README.md`,
          props: { project_name, technologies, github_username, username },
        })

        break
      case 'React + TS':
        await generate({
          template: 'README.md.ejs',
          target: `${lowerProjectName}/README.md`,
          props: { project_name, technologies, github_username, username },
        })

        break
      default:
        break
    }
  },
}
