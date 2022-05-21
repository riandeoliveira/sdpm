// import { name, description, run } from '../src/commands/init'
const { description, run } = require('../src/commands/init')

describe('sla', () => {
  it('should die', run.toBe('Rian Oliveira'))
})
