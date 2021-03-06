function initview(){   //初始化界面
	$('#new_envolve').css('display', 'none');
	$('.data').css('display', 'none');
	mapCanvas.style.width = (map_width).toString() + 'px';
	mapCanvas.style.height = (map_width).toString() + 'px';
	mapCanvas.setAttribute('width', map_width);
	mapCanvas.setAttribute('height', map_width);
	mapCanvas.style.left = ((window.innerWidth - map_width) / 2).toString() + 'px';
	mapCanvas.style.top = ((window.innerHeight - map_width) / 2).toString() + 'px';
	mapCanvas.style.display = 'block';  //地图布局
	$('#envolve').css('top', (window.innerHeight - $('#envolve').height()) / 2 - 70);
	$('#auto_envolve').css('top', (window.innerHeight - $('#envolve').height()) / 2);
	$('#re_envolve').css('top', (window.innerHeight - $('#envolve').height()) / 2);
	$('#stop_envolve').css('top', (window.innerHeight - $('#envolve').height()) / 2 + 70);
	$('#envolve').css('right', (window.innerWidth - $('#mapCanvas').width()) / 4 - $('#envolve').width() / 2);
	$('#auto_envolve').css('right', (window.innerWidth - $('#mapCanvas').width()) / 4 - $('#envolve').width() / 2);
	$('#stop_envolve').css('right', (window.innerWidth - $('#mapCanvas').width()) / 4 - $('#envolve').width() / 2);
	$('#re_envolve').css('left', (window.innerWidth - $('#mapCanvas').width()) / 4 - $('#envolve').width() / 2);
	$('#re_envolve').css('left', (window.innerWidth - $('#mapCanvas').width()) / 4 - $('#envolve').width() / 2);
	$('#count').css('left', (window.innerWidth - $('#mapCanvas').width()) / 4 - $('#count').width() / 2);
	$('#count').css('top', window.innerHeight / 3);
	$('#envolve').css('display', 'block');
	$('#auto_envolve').css('display', 'block');
	$('#re_envolve').css('display', 'block');
	$('#stop_envolve').css('display', 'block');
	$('#count').css('display', 'block');
}

function initialize(){   //初始化开始界面
	$('#re_envolve').css('display', 'none');
	$('#new_envolve').css('top', (window.innerHeight - $('#envolve').height()) / 2 + 150);
	$('#new_envolve').css('left', (window.innerWidth - $('#envolve').width()) / 2);
	$('#datatitle').css('top', (window.innerHeight - $('#datatitle').height()) / 2 - 250);
	$('#datatitle').css('left', (window.innerWidth - $('#datatitle').width()) / 2);
	$('#rowtext').css('top', (window.innerHeight - $('#rowtext').height()) / 2 - 150);
	$('#rowtext').css('left', (window.innerWidth - $('#rowtext').width()) / 2);
	$('#row').css('top', (window.innerHeight - $('#row').height()) / 2 - 120);
	$('#row').css('left', (window.innerWidth - $('#row').width()) / 2);
	$('#ftptext').css('top', (window.innerHeight - $('#ftptext').height()) / 2 - 50);
	$('#ftptext').css('left', (window.innerWidth - $('#ftptext').width()) / 2);
	$('#ftp').css('top', (window.innerHeight - $('#ftp').height()) / 2 - 20);
	$('#ftp').css('left', (window.innerWidth - $('#ftp').width()) / 2);
	$('#probtext').css('top', (window.innerHeight - $('#probtext').height()) / 2 + 50);
	$('#probtext').css('left', (window.innerWidth - $('#probtext').width()) / 2);
	$('#prob').css('top', (window.innerHeight - $('#prob').height()) / 2 + 80);
	$('#prob').css('left', (window.innerWidth - $('#prob').width()) / 2);
	$('#new_envolve').css('display', 'block');
	$('.data').css('display', 'block');
	mapCanvas.style.display = 'none';
	$('#envolve').css('display', 'none');
	$('#count').html('您的霸业已延续了' + cnt.toString() +'代');
	$('#auto_envolve').css('display', 'none');
	$('#stop_envolve').css('display', 'none');
	$('#count').css('display', 'none');
}

window.onresize = function(){   //保证布局
	mapCanvas.style.width = (map_width).toString() + 'px';
	mapCanvas.style.height = (map_width).toString() + 'px';
	mapCanvas.setAttribute('width', map_width);
	mapCanvas.setAttribute('height', map_width);
	mapCanvas.style.left = ((window.innerWidth - map_width) / 2).toString() + 'px';
	mapCanvas.style.top = ((window.innerHeight - map_width) / 2).toString() + 'px';
	$('#envolve').css('top', (window.innerHeight - $('#envolve').height()) / 2 - 70);
	$('#auto_envolve').css('top', (window.innerHeight - $('#envolve').height()) / 2);
	$('#re_envolve').css('top', (window.innerHeight - $('#envolve').height()) / 2);
	$('#stop_envolve').css('top', (window.innerHeight - $('#envolve').height()) / 2 + 70);
	$('#envolve').css('right', (window.innerWidth - $('#mapCanvas').width()) / 4 - $('#envolve').width() / 2);
	$('#auto_envolve').css('right', (window.innerWidth - $('#mapCanvas').width()) / 4 - $('#envolve').width() / 2);
	$('#stop_envolve').css('right', (window.innerWidth - $('#mapCanvas').width()) / 4 - $('#envolve').width() / 2);
	$('#re_envolve').css('left', (window.innerWidth - $('#mapCanvas').width()) / 4 - $('#envolve').width() / 2);
	$('#count').css('left', (window.innerWidth - $('#mapCanvas').width()) / 4 - $('#count').width() / 2);
	$('#count').css('top', window.innerHeight / 3);
	$('#new_envolve').css('top', (window.innerHeight - $('#envolve').height()) / 2 + 150);
	$('#new_envolve').css('left', (window.innerWidth - $('#envolve').width()) / 2);
	$('#datatitle').css('top', (window.innerHeight - $('#datatitle').height()) / 2 - 250);
	$('#datatitle').css('left', (window.innerWidth - $('#datatitle').width()) / 2);
	$('#rowtext').css('top', (window.innerHeight - $('#rowtext').height()) / 2 - 150);
	$('#rowtext').css('left', (window.innerWidth - $('#rowtext').width()) / 2);
	$('#row').css('top', (window.innerHeight - $('#row').height()) / 2 - 120);
	$('#row').css('left', (window.innerWidth - $('#row').width()) / 2);
	$('#ftptext').css('top', (window.innerHeight - $('#ftptext').height()) / 2 - 50);
	$('#ftptext').css('left', (window.innerWidth - $('#ftptext').width()) / 2);
	$('#ftp').css('top', (window.innerHeight - $('#ftp').height()) / 2 - 20);
	$('#ftp').css('left', (window.innerWidth - $('#ftp').width()) / 2);
	$('#probtext').css('top', (window.innerHeight - $('#probtext').height()) / 2 + 50);
	$('#probtext').css('left', (window.innerWidth - $('#probtext').width()) / 2);
	$('#prob').css('top', (window.innerHeight - $('#prob').height()) / 2 + 80);
	$('#prob').css('left', (window.innerWidth - $('#prob').width()) / 2);
	draw_map();
}

function draw_map(){   //画地图
	var context = mapCanvas.getContext('2d');
	for(var i = 0; i < row; i++){
		for(var j = 0; j < row; j++){
			if(map[i][j] < 0){
				context.fillStyle = "#ffffff";
			}
			else if(map[i][j] > 0){
				context.fillStyle = "#ffff00";
			}
			else{
				context.fillStyle = "#666666";
			}
			context.fillRect(len * j, len * i, len, len);
		}
	}
	$('#count').html('您的霸业已延续了' + cnt.toString() +'代');
}

function envolve(){   //进行演化
	get_next_generation();
	draw_map();
}

$('#envolve').click(envolve);

$('#auto_envolve').click(function(){
	if(autoflag == false){
		autoflag = true;
		mainCycle = setInterval('envolve()', 1000 / ftp); 
	}
});

$('#new_envolve').click(function(){
	row = $('#row').val();
	ftp = $('#ftp').val();
	pr = $('#prob').val();
	if(isNaN(row)|| row > 200 || row < 2 || Math.round(row) != row){
		alert('地图尺寸输入不合法，请重新输入!');
	}
	else if(isNaN(ftp)|| ftp > 60 || ftp < 1 || Math.round(ftp) != ftp){
		alert('每秒帧数输入不合法，请重新输入!');
	}
	else if(isNaN(pr)|| pr >=1 || pr < 0){
		alert('生物密度输入不合法，请重新输入!');
	}
	else{
		initdata();
		initview();
		draw_map(); 	
	}
});

$('#re_envolve').click(function(){
	clearInterval(mainCycle);
	autoflag = false;
	initialize();
});

$('#stop_envolve').click(function(){
	clearInterval(mainCycle);
	autoflag = false;
});

$('#mapCanvas').click(function(ev){
	var x, y;
	if (ev.layerX || ev.layerX == 0) {
		x = ev.layerX;
		y = ev.layerY;
	}
	else if (ev.offsetX || ev.offsetX == 0) { // Opera
		x = ev.offsetX;
		y = ev.offsetY;
	}
	x = (x - x % len) / len;
	y = (y - y % len) / len;
	map[y][x] = -1;
	draw_map();
});

initialize();