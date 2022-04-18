window.onload = function(){
	// alert("111");
	var registerbtn=document.getElementById("registerbtn");
	// alert("333")
	registerbtn.onclick = function(){
		// alert("22");
		var name = document.getElementById("username").value;
		var password0=document.getElementById("password0").value;
		var password1=document.getElementById("password1").value;
		var storage=window.localStorage;
    	//写入a字段
    	// storage["a"]=1;
    	// //写入b字段
    	// storage.b=1;
    	// alert(name=="")
    	// alert(password0=="")
    	// alert(password1=="")
		if(name==""&& password0=="" && password1==""){
			alert("表格内不能为空");
		}
		else{
			if(name!=""&&password0==""){
				alert("您的密码不能为空");	
			}
			else if(name!="" && password0!="" && password1==""){
				alert("请再次输入密码");	
			}
			else if(name==""&&password0!=""){
				alert("您的用户名不能为空");
			}
			else if(password0!=password1){
				alert("两次密码不相同，请重新输入");
			}
			else if(storage[name]!=null){
				alert("用户名重复");
			}
			else{
				storage[name]=password1;
				setTimeout(function () {window.location="login.html";}, 1000);
				alert("注册完成！点击跳转到登录页面...");
				// alert("注册成功");
				// window.location.href="login.html";
			}
		}
	}
}



