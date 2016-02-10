$(function(){
	//办理派遣
	//click yes:出现图片
	$('.yes').click(function(){
		$(this).parent().prev().addClass('bg_img');
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
	            console.log(chosenRadio);
	        }
	    }
	    if(chosenRadio==10){
	    	alert('操作完成！');
	    }
	}
});