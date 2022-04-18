window.onload = function() {
    //五个菜单按钮
    var button0 = document.getElementById('button0');
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    var button3 = document.getElementById('button3');
    var button4 = document.getElementById('button4');
    // var canvas1 = document.getElementById("detectorResult"); // 创建canvas对象
    // var ctx1 = canvas1.getContext('2d');

    //五个装菜单按钮的div
    var divbtn0 = document.getElementById("divbtn0");
    var divbtn1 = document.getElementById("divbtn1");
    var divbtn2 = document.getElementById("divbtn2");
    var divbtn3 = document.getElementById("divbtn3");
    var divbtn4 = document.getElementById("divbtn4");


    // alert("进来");
    //默认显示区域
    var pic_detect_area = document.getElementById('pic_detect_area');

    var history = document.getElementById('history');
    var resultset = document.getElementById('result-set');
    var guide = document.getElementById('guide');
    var callus = document.getElementById('callus');

    //筛选检测结果的条件参数
    var zhenkong = document.getElementById('zhenkong');
    var cashang = document.getElementById('cashang');
    var zangwu = document.getElementById('zangwu');
    var zhezhou = document.getElementById('zhezhou');
    var ratechoose = document.getElementById('ratechoose');

    var myzhenkong = document.getElementById('myzhenkong');
    var mycashang = document.getElementById('mycashang');
    var myzangwu = document.getElementById('myzangwu');
    var myzhezhou = document.getElementById('myzhezhou');
    var myratechoose = document.getElementById('myratechoose');

    // 使用localstorage存储历史记录的url,页面的一些初始化
    var storage = window.localStorage;
    // storage["imageURLList"] = null;
    // storage["dataList"] = null;
    //初始化图片url和时间
    imageURLList = [];
    dataList = [];
    imageURLList = JSON.parse(storage.getItem('imageURLList'));
    dataList = JSON.parse(storage.getItem('dataList'));
    if (storage["imageURLList"] == null) {
        imageURLList = [];
        dataList = [];
    }
    // storage["imageURLList"] =null;
    // storage["dataList"] = null


    if (storage['zhenkong'] == null) {
        storage['zhenkong'] = true;
        storage['cashang'] = true;
        storage['zangwu'] = true;
        storage['zhezhou'] = true;
        storage['ratechoose'] = "0";
        // console.log(typeof storage['zhenkong']);
        // console.log(typeof storage['cashang']);
        // console.log(typeof storage['zangwu']);
        // console.log(typeof storage['zhezhou']);
    }
    myzhenkong.checked = true ? (storage['zhenkong'] == "true") : false;
    mycashang.checked = true ? (storage['cashang'] == "true") : false;
    myzangwu.checked = true ? (storage['zangwu'] == "true") : false;
    myzhezhou.checked = true ? (storage['zhezhou'] == "true") : false;
    myratechoose.value = storage['ratechoose'];

    button0.onclick = function() {
        pic_detect_area.style.display = "block";
        history.style.display = "none";
        resultset.style.display = "none";
        guide.style.display = "none";
        callus.style.display = "none";
        // console.log(divbtn0.style.backgroundColor);
        button0.style.background = "rgb(245,109,67)";
        button0.style.color = "white";

        button1.style.background = "#fff2df";
        button1.style.color = "#4D4D4D";

        button2.style.background = "#fff2df";
        button2.style.color = "#4D4D4D";

        button3.style.background = "#fff2df";
        button3.style.color = "#4D4D4D";
        button4.style.background = "#fff2df";
        button4.style.color = "#4D4D4D";
        //detectorResult.src = showImage.src;
        //canvas1.strokeRect(50, 50, 50, 50);
        // console.log(divbtn0.style.background);
        //var canvas1 = document.createElement("canvas"); // 创建canvas对象
        //var ctx1 = canvas1.getContext('2d');
    }

    button1.onclick = function() { //历史记录
        button1.style.background = "rgb(245,109,67)";
        button1.style.color = "white";

        button0.style.background = "#fff2df";
        button0.style.color = "#4D4D4D";

        button2.style.background = "#fff2df";
        button2.style.color = "#4D4D4D";

        button3.style.background = "#fff2df";
        button3.style.color = "#4D4D4D";

        button4.style.background = "#fff2df";
        button4.style.color = "#4D4D4D";
        // alert("点击了历史记录");
        history.style.display = "block";
        pic_detect_area.style.display = "none";
        resultset.style.display = "none";
        guide.style.display = "none";
        callus.style.display = "none";
        // console.log(imageURL);
        var table = "<table><th class=\"tableForm\">时间</th><th class=\"tableForm\">检测图片及结果</th>";
        // console.log(imageURLList)
        for (var i = 0; i < imageURLList.length; i++) {
            var time = dataList[i];
            table += "<tr><td class=\"tableForm\">" + time + "</td><td class=\"tableForm\"><a href=\"" + imageURLList[i] + "\" target=\"_blank\">" + "查看图片" + "</a></td></tr>";
        }
        table += "</table>"
        container.innerHTML = table;
    }

    // var button2=document.getElementById('button2');  //结果设置
    var setResultBtn = document.getElementById('resultchoosebtn');
    button2.onclick = function() {
        resultset.style.display = "block";
        pic_detect_area.style.display = "none";
        history.style.display = "none";
        guide.style.display = "none";
        callus.style.display = "none";

        button2.style.background = "rgb(245,109,67)";
        button2.style.color = "white";

        button1.style.background = "#fff2df";
        button1.style.color = "#4D4D4D";

        button0.style.background = "#fff2df";
        button0.style.color = "#4D4D4D";

        button3.style.background = "#fff2df";
        button3.style.color = "#4D4D4D";

        button4.style.background = "#fff2df";
        button4.style.color = "#4D4D4D";

    }

    setResultBtn.onclick = function() {
        // alert(ratechoose);
        // console.log(ratechoose.value);
        if (parseInt(ratechoose.value) >= 0 && parseInt(ratechoose.value) <= 100) {
            storage['zhenkong'] = zhenkong.checked;
            storage['cashang'] = cashang.checked;
            storage['zangwu'] = zangwu.checked;
            storage['zhezhou'] = zhezhou.checked;
            storage['ratechoose'] = ratechoose.value;

            myzhenkong.checked = true ? (storage['zhenkong'] == "true") : false;
            mycashang.checked = true ? (storage['cashang'] == "true") : false;
            myzangwu.checked = true ? (storage['zangwu'] == "true") : false;
            myzhezhou.checked = true ? (storage['zhezhou'] == "true") : false;
            myratechoose.value = storage['ratechoose'];
            console.log("设置成功");

        } else {
            alert("请输入指定范围内的数");
        }
    }



    // var button4=document.getElementById('button4');  //联系我们
    button4.onclick = function() {
            callus.style.display = "block";
            pic_detect_area.style.display = "none";
            resultset.style.display = "none";
            guide.style.display = "none";
            history.style.display = "none";

            button4.style.background = "rgb(245,109,67)";
            button4.style.color = "white";

            button1.style.background = "#fff2df";
            button1.style.color = "#4D4D4D";

            button2.style.background = "#fff2df";
            button2.style.color = "#4D4D4D";

            button3.style.background = "#fff2df";
            button3.style.color = "#4D4D4D";

            button0.style.background = "#fff2df";
            button0.style.color = "#4D4D4D";
        }
        //选择图片并显示
        //var canvas = document.createElement("canvas"); // 创建canvas对象
        //var ctx = canvas.getContext('2d');
    var original = document.querySelector("#showImage");
    var choosefile = document.getElementById("choosefile");
    var uploadImage = document.getElementById("uploadImage");
    choosefile.onchange = function() {
        var reader = new FileReader();
        reader.readAsDataURL(choosefile.files[0]);
        reader.onloadend = function(e) {
            showImage.src = e.target.result;
            // console.log(e.target.result);// 图片的base64数据
            getImage(e.target.result)
        };
    };

    // 创建图片
    var getImage = function(b64) {
        // 创建图片对象
        var image = new Image();
        image.src = `${b64}`;
        image.onload = function() {
            // 获取原图宽高
            var height = this.height;
            var width = this.width;
            //设置canvas大小与原图宽高一致
            // canvas1.height = height;
            // canvas1.width = width;
            // 在canvas绘制图片
            //ctx.drawImage(this, 0, 0, width, height);
            //ctx1.drawImage(this, 0, 0, showImage.width, showImage.height);
            // 截图：
            // drawRect();
        }
    };
    var request = new XMLHttpRequest();
    uploadImage.onclick = function() {
        const files = new FormData();
        files.append('img', choosefile.files[0]);
        request.open("POST", "http://99af-106-12-204-140.ngrok.io/infer");
        request.send(files);
        request.responseType = "json";
    }
    request.onreadystatechange = function() {
        if (this.status == 200 && this.readyState == 4) {
            var body = this.response;
            var imageUrl = body['data']['img'];
            detectorResult.src=imageUrl;
            var now = new Date();
            var time = now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
            dataList = JSON.parse(storage.getItem('dataList'));
            imageURLList = JSON.parse(storage.getItem('imageURLList'));

            if (imageURLList == null) {
                console.log("isnull");
                imageURLList = [];
                dataList = [];
            }
            // console.log(dataList);
            dataList.push(time);
            imageURLList.push(imageUrl);
            localStorage.setItem('imageURLList', JSON.stringify(imageURLList));
            localStorage.setItem('dataList', JSON.stringify(dataList));
        }
    }
    var createNewCanvas = function(content, width, height) {
        var nCanvas = document.createElement('canvas');
        var nCtx = nCanvas.getContext('2d');
        nCanvas.width = width;
        nCanvas.height = height;
        nCtx.putImageData(content, 0, 0); // 将画布上指定矩形的像素数据，通过 putImageData() 方法将图像数据放回画布
        return nCanvas.toDataURL('image/png');
    };

    // 图片拖动，放大缩小的实现
    var showImage = document.getElementById("showImage");
    var detectorResult = document.getElementById("detectorResult");
    // var enlargebtn=document.getElementById("enlargebtn");
    // var reducebtn=document.getElementById("reducebtn");
    // var cutbtn=document.getElementById("cutbtn");

    var offX = 0,
        offY = 0;
    var mutiplier = 1.0;
    showImage.onmousedown = function(ev) {
            ev.preventDefault(); //阻止浏览器动作，有些浏览器试图拖拽图片的时候，是会把图片单独到一个页面来查看的。   
            var oevent = ev || event; //兼容性处理
            var distanceX = oevent.clientX; //记录鼠标点击x位置
            var distanceY = oevent.clientY; //记录鼠标点击y位置
            // console.log(distanceX);
            document.onmousemove = function(ev) { //当鼠标点击后，才对document设置mousemove事件
                var oevent = ev || event;
                x1 = oevent.clientX - distanceX; //oevent.clientX是鼠标移动到的x位置，oevent.clientX-distanceX是移动的距离
                y1 = oevent.clientY - distanceY;
                distanceX = oevent.clientX; //更新distanceX的位置信息。这一步非常重要非常重要非常重要，因为mousemove事件在鼠标移动时触发，而不是鼠标停止移动后触发
                distanceY = oevent.clientY;
                showImage.style.marginLeft = (x1 + offX) + "px"; //若x1为正，则鼠标向右移动，设置图片的margin-left为正，向右偏移；为负同理向左偏移。
                showImage.style.marginTop = (y1 + offY) + "px"; //offX和offY为前一次的偏移，本次移动是在前一次的基础上发生的，要加上偏移值才是鼠标本次移动后图片的位置。
                offX = x1 + offX; //记录此时图片的偏移位置
                offY = y1 + offY;
            };
            document.onmouseup = function() { //鼠标抬起后，就取消document的mousemove事件
                document.onmousemove = null;
            };
        }
        // console.log(enlargebtn);
        // enlargebtn.onclick=function(){
        // 	// console.log("放大");
        // 	showImage.width = showImage.width * 1.1;
        //        showImage.height = showImage.height * 1.1;
        //        mutiplier=mutiplier*1.1;
        // }
        // reducebtn.onclick=function() {
        // 	// console.log("缩小");
        // 	showImage.width = showImage.width / 1.1;
        //        showImage.height = showImage.height / 1.1;
        //        mutiplier=mutiplier/1.1;
        // }

    // 图片剪裁
    // cutbtn.onclick=function(){
    // 	console.log("裁剪");
    // 	console.log(offX);
    // 	console.log(offY);
    // 	// showImage.style.top = -offX + "px";
    // 	// showImage.style.left = -offY + "px";
    // 	// showImage.style.width=640*mutiplier+'px';
    // 	// showImage.style.height=480*mutiplier+'px';
    // 	// top right bottom left
    // 	var mutiplier1=mutiplier;
    // 	if(mutiplier<1){
    // 		mutiplier1=1;
    // 	}
    // 	var top=-offX/mutiplier;
    // 	var height=480/mutiplier1;
    // 	var width=640/mutiplier1;
    // 	var left=-offY/mutiplier;
    // 	console.log(mutiplier1);
    // 	console.log(top);
    // 	console.log(left);
    // 	console.log(width);
    // 	console.log(height);
    // 	var cutImage = ctx.getImageData(left,top,width,height);
    // 	console.log(cutImage.length);
    // 	var newImage = createNewCanvas(cutImage,640,480);
    // 	// console.log(newImage);
    // 	showImage.src = newImage;
    // 	// ctx.drawImage()

    // 	// showImage.style.backgroundPosition = top+"px "+left+"px";
    // 	// showImage.style.width='60px';
    // 	// showImage.style.height='60px';
    // 	// // showImage.style.clip = "rect(" + top + "px, " + right + "px, " + bottom + "px, " + left + "px)";
    // 	// console.log(showImage.style.width);
    // 	// console.log(showImage.style.height);
    // 	// console.log(mutiplier);
    // 	// // console.log(showImage.style.clip);
    // }


    //新手教程
    button3.onclick = function() {
        guide.style.display = "block";
        pic_detect_area.style.display = "none";
        resultset.style.display = "none";
        history.style.display = "none";
        callus.style.display = "none";
        var oMask = document.getElementById('mask');
        var oSearch = document.getElementById('searchTip');
        var aStep = oSearch.getElementsByTagName('div');
        var aA = oSearch.getElementsByTagName('a');
        var aClose = oSearch.getElementsByTagName('span');

        button3.style.background = "rgb(245,109,67)";
        button3.style.color = "white";

        button1.style.background = "#fff2df";
        button1.style.color = "#4D4D4D";

        button2.style.background = "#fff2df";
        button2.style.color = "#4D4D4D";

        button0.style.background = "#fff2df";
        button0.style.color = "#4D4D4D";

        button4.style.background = "#fff2df";
        button4.style.color = "#4D4D4D";

        //下一步按钮
        // console.log(aA);
        oMask.style.display = oSearch.style.display = aStep[0].style.display = 'block';
        for (var i = 0; i < aStep.length; i++) {
            aA[i].index = i; //为每一个按钮增加一个index属性，为后面引用做好准备
            aA[i].onclick = function() {
                // console.log("点击了");
                this.parentNode.style.display = "none";
                // aStep[this.index+1].style.display="block";

                if (this.index < aStep.length - 1) { //如上，如果不加这个判断，到了最后一个会报错
                    aStep[this.index + 1].style.display = "block";
                } else if (this.index == aStep.length - 1) { //如果到了最后一个，结束整个操作
                    oMask.style.display = "none";
                    this.style.display = oSearch.style.display = "none";
                   
                }
            }
        }
        //关闭按钮
        for (var i = 0; i < aClose.length; i++) {
            aClose[i].onclick = function() {
                oMask.style.display = oSearch.style.display = "none";
                
            }
        }
    }





}

// function selectImage(file) {
//     if (!file.files) {
//         return;
//     }
//     var reader = new FileReader();
//     reader.onload = function (evt) {
//         document.getElementById('showImage').src = evt.target.result;
//         image = evt.target.result;
//     }
//     reader.readAsDataURL(file.files[0]);
// }