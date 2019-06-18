module.exports = {
  root: true, // 作用的目录是根目录
  extends: 'standard', // 继承标准规则
  plugins: [
    'html', // 使用eslint-plugin-html
    'vue'
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
    amd: true
  },
  rules: {
    // 自定义的规则
    "indent": ['warn', 2], // 提醒缩进2个空格
    'space-before-function-paren': 0, // 函数左括号的前可以没有空格
    'eol-last': 0, // 不检测文件末尾有空行
  },
}
