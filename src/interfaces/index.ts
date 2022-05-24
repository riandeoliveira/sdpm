export interface Questions {
  type: string
  name: string
  message: string
  choices?: string[]
}

export interface QuestionList extends Array<Questions> {}
