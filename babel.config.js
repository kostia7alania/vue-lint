module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  env: {
    test: {
      plugins: [
        'transform-es2015-modules-commonjs',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        [
          '@babel/plugin-proposal-pipeline-operator',
          {
            proposal: 'minimal',
          },
        ],
      ],
    },
  },
}
