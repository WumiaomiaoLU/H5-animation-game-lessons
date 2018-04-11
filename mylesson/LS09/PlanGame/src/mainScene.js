var mainLayer=cc.Layer.extend({
    arr:[],
    ctor:function () {
        this._super();
        var size=cc.winSize;


        //无限滚屏，至少两个图拼接
        // var bg=new cc.Sprite(res.bg1_jpg);
        // bg.x=size.width/2;
        // bg.y=size.height/2;
        // this.addChild(bg);
        // this.arr[0]=bg;
        //
        // var bg2=new cc.Sprite(res.bg1_jpg);
        // bg2.x=size.width/2;
        // bg2.y=size.height/2;
        // this.addChild(bg2);
        // this.arr[1]=bg2;

        for(var i=0;i<2;i++){
            var bg=new cc.Sprite(res.bg1_jpg);
            bg.x=size.width*0.5;
            bg.y=size.height*0.5+i*(bg.getBoundingBox().height);//***
            this.addChild(bg);
            this.arr[i]=bg;
        }
        this.schedule(this.bgCallBack,0.01);

        return true;

    },
    bgCallBack:function (dt) {
        for(var i in this.arr){
            if(this.arr[i].y<-720){
                this.arr[i].y+=2*1440;
            }
            this.arr[i].y-=2;
        }
    },
    var p1=new cc.Sprite()
});

var mainScene=cc.Scene.extend({
    ctor:function () {
        this._super();

        var layer=new mainLayer();
        this.addChild(layer);


    }
});