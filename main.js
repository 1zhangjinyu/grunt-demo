function roundFractional(x, n) {
  return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}
$(()=>{
  // get dom elem
  let $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calc'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
   
 
  /* calc button click */
  $btnCal.click(()=>{
    // get value
    let w = Number($width.val()),
        h = Number($height.val());

    /*
    //calc
    let p = roundFractional(((w+h)*2),3),
        a = roundFractional((w*h),3);
    */

    var rect = rectangle();

    //output
    $perimeter.val(rect.perimeter(w,h));
    $area.val(rect.area(w,h));

  });
});
