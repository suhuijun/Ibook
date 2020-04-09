(function() {
    var $width = $('#width'),	  var $width = $('#width'),
        $height = $('#height'),	      $height = $('#height'),
        $btnCal = $('#calculate'),	      $btnCal = $('#calculate'),
        $perimeter = $('#perimeter'),	      $perimeter = $('#perimeter'),
        $area = $('#area');	      $area = $('#area'),
        $widthValidate = $('#width-validate'),
        $heightValidate = $('#height-validate'),
        isPassValidate = false;
  
    $width.focusout(function() {
      var result = validate($width.val());
      isPassValidate = result.isOK;
      if(!result.isOK) {
        $widthValidate.html('宽度' + result.reason);
        $width.select();
      } else {
        $widthValidate.html('');
      }
    });
  
    $height.focusout(function() {
      var result = validate($height.val());
      isPassValidate = result.isOK;
      if(!result.isOK) {
        $heightValidate.html('高度' + result.reason);
        $height.select();
      } else {
        $heightValidate.html('');
      }
    });
  
  
    $btnCal.click(function(){	  $btnCal.click(function(){
      if(!isPassValidate) return;
  
      var w = $width.val(),	    var w = $width.val(),
          h = $height.val();	        h = $height.val();