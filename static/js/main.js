function sleep(sleepTime) {
       for(var start = Date.now(); Date.now() - start <= sleepTime; ) { } 
}

function setProgress (p) {
    if (p < 0) {
	    $("div[id=input-progress-bar]").css("width", p + "%");
        $('#process').text('');
    }
    else {
        p = p + '%';
	    $("div[id=input-progress-bar]").css("width", p);
        $('#process').text('外链已生成'+p);
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
                    var position = e.loaded || e.position;
                    var total = e.total;
                    if (e.lengthComputable) {
                        percent = Math.ceil(position / total * 100);
                    }
                    setProgress(percent);
                }, false);
            }
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
            document.getElementById( 'linkaddress' ).value = 'http://raspberry-pi.qiniudn.com/'+msg.key;
			//window.location.href = '/success/'+msg.key;
        },
        error: function (e) {
        }
    });
}
function handleFiles (files) {
    for (var i = 0; i < files.length; i++) {
        var fd = new FormData();
        if (files[i].type.match('image.*')) {
            fd.append('file', files[i])
            sendFile(fd);
            break;
        }
    }
}

$('#input').on('change', function (e) {
	$("div[id=input-progress-bar]").css("width", 0+'%');
	sleep(300);
	var fs = e.target.files || e.dataTransfer && e.dataTransfer.files;
    handleFiles(fs);
})

