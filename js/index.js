// 首页切换
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

