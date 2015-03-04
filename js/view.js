// eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('3(7.X){7["R"+a]=a;7["z"+a]=6(){7["R"+a](7.1k)};7.X("1e",7["z"+a])}E{7.19("z",a,15)}2 j=H V();6 a(){2 e=q.1d("1a");3(e){o(e,"P");2 N=B(q,"*","14");3((e.12<=10)||(N=="")){c(e,"P",d)}}4=B(q,"*","1n");k(i=0;i<4.b;i++){3(4[i].F=="1g"||4[i].F=="1f"||4[i].F=="1c"){4[i].1b=6(){r();c(v.5.5,"f",d)};4[i].O=6(){r();c(v.5.5,"f",d)};j.D(j.b,0,4[i])}E{4[i].O=6(){r();c(v.5.5,"f",d)};4[i].18=6(){o(v.5.5,"f")}}}2 C=17.16.13();2 A=q.M("11");3(C.K("J")+1){c(A[0],"J",d)}3(C.K("I")+1){c(A[0],"I",d)}}6 r(){k(2 i=0;i<j.b;i++){o(j[i].5.5,"f")}}6 B(m,y,w){2 x=(y=="*"&&m.Y)?m.Y:m.M(y);2 G=H V();w=w.1m(/\\-/g,"\\\\-");2 L=H 1l("(^|\\\\s)"+w+"(\\\\s|$)");2 n;k(2 i=0;i<x.b;i++){n=x[i];3(L.1j(n.8)){G.1i(n)}}1h(G)}6 o(p,T){3(p.8){2 h=p.8.Z(" ");2 U=T.t();k(2 i=0;i<h.b;i++){3(h[i].t()==U){h.D(i,1);i--}}p.8=h.S(" ")}}6 c(l,u,Q){3(l.8){2 9=l.8.Z(" ");3(Q){2 W=u.t();k(2 i=0;i<9.b;i++){3(9[i].t()==W){9.D(i,1);i--}}}9[9.b]=u;l.8=9.S(" ")}E{l.8=u}}',62,86,'||var|if|elements|parentNode|function|window|className|_16|initialize|length|addClassName|true|_1|highlighted||_10||el_array|for|_13|_6|_c|removeClassName|_e|document|safari_reset||toUpperCase|_14|this|_8|_9|_7|load|_4|getElementsByClassName|_3|splice|else|type|_a|new|firefox|safari|indexOf|_b|getElementsByTagName|_2|onfocus|no_guidelines|_15|event_load|join|_f|_11|Array|_17|attachEvent|all|split|450|body|offsetWidth|toLowerCase|guidelines|false|userAgent|navigator|onblur|addEventListener|main_body|onclick|file|getElementById|onload|radio|checkbox|return|push|test|event|RegExp|replace|element'.split('|'),0,{}))
$(function(){
	Parse.initialize("60pOb4BeNwwtN2Kmge840kLA7flw0GpVWJ1m0fAr", "YugQLv3sJlPvHtuITAW1gmCd85ubEoOePgqlxr5w");
	// console.log("before the initialize function");
	initialize();
});

function initialize(){
	// console.log("in the initialize function");
	$('#saveForm').on('click',function(e){
		// alert("aaa");
		e.preventDefault();
		var Ride = Parse.Object.extend("Ride");
		var ride = new Ride();
		var name = $('#element_2_1').val() + " " + $('#element_2_2').val();
		var phone = $('#element_7_1').val() + $('#element_7_2').val() + $('#element_7_3').val();
		var email = $("#element_8").val();
		var direction = $('input[name=element_6]:checked').val();
		// var date = $('#element_3_1').val() + $('#element_3_2').val() + $('#element_3_3').val();
		var date = new Date($('#element_3_3').val(),$('#element_3_1').val()-1,$('#element_3_2').val());
		var time = $("#element_10").val();
		var method = $("#element_9").val();
		var additional = $("#element_11").val();
		var place = $("#element_12").val();

		if ((name == '') || ($('#element_7_1').val() == '') || ($('#element_7_2').val() == '') || ($('#element_7_3').val() == '') || (email =='') || (direction == '') || (date =='') || (time == "") || (method == '') || (place == '')){
			alert('Please enter all required fields.');
			return false;
		} 



		console.log("direction is " + direction);
		console.log("date is " + date);
		console.log("time is " + time);
		// console.log("method is " + method);
		// console.log("additional is " + additional);

		ride.set("name",name);
		ride.set("phone",phone);
		ride.set("email",email);
		ride.set("direction",direction);
		ride.set("date",date);
		ride.set("time",time);
		ride.set("transportation",method);
		ride.set("additional",additional);
		ride.set("place",place);

		ride.save(null,{
		success: function(person){
			alert('New object created');
			// location.reload()
		},
		error:function(person,error){
			alert('Failed to create new object, with error code: ' + error.message);
		}
		});
	});
}