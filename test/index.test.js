var test = require('tape');
var Else = require('..');

test('<Else />', function(t) {
  t.plan(1);

  var res = Else();

  t.equal(res === undefined, true);
});