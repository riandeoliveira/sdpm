const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'Your name:',
  },
  {
    type: 'input',
    name: 'github_username',
    message: 'Your GitHub username:',
  },
  {
    type: 'input',
    name: 'project_name',
    message: 'Project name:',
  },
  {
    type: 'select',
    name: 'technologies',
    message: 'Select your project technologies:',
    choices: ['HTML / CSS / JS', 'React', 'React + TS'],
  },
]

export default questions
