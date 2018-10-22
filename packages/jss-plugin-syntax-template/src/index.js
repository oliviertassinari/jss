// @flow
import {type Plugin} from 'jss'
import parse from './parse'

const id = Symbol.for('jss-plugin-syntax-template')

export default function templatePlugin(): Plugin {
  return {
    id,
    onProcessRule(rule) {
      if (typeof rule.style === 'string') {
        // $FlowFixMe: We can safely assume that style exists
        rule.style = parse(rule.style)
      }
    }
  }
}
