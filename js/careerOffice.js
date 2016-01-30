$(function(){
	//click yes:出现图片
	$('.yes').click(function(){
		$(this).parent().prev().addClass('bg_img');
	});
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
	var arrT=new Array();
	$('.no').on('click',function(){
		$(this).parent().parent().siblings().eq(1).removeClass('bg_img');
		//记录当前题号以提供对应视频
		//arrT[0]=$(this).parent().parent().siblings().eq(1).id;
		alert(arrT[0]);
		tip_no();					
	});
	//不看视频
	$('#noVideo_btn').on('click',function(){
		$('.mask').hide();
		$('#reg').hide();
	});
	//看视频
	$('#yesVideo_btn').on('click',function(){
		url="video/1企业发offer_4.mp4";
		location.href=url;
	});
	//切换窗口函数	
	var shownDiv;
	function shown(){
		$(shownDiv).hide();
		shownDiv='#'+this.id+'_div';
		$(shownDiv).show();	
	}
	//切换窗口
	$('#qianyue').click(shown);
	$('#weiyue').click(shown);
	$('#gaipai').click(shown);
	$('#paiqian').click(shown);
	$('#else').click(shown);
	//改派功能
	var arr = ['p1'];
	var allP = $('#gp p');
	var startP = $('.p1');
	var allInput = $('input');
	// var resultDiv = ;
	$('#gaipai_div .yes').on('click', handleClick);
	$('#gaipai_div .no').on('click', handleClick);

	$('.restart').on('click', function(){
		arr = arr.slice(0,1);
		allP.hide();
		$('#showResults').hide();
		$('#tip').show();
		startP.show();
		allInput.attr('checked',false);
	})

	function handleClick() {
		var _this = $(this),
			p = '';
		if (_this.data('p') === 'y' || _this.data('p') === 'n') {
			arr.push(_this.data('p'));
			var index = arr.join("-");
			$('#showResults').html(_this.data(index)).show(); //没有下一个了，此时输出结果
		} else {
			p = $('.' + _this.data('p'));  //查找下一个应该显示的
			arr.push(_this.data('p'));
			p.show();
		}
		_this.parent().parent().hide();
	}
	//选择"是":
	$('#qianyue_div .yes').on('click', function(){
		$(this).parent().prev().addClass('bg_img');
	});
	//选择"否",出现选择框
	//设置遮罩层效果
	var setMask=function(){
		$('.mask').width($(document).width());
		$('.mask').height($(document).height());
		$('.mask').css('left',0);
		$('.mask').css('top',0);
		$('.mask').show();
	}
	var arrV=new Array();
	$('#qianyue_div .no').on('click',function(){
		$(this).parent().parent().siblings().eq(1).removeClass('bg_img');
		//记录当前题号以提供对应视频
		arrV[0]=$(this).parent().parent().siblings().eq(1).id;
		setMask();
		var obj=$('#reg');
		var x=($(window).width()-500)/2;
		var y=($(window).height()-300)/2;
		$('#nav_div').css('backgound-color','red');	
		obj.animate({ opacity: "show", left: x, top:y}, 300);				
	});
	
	//办理签约
	$('#qianyue_div .yes').on('click', qyHandler);
	$('#qianyue_div .no').on('click', qyHandler);
	var qyHandler=function(){

	};
});