$(function(){	
	//文本框获得焦点自动清空
	$('#name').on('focus',function(){
		$('#name').val(null);
	});
	$('#oldCompany').on('focus',function(){
		$('#oldCompany').val(null);
	});
	$('#newCompany').on('focus',function(){
		$('#newCompany').val(null);
	});
	/*function setNull(str){
		$(str).val(null);
	}
	setNull('#name');*/
	//提交表单验证是否全部输入
	
	function validCheck(){
		if($('#year option:selected').text()!=""&&$('#name').val()!=""&&$('#academic option:selected').text()!=""&&$('#major option:selected').text()!=""&&
			$('#oldCompany').val()!=""&&$('#newCompany').val()!=""){
			return true;
		}else{	
			alert("输入出错！请检查后重新提交");
			return false;
		}
	}
	
	$('input[type=submit]').on('click',function(){
		if(validCheck()){
			url='gaipai_text.html?year='+$('#year option:selected').text()+'&name='+$('#name').val()+'&academic='+$('#academic option:selected').text()+
			'&major='+$('#major option:selected').text()+'&oldCompany='+$('#oldCompany').val()+'&newCompany='+$('#newCompany').val();
			document.location.href=url;
		}	
	});

	
});
