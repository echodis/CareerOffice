$(function(){
	/*$('.no').click(function(){
		$(this).parent().prev().addClass('bg_img');
	});*/
	var tip_no=function(){
		//set mask
		$('.mask').width($(document).width());
		$('.mask').height($(document).height());
		$('.mask').css('left',0);
		$('.mask').css('top',0);
		$('.mask').show();
		//show tip information
		var obj=$('#reg');
		var x=($(window).width()-500)/2;
		var y=($(window).height()-300)/2;	
		obj.animate({ opacity: "show", left: x, top:y}, 300);
		
	}
	var arrT=new Array();
	$('.no').on('click',function(){
		$(this).parent().parent().siblings().eq(1).removeClass('bg_img');
		//记录当前题号以提供对应视频
		//arrT[0]=$(this).parent().parent().siblings().eq(1).id;
		alert(arrT[0]);
		tip_no();					
	});
	//click yes 
	
});