
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,

    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.n=0;
        var size = cc.winSize;

        var labelTTF=new cc.LabelTTF("","","64");
        labelTTF.setAnchorPoint(0,1);
        labelTTF.x=50;
        labelTTF.y=size.height-50;

        this.addChild(labelTTF);
        this.labelTTF=labelTTF;
        labelTTF.setFontSize(30);
        this.schedule(this.myTime,1,cc.REPEAT_FOREVER,0)



        return true;
    },
    myTime:function () {
        this.labelTTF.setString("玩家："+this.n);
        if(this.n<60){
            this.n+=1;

        }else {
            this.n=0;
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

