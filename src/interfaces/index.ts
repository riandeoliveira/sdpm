export interface Questions {
  type: string
  name: string
  message: string
  choices?: string[]
}

export interface QuestionList extends Array<Questions> {}

export interface Path {
  template: string
  target: string
}

export interface PathList extends Array<Path> {}
