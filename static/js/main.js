//ZeroClipboard.config( { swfPath: 'http://raspberry-pi.qiniudn.com/ZeroClipboard.swf' } );
//ZeroClipboard.swf和ZeroClipboard.min.js不在同一目录下时需要设置路径

var client = new ZeroClipboard( document.getElementById("copytoboard") );

client.on( 'ready', function(event) {
	// console.log( 'movie is loaded' );

	client.on( 'copy', function(event) {
	  event.clipboardData.setData('text/plain', document.getElementById( 'linkaddress' ).value);
	} );

	client.on( 'aftercopy', function(event) {
	  console.log('Copied text to clipboard: ' + event.data['text/plain']);
	} );
  } );

client.on( 'error', function(event) {
	// console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
	ZeroClipboard.destroy();
  } );

client.on( 'error', function(event) {
	// console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
	ZeroClipboard.destroy();
} );

function sleep(sleepTime) {
       for(var start = Date.now(); Date.now() - start <= sleepTime; ) { } 
}

function setProgress (p) {
    if (p < 0) {
	    $("div[id=input-progress-bar]").css("width", p + "%");
        $('#input-progress-bar').text('外链地址');
    }
    else {  
        p = p + '%';
	    $("div[id=input-progress-bar]").css("width", p);
        $('#input-progress-bar').text(p);
    }
}
function sendFile (f) {
    var uploadUrl = '/upload';
    $.ajax({
        xhr: function() {
            var xhrobj = $.ajaxSettings.xhr();
            if (xhrobj.upload) {
                xhrobj.upload.addEventListener('progress', function (e) {
                    var percent = 0;
					//event.position 已经上传的字节数
                    var position = e.loaded || e.position;
					//event.total 上传的总字节数
                    var total = e.total;
                    if (e.lengthComputable) {
                        percent = Math.ceil(position / total * 100);
                    }
					document.getElementById("progresstext").style.visibility="visible";//隐藏
                    setProgress(percent);
                }, false);//设置为false，则冒泡执行（从内向外），否则为捕捉，从外向内
            }
			//返回自己创建的XMLHttpRequest对象
            return xhrobj;
        },
        url: uploadUrl,
        type: 'POST',
        contentType: false,
        processData: false,
        cache: false,
        data: f,
        success: function (e) {
            msg = JSON.parse(e);
			$('#progresstext').text('外链已生成');
			document.getElementById( 'thumbnail' ).src = msg.baseurl+msg.key;
            document.getElementById( 'linkaddress' ).value = msg.baseurl+msg.key;
			//window.location.href = '/success/'+msg.key;
        },
        error: function (e) {
        }
    });
}
function handleFiles (files) {
	//FileList对象只有一个属性：length
    for (var i = 0; i < files.length; i++) {
        var fd = new FormData();
        if (files[i].type.match('image.*')) {
            fd.append('file'+ i, files[i])
            sendFile(fd);
            break;
        }
    }
}

$('#input').on('change', function (e) {
	$("div[id=input-progress-bar]").css("width", 0+'%');
	$('#input-progress-bar').text('0%');
	$('#progresstext').text('外链地址');
	//document.getElementById("progresstext").style.visibility="hidden";//隐藏
	sleep(300);
	// HTML5 File API
	//e.target.files是由用户选择的文件，FileList对象；e.dataTransfer.files用于拖拽文件上传
	var fs = e.target.files || e.dataTransfer && e.dataTransfer.files;
    handleFiles(fs);
})


