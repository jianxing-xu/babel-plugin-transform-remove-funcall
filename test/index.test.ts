import { describe, expect, it } from 'vitest'
import { transform } from '@babel/core'
import plugin from '../src/index'

const case1 = `Logger.debug('123');Logger.instance.debug('123')`
const case2 = `Logger('123')`

function gen(code: string) {
  const result = transform(code, {
    plugins: [[plugin, { callChains: ['Logger', 'debug', 'log'] }]],
  })
  return result?.code
}

describe('remove some function call', () => {
  it('case1', () => {
    const str = gen(case1)?.trim()
    expect(str).toEqual('')
  })
  it('case2', () => {
    const str = gen(case2)?.trim()
    expect(str).toEqual('')
  })
})
