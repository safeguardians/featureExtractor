

var yargs = require('yargs')

yargs.command('list', 'show the features list', (arg) => { }, (param) => {
  opt.isFeatureNameRequired = true
}).argv