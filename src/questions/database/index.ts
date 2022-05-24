import { QuestionList } from '../../interfaces'

const questions: QuestionList = [
  {
    type: 'select',
    name: 'database',
    message: 'Select your database:',
    choices: ['🍃  MongoDB', '🐘  PostgreSQL'],
  },
]

export default questions
