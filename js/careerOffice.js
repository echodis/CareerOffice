$(function(){
	var itemNumber;
	//click no：弹窗
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
		var y=($(window).height()-200)/2;	
		obj.animate({ opacity: "show", left: x, top:y}, 300);		
	}
	$('.no').on('click',function(){
		$(this).parent().parent().removeClass('bg_img');
		//记录当前题号以提供对应视频
		console.log($(this).parent().parent().attr('id'));
		itemNumber = $(this).parent().parent().attr('id');//修改为获取全部长度id
		console.log(itemNumber);
		tip_no();
		//alert(itemNumber);						
	});
	//不看视频
	$('#noVideo_btn').on('click',function(){
		$('.mask').hide();
		$('#reg').hide();
	});
	//看视频
	$('#yesVideo_btn').on('click',function(){
		url="video/"+itemNumber+".mp4";
		location.href=url;
	});
	//返回主页
	$('#ban').click(function(){
		window.location.href="all.html"; 
	});
});