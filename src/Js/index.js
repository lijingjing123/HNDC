$(function() {
    // 新闻banner动画
    $(".guide-show-content").width("2000000000px")    
    function adv() {
        var L = $(".guide-show-content figure").length;
        for (var i = 1; i <= L; i++) {
            $(".guide-show-page ul").append("<li>1</li>");
        }
        $(".guide-show-content figure").clone().appendTo($(".guide-show-content"));
        $(".guide-show-page li").eq(0).addClass("on");
        var n = 0;
        function advshow() {
            $(".guide-show-content").animate({
                marginLeft: -376 * (++n) + "px"
            }, 1000);
            $(".guide-show-page li").removeClass("on");
            $(".guide-show-page li").eq(n).addClass("on");
            if (n == L) {
                n = 0;
                $(".guide-show-content").animate({
                    marginLeft: -376 * n + "px"
                }, 0)
                $(".guide-show-page li").removeClass("on")
                $(".guide-show-page li").eq(n).addClass("on")
            }
        }
        var setInt = setInterval(advshow, 4000);
        $(".inner-guide-show").hover(function() {
            clearTimeout(setInt);
        }, function() {
            setInt = setInterval(advshow, 4000);
        })
        $(".guide-show-page li").click(function() {
            var ii = $(this).index()
            n = ii
            $(".guide-show-content").animate({
                marginLeft: -376 * (n) + "px"
            }, 1000)
            $(".guide-show-page li").removeClass("on")
            $(".guide-show-page li").eq(n).addClass("on")
        })
    }
    adv();
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
  //通知公告  
 function inform(){
        var n=0
        var L=$('.inform-content li').length;
         $('.inform-content ul').append($('.inform-content li').clone());
        function goTop(){
            $(".inform-content ul").css({ marginTop:-(++n)+"px"});
            if(n==53*(L)){
              n=0;
              $(".inform-content ul").css({ marginTop:"0"});
            }
          }
        var setTime = setInterval(goTop, 50);
        $(".inner-inform li").hover(function() {
            clearTimeout(setTime);
        }, function() {
            setTime = setInterval(goTop, 50);
        })
      }
      inform()
})
