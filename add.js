function add(x,y){
  //let a = Number(x),
  //    b = Number(y);

  if( (typeof x)==='number' && (typeof y) === 'number' ){
    return x+y;
  }else{
    return NaN;
  }
}

module.exports = add;
