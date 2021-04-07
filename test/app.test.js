const expect = require('chai').expect,
      http = require('http');

describe('request http api',()=>{
  it('rect(20,30) => {area:600, per:100}',(done)=>{
    http.get('http://localhost:8080/rectangle?width=20&height=30',(res)=>{
      let data = '',
          result = null;
      res.on('data',(chunck)=>data+=chunck);
      res.on('end',()=>{
        result = JSON.parse(data);
        expect(result.perimeter).to.be.equal(100);
        expect(result.area).to.be.equal(600);
        done();   // 通知异步已完成
      })
    })
  });
})
