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

    // if (technologies === 'HTML / CSS / JS') {
    //   await generate({
    //     template: 'vanilla/index.ejs',
    //     target: `${lowerProjectName}/index.html`,
    //     props: { project_name },
    //   })

    //   await generate({
    //     template: 'vanilla/styles.css',
    //     target: `${project_name
    //       .toLowerCase()
    //       .split(' ')
    //       .join('-')}/assets/css/styles.css`,
    //   })

    //   await generate({
    //     template: 'vanilla/script.js',
    //     target: `${project_name
    //       .toLowerCase()
    //       .split(' ')
    //       .join('-')}/assets/js/script.js`,
    //   })

    //   await generate({
    //     template: 'vanilla/README.ejs',
    //     target: `${lowerProjectName}/README.md`,
    //     props: { project_name, username, github_username },
    //   })

    //   await generate({
    //     template: 'LICENSE.ejs',
    //     target: `${lowerProjectName}/LICENSE`,
    //     props: { username, currentYear },
    //   })

    //   await generate({
    //     template: '.github/.gitkeep',
    //     target: `${project_name
    //       .toLowerCase()
    //       .split(' ')
    //       .join('-')}/.github/.gitkeep`,
    //   })

    //   await generate({
    //     template: 'TODO.md',
    //     target: `${lowerProjectName}/TODO.md`,
    //   })

    //   await generate({
    //     template: 'vanilla/.gitignore',
    //     target: `${lowerProjectName}/.gitignore`,
    //   })

    //   await generate({
    //     template: 'vanilla/images/.gitkeep',
    //     target: `${project_name
    //       .toLowerCase()
    //       .split(' ')
    //       .join('-')}/assets/images/.gitkeep`,
    //   })

    //   await generate({
    //     template: 'vanilla/icons/.gitkeep',
    //     target: `${project_name
    //       .toLowerCase()
    //       .split(' ')
    //       .join('-')}/assets/icons/.gitkeep`,
    //   })

    //   await generate({
    //     template: 'vanilla/fonts/.gitkeep',
    //     target: `${project_name
    //       .toLowerCase()
    //       .split(' ')
    //       .join('-')}/assets/fonts/.gitkeep`,
    //   })
    // }

    // if (technologies === 'React') {
    //   await generate({
    //     template: 'react/index.ejs',
    //     target: `${lowerProjectName}/index.html`,
    //     props: { project_name },
    //   })

    //   await generate({
    //     template: 'react/package.ejs',
    //     target: `${project_name
    //       .toLowerCase()
    //       .split(' ')
    //       .join('-')}/package.json`,
    //     props: { project_name },
    //   })

    //   await generate({
    //     template: 'react/.gitignore',
    //     target: `${lowerProjectName}/.gitignore`,
    //   })

    //   await generate({
    //     template: 'react/vite.config.js',
    //     target: `${project_name
    //       .toLowerCase()
    //       .split(' ')
    //       .join('-')}/vite.config.js`,
    //   })

    //   await generate({
    //     template: 'TODO.md',
    //     target: `${lowerProjectName}/TODO.md`,
    //   })

    //   await generate({
    //     template: 'react/README.ejs',
    //     target: `${lowerProjectName}/README.md`,
    //     props: { project_name, username, github_username },
    //   })

    //   await generate({
    //     template: '.github/.gitkeep',
    //     target: `${project_name
    //       .toLowerCase()
    //       .split(' ')
    //       .join('-')}/.github/.gitkeep`,
    //   })

    //   await generate({
    //     template: 'react/main.jsx',
    //     target: `${project_name
    //       .toLowerCase()
    //       .split(' ')
    //       .join('-')}/src/main.jsx`,
    //   })
    // }
  },
}
