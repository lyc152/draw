/**
 * Created by lyc on 2015/4/14.
 */

var draw = {
    init:function(config){
        this.title = $(config.title);
        this.playId = $(config.play);
        this.stopId = $(config.stop);
        this.data = $(config.data);
        this.timer = null;
        this.flag = 0;
        this.play();
        this.stop();
        this.keyUp();
        //这边范围对应的对象，可以实现链式调用
        return this;
    },
    play: function(){
        var self = this;
        self.playId.on('click', function () {
            self.playFun();
        });
    },
    stop: function(){
        var self = this;
        self.stopId.on('click', function () {
            self.stopFun();
        });
    },
    playFun: function() {
        var self = this;
        clearInterval(self.timer); //清除定时器
        self.timer = setInterval(function () {
            var random = Math.floor(Math.random() * (self.data.length));
            self.title.text(self.data[random]);
        }, 50);
        self.playId.css('background','#999');
    },
    stopFun: function() {
        var self = this;
        clearInterval(self.timer);
        self.playId.css('background','#036');
    },
    keyUp: function () {
        var self = this;
        $(document).on('keyup', function (event) {
            event = event || window.event;
            if(event.keyCode == 13) {
                if(self.flag == 0) {
                    self.playFun();
                    self.flag = 1;
                } else {
                    self.stopFun();
                    self.flag = 0;
                }
            }
        });
    }
};

$(function() {
    //在domready后调用
    draw.init({
        title:'#title',
        play:'#play',
        stop:'#stop',
        data: [1,2,3,4,5,6,7,8,9,10]
    });
});



