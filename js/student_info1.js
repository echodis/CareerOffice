$(function(){
	//动态设置毕业时间
	var date=new Date();
	var dateOptionsHtml='<option value='+(date.getFullYear()+1)+'>'+(date.getFullYear()+1)+'</option>'+
					'<option value='+(date.getFullYear()+2)+'>'+(date.getFullYear()+2)+'</option>';
	$('#year').html(dateOptionsHtml);	
	//获取院系动态获取专业	
	//选项改变时
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
	});
	
	//输入框获得焦点自动清空
	$('#name,#oldCompany,#newCompany').on('focus',function(){
		$(this).val(null);
	});
	//提交表单有效性检验（验证是否全部输入）
	$('#name,#oldCompany,#newCompany').on('focus',function(){
		$('input[type=submit]').attr('disabled',false);
	});
	function validCheck(){
		if($('#year option:selected').text()!=""&&$('#name').val()!=""&&$('#academic option:selected').text()!=""&&$('#major option:selected').text()!=""&&
			$('#oldCompany').val()!=""&&$('#newCompany').val()!=""){
			return true;
		}else{	
			alert("输入出错！请检查后重新提交");
			return false;
		}
	}
	//点击提交传参，跳转页面
	$('input[type=submit]').on('click',function(){
		if(validCheck()){
			url='gaipai_text1.html?year='+$('#year option:selected').text()+'&name='+$('#name').val()+'&academic='+$('#academic option:selected').text()+
			'&major='+$('#major option:selected').text()+'&oldCompany='+$('#oldCompany').val()+'&newCompany='+$('#newCompany').val();
			document.location.href=url;
		}	
	});

	
});
