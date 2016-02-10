$(function(){
<<<<<<< HEAD

	//click yes:出现图片
	$('.yes').click(function(){
		$(this).parent().prev().addClass('bg_img');
	});
=======
	var itemNumber;
>>>>>>> upstream/master
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
		var y=($(window).height()-300)/2;	
		obj.animate({ opacity: "show", left: x, top:y}, 300);		
	}
	$('.no').on('click',function(){
		$(this).parent().parent().siblings().eq(1).removeClass('bg_img');
		//记录当前题号以提供对应视频
		itemNumber = $(this).parent().parent().siblings().eq(1).attr('id');
		tip_no();						
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
});