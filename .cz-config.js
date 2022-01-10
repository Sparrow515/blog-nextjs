'use strict'
module.exports = {
  types: [
    { value: '✨build', name: '构建: 对项目构建或者依赖的改动' },
    { value: '🚀feat', name: '特性: 一个新的特性' },
    { value: '🐛fix', name: '修复: 修复一个Bug' },
    { value: '🚥ci', name: 'CI: 持续集成修改' },
    { value: '📝docs', name: '文档: 变更的只有文档' },
    { value: '💄style', name: '格式: 空格, 分号等格式修复' },
    { value: '♻️refactor', name: '重构: 代码重构，注意和特性、修复区分开' },
    { value: '⚡️perf', name: '性能: 提升性能' },
    { value: '✅test', name: '测试: 添加一个测试' },
    { value: '🔧chore', name: '工具: 开发工具变动(构建、脚手架工具等)' },
    { value: '⏪revert', name: '回滚: 代码回退' }
  ],
  scopes: [
    { name: '模块1' },
    { name: '模块2' },
    { name: '模块3' },
    { name: '模块4' }
  ],
  // it needs to match the value for field type. Eg.: 'fix'
  /*  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },  */
  // override the messages, defaults are as follows
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?(yes/no)'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['特性', '修复'],
  // limit subject length
  subjectLimit: 100
}
