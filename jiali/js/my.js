$(function(){
	$(".yifu1").on("mouseenter", function() {
                $('#erji2').show();
            })
$(".yifu1").on("mouseleave", function() {
                $('#erji2').hide();
            });
$("#erji2").on("mouseenter", function() {
                $(this).show();
            })
$("#erji2").on("mouseleave", function() {
                $(this).hide();
            });
$('.service ul li:last-child').css('margin-right','none');

/*返回顶部*/

/*
$("toTop").onclick(function(){ 
 $('body,html').animate({ scrollTop: 0 }, 100); 
 return false; 
});

*/


$("#toTop").onclick = function(){ 
	document.documentElement.scrollTop = document.body.scrollTop = 0;
};
/*商品列表*/
//jQuery("").css("backgroundColor","red");
$(".btn2").click(function(){
  $("p").slideDown();
});	
	
});


/*手标移动一段距离出现
var _box_y = $("#subnav").offset().top; 
var _box_x = $("#subnav").offset().left; 
var a = $("i").offset().top;
var a = $("i").offset().left;
$(window).scroll(function(){ 
if($(window).scrollTop() > _box_y){ 
$("#subnav").attr("style","position: absolute;top:"+($(window).scrollTop()-6)+"px; left:"+_box_x+"px;z-index:99;width:100%;height:1%;"); 
$("i").hide("slow");
}else{ 
$("#subnav").attr("style","");
$("i").show("slow");
} 
}) 
*/

});



	

