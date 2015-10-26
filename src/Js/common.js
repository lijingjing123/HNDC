     //头部banner
  function headerSlide(){
    var i = 0;
  var L = $('.show-slide-item').length;
  
  //淡入淡出动画
  function show() {
    $('.show-slide-item').eq(i).fadeIn("slow").siblings().hide(); 
     if (i == L - 1) { //判断是不是显示到最后一张，如果是下一张就显示第一张
      i = 0;
    } else { //如果不是现实最后一张，就显示下一张，索引值+1
      i++;
    }
  }
 var timer = setInterval(show, 5000);
        $("#show-slide").hover(function() {
            clearTimeout(timer);
        }, function() {
            timer = setInterval(show, 5000);
        })
  }
  headerSlide();