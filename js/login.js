window.onload = function(){
	var loginbtn=document.getElementById('loginbtn');
	var registerbtn=document.getElementById('registerbtn');
	loginbtn.onclick = function(){
		// alert('恭喜发财')
		var name = document.getElementById("username").value;

		var password=document.getElementById("password").value;
		
		// console.log(name, password);
		var storage=window.localStorage;
    	//写入a字段
    	// storage["a"]=1;
    	// //写入b字段
    	// storage.b=1;
		if(name==""&&password==""){
			alert("表格内不能为空");
		}
		else{
			if(storage[name]==password){	
				setTimeout(function () {window.location="main.html";}, 1000);
				alert("登陆成功");
			}
			else if(name!=""&&password==""){
				alert("您的密码不能为空");	
			}
			else if(name==""&&password!=""){
				alert("您的用户名不能为空");
			}
			else{
				alert("您填写的用户名或密码有误，请再输入一遍")
			}
		}
	}
	registerbtn.onclick=function(){
		window.location="register.html";
	}
}

function jumurl(){
　　window.location.href = "http://www.baidu.com";
}



