/* @flow */
import toCss from '../utils/toCss'
import type {JssStyle, RuleOptions, ToCssOptions, CSSKeyframeRule} from '../types'
import {BaseStyleRule} from './styleRule'

const id = Symbol.for('jss-keyframe-rule-plugin')

export class KeyframeRule extends BaseStyleRule {
  renderable: ?CSSKeyframeRule

  /**
   * Generates a CSS string.
   */
  toString(options?: ToCssOptions): string {
    const {sheet} = this.options
    const link = sheet ? sheet.options.link : false
    const opts = link ? {...options, allowEmpty: true} : options
    return toCss(this.key, this.style, opts)
  }
}

export default {
  id,
  onCreateRule(key: string, style: JssStyle, options: RuleOptions): KeyframeRule | null {
    if (options.parent && options.parent.type === 'keyframes') {
      return new KeyframeRule(key, style, options)
    }
    return null
  }
}
