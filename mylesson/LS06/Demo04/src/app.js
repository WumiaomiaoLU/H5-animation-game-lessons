
var HelloWorldLayer = cc.Layer.extend({
    layer:null,

    ctor:function () {
        this._super();
        this.speed=0;
        var size = cc.winSize;

        var layer1=new cc.LayerColor(cc.color.RED,50,50);
        layer1.setPosition(0,size.height-50);

        this.layer=layer1;//指向layer1
        this.addChild(this.layer);


        //this.scheduleUpdate();六十分之一秒
        this.schedule(this.myCallBack,0.02,cc.REPEAT_FOREVER,0);
        return true;

    },
    // update:function (dt) {
    //    // cc.log(dt);
    //     this.layer.x+1;
    //
    // },

    //自有落体
   myCallBack:function (dt) {
        //向右移动
        // this.layer.x+=10;
        // if(this.layer.x>400){
        //     this.unschedule(this.myCallBack);
        // }

        this.layer.y-=this.speed;
        if(this.layer.y<0){
            this.speed=-this.speed;
            cc.log(this.speed);
        }else{
            this.speed+=0.2;
        }
   }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

