$(function(){
	var num;
	//办理签约
	//click yes:出现图片
	$('.yes').click(function(){
		$(this).parent().parent().addClass('bg_img');
		num = $(this).parent().parent().attr('id').slice(4);
		if (num==1) {
			$('#qy_p2').css('display','none');
		};
		check();
	});	
	//判断是否全部选择“是”
	function check(){
	    var radios = $('input[type=radio]'),
	    	chosenRadio = 0;
	    for(var i = 0 ; i < radios.length ; ++i){	
	        if(radios[i].checked&&radios[i].value=='是'){
	        	//console.log(radios.length);
	            chosenRadio++;
	            //console.log(chosenRadio);
	        }
	    }
	    if(chosenRadio==6){
	    	//
	    }
	}
});