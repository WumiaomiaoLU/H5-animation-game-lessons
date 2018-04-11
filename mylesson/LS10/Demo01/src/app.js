
var HelloWorldLayer = cc.Layer.extend({
    sprites:[],
    ctor:function () {

        this._super();
        var size=cc.winSize;
        for (var i=0;i<3;i++){
            this.sprites[i]=new cc.Sprite("res/sprite"+(i+1)+".png");
            this.sprites[i].x=size.width*0.2;
            this.sprites[i].y=size.height*(0.3*i+0.2);
            this.addChild(this.sprites[i]);

        }
        // var action1=new cc.Place(size.width*0.3,size.height*0.2);
        // this.sprites[0].runAction(action1);

        //间隔动作
        //to到达什么位置
        //by移动多少位置
        var action1=new cc.moveBy(5,200,0);
        this.sprites[0].runAction(action1);
        this.sprites[1].runAction(cc.moveTo(10,400,400));//十秒的时间移动到400*400的位置
        this.sprites[2].runAction(cc.jumpBy(10,cc.p(300,0),50,4));//十秒钟，跳四次，跳跃高度50，width位移300，height位移0

        var menu=new cc.MenuItemFont("node1",function () {
            if(!isPaused){
                this.sprites[0].pause();
                isPaused=!isPaused;
                cc.log("pause sprites[0]");
            }
        },5);
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

