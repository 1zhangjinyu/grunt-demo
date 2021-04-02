const add = require('../add.js'),
      expect = require('chai').expect;

describe('加法函数的单元测试',()=>{
  it('0 + 0 = 0',()=>{
    expect(add(0,0)).to.be.equal(0);
  });

  it('3 + 5 = 8',()=>{
    expect(add(3,5)).to.be.equal(8);
  });

  it('a + b = NaN',()=>{
    expect(isNaN(add('a','b'))).to.be.ok;
  });

});
