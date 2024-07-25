import globals from 'globals'
import pluginJs from '@eslint/js'

export default [
  {
    ignores: ['node_modules', 'data'],
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
]
