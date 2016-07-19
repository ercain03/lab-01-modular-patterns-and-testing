const expect = require('chai').expect;
const assert = require('assert');
const cowsay = require('../lib/cowsay');

describe('what the cow says', function(){
  it('should say what the user inputed', function(){
    expect(cowsay('tre')).to.eql('moo cow says tre');
    assert.deepEqual(cowsay('tre'), cowsay('tre'));
  });
});
  
