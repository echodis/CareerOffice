$(function(){
	function GetQueryString(str) { 
		var reg = new RegExp("(^|&)" + str + "=([^&]*)(&|$)","i"); 
		var r = window.location.search.substr(1).match(reg); 
		if (r!=null) return (r[2]); return null; 
	}
	function  decode(item){
		return decodeURIComponent(item);
	}
	var year=GetQueryString("year"),
		name=GetQueryString("name"),
		academic=GetQueryString("academic"),
		major=GetQueryString("major"),
		oldCompany=GetQueryString("oldCompany"),
		newCompany=GetQueryString("newCompany");
	$('.year').text(decode(year));
	$('.name').text(decode(name));
	$('.academic').text(decode(academic));
	$('.major').text(decode(major));
	$('.oldCompany').text(decode(oldCompany));
	$('.newCompany').text(decode(newCompany));
	//获取日期
	var date=new Date();
	$('#sign span').text(date.getFullYear()+"年"+(date.getMonth()+1)+"月"+(date.getDate()+1)+"日");
	//打印功能
	$('#printBtn').on('click',function(){
		window.print();
	});
});