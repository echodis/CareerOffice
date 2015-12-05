$(function(){
	function GetQueryString(str) { 
		var reg = new RegExp("(^|&)" + str + "=([^&]*)(&|$)","i"); 
		var r = window.location.search.substr(1).match(reg); 
		if (r!=null) return (r[2]); return null; 
	}
	function  decode(item){
		return decodeURIComponent(item);
	}
	var year=GetQueryString("year");
	var name=GetQueryString("name");
	var academic=GetQueryString("academic");
	var major=GetQueryString("major");
	var oldCompany=GetQueryString("oldCompany");
	var newCompany=GetQueryString("newCompany");
	$('.year').text(decode(year));
	$('.name').text(decode(name));
	$('.academic').text(decode(academic));
	$('.major').text(decode(major));
	$('.oldCompany').text(decode(oldCompany));
	$('.newCompany').text(decode(newCompany));
	//日期
	var date=new Date();
	$('#sign span').text(date.getFullYear()+"年"+(date.getMonth()+1)+"月"+(date.getDate()+1)+"日");
	
	$('#printBtn').on('click',function(){
		window.print();
	});

	
});