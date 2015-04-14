/**
 * Created by lyc on 2015/4/14.
 */

$(document).ready(function () {
    var data = [1,2,3,4,5,6,7,8,9,10],
        timer = null,
        $title = $('#title'),
        $play = $('#play'),
        $stop = $('#stop'),
        flag = 0;

        //开始抽奖
    $play.on('click', function () {
        playFun();
    });

    $stop.on('click', function () {
        stopFun();
    });

    $(document).on('keyup', function (event) {
        event = event || window.event;

        if(event.keyCode == 13) {
            if(flag == 0) {
                playFun();
                flag = 1;
            } else {
                stopFun();
                flag = 0;
            }
        }
    });

    function playFun() {
        clearInterval(timer); //清除定时器
        timer = setInterval(function () {
            var random = Math.floor(Math.random() * (data.length));
            $title.text(data[random]);
        }, 50);
        $play.css('background','#999');
    }

    function stopFun() {
        clearInterval(timer);
        $play.css('background','#036');
    }
});



