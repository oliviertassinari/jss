// @flow
import type {Plugin} from 'jss'

const id = Symbol.for('jss-plugin-props-sort')

/**
 * Sort props by length.
 */
export default function jssPropsSort(): Plugin {
  return {
    id,
    onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style

      const newStyle = {}
      const props = Object.keys(style).sort((prop0, prop1) => prop0.length - prop1.length)
      for (let i = 0; i < props.length; i++) {
        newStyle[props[i]] = style[props[i]]
      }
      return newStyle
    }
  }
}
