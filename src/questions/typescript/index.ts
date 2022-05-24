import { QuestionList } from '../../interfaces'

const questions: QuestionList = [
  {
    type: 'select',
    name: 'ts_option',
    message: 'Do you want to use TypeScript?',
    choices: ['✅  Yes', '❌  No'],
  },
]

export default questions
