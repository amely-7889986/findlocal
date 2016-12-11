// 首页切换
$(document).ready(function(){
	$("#tab2,#tab3,#tab4").hide();
});
var lists = $('.loc-tab li');
var contents = $('.loctab-con .info');
function bindEvent(){
	lists.each(function(index_li, li){
	$(this).on('click', function(event){
		lists.removeClass('active');
		$(this).addClass('active');
		contents.each(function(index_content, content){
		if(index_li === index_content){
			$(this).show();
				}else{
			$(this).hide();
			}
			});
		});
	});
}
function init(){
	bindEvent();
}
init();

//展开参团人员参数
$(document).ready(function(){
  $(".showbtn").click(function(){
    $(".showcase").slideToggle("slow");
    $(".arrowdown").toggleClass("arrowup", 1000);
  });
});

// 懒加载
// var loading = false;
//     $(window).scroll(function () {
//         if ((($(window).scrollTop() + $(window).height()) + 250) >= $(document).height()) {
//             //alert($(window).scrollTop() + "_" + (($(window).height()) + 250) + "_" + $(document).height())
//             if (loading == false) {
//                 loading = true;
//                 $('#loadingbar').css("display", "block");
//                 $.getJSON("data/data.json?start=" + $('#loaded_max').val(), function (loaded) {
//                     var RtnObj = loaded;
//                     setTimeout(function () {
//                         $('#list_more').append(returnHtml(RtnObj));
//                         $('#loaded_max').val(parseInt($('#loaded_max').val()) + 6);
//                         $('#loadingbar').css("display", "none");
//                         loading = false;
//                     }, 2000);
//                 });                

//             }
//         }
//     });
//     function returnHtml(options) {
//         var ohtml = "<li dataindex=\"{0}\">"
//         	+ "<a class=\"pic\" href=\"proinfo.html\"><img src=\"{1}\" /></a>"
//             + "<a class=\"collect\" href=\"javascript:void(0)\">"
//                 + "<i class=\"icon iconfont\">&#xe665;</i>"
//             + "</a>"
//             + "<div class=\"titbox\">"
//                 + "<p class=\"tit\"></p>"
//                 + "<div class=\"detail\">"
// 	                + "<div class=\"prize\">"
// 		                + "<span class=\"col-red\"></span>"
// 		                + "<span class=\"norprize\"></span>"
// 	                + "</div>"
// 	                + "<a class=\"btn-buy\" href=\"proinfo.html\">"
// 		                + "<i class=\"icon iconfont\">&#xe856</i><span class=\"l-left\">购买</span>"
// 		            + "</a>"
//                 + "</div>"
//             + "</div>"
//         + "</li>";
        
//         var ohtmls;
//         if (typeof options != "string" && options.length > 0) {
//             for (i = 0; i < options.length; i++) {
//                 var option = options[i];
//                 ohtmls += ohtml.format(option.dataindex, option.imgpath, option.wherepalce, option.name, option.price, option.elsething);
//             }
//         }
//         return $(ohtmls);
//     }

//     $(document).ready(function () {
//         $('#loaded_max').val(0);
//     });

//     //组合字符串
//     String.prototype.format = function () {
//         var args = arguments;
//         return this.replace(/{(\d{1})}/g, function () {
//             return args[arguments[1]];
//         });
//     }	