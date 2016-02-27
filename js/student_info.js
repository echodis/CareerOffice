$(function(){
	//动态设置毕业时间
	/*
	var date=new Date();
	var dateOptionsHtml='<option value = '+date.getFullYear()-1+'>'+(date.getFullYear()-1)+'</option>'+
					'<option value='+(date.getFullYear()+1)+'>'+(date.getFullYear()+1)+'</option>'+
					'<option value='+(date.getFullYear()+2)+'>'+(date.getFullYear()+2)+'</option>';
	$('#year').html(dateOptionsHtml);
	*/	
	//获取院系动态获取专业	
	/*选项改变时
	$('#department').change(function(){
		//获取选中项
		var stuDepartment=$('#department').val(),
			majorOptionsHtml,
			majorOptions;
		majorOptions=function(){
			switch(stuDepartment){
				case '数学与科学学院': 
					majorOptionsHtml='<option value="应用数学">应用数学</option><option value="计算数学">计算数学</option>';
					return majorOptionsHtml;
					break;
				case '人文与社会科学学部':
					majorOptionsHtml='<option value="公共事业管理">公共事业管理</option><option value="哲学">哲学</option><option value="汉语言">汉语言</option>';				
					return majorOptionsHtml;
					break;
				default:
					break;
			}
		}
		$('#major').html(majorOptions);
	});*/
	
	//$('.red').css('border','1px solid red');

	//输入框获得焦点自动清空
	$('input[type=text]').on('focus',function(){
		$(this).removeClass('red').val(null);
		$('#btn').attr('disabled',false);
	});

	var inputs = new Array();
	var inputId = new Array();
	var validCheck = function() {
		//console.log($('#content input[type=text]'));
		inputs = $('#content input[type=text]');
		for (var i=0; i < inputs.length; i++){
			inputId[i] = inputs[i].id;
			//console.log(inputId[i]); 
		}
		$.each(inputId, function (index,value) {
			if ($('#'+value).val() == '') {
				//alert('请完整输入：'+value);
				$('#'+value).addClass('red');
				$('#btn').attr('disabled',true);
				//console.log('prop'+$('#btn').prop('disabled'));
			};
		});
	}

	//点击提交传递参数，跳转页面
	$('#btn').on('click',function(){
		validCheck();
		console.log($('#btn').prop('disabled'));
		if($('#btn').prop('disabled') === false){
			url='gaipai_text.html?year='+$('#year').val()+'&name='+$('#name').val()+'&academic='+$('#academic').val()+
			'&major='+$('#major').val()+'&oldCompany='+$('#oldCompany').val()+'&newCompany='+$('#newCompany').val();
			document.location.href=url;
		}	
	});
});
