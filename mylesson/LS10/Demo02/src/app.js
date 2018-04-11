
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size=cc.winSize;

        this.addChild(new cc.LayerColor(cc.color.GRAY));
        cc.spriteFrameCache.addSpriteFrames(res.sp_animation_plist);
        sp=new cc.Sprite("#grossini_dance_generic_01.png");
        sp.setPosition(cc.p(size.width*0.2,size.height*0.5));
        this.addChild(sp);

        // var animation=new cc.Animation();
        // for(var i=1;i<15;i++){
        //     var frameName=res['sp_animation_'+i];
        //     animation.addSpriteFrameWithFile(frameName);
        // }
        // animation.setDelayPerUnit(1/5);
        // animation.setRestoreOriginalFrame(true);
        // var animateAction=cc.animate(animation);
        // sp.runAction(cc.repeatForever(animateAction));

        var spriteFrames=[];
        for(var i=1;i<15;i++){
            var frameName="grossini_dance_generic_"+((i<10)?("0"+i):i)+".png";
            var frame=cc.spriteFrameCache.getSpriteFrame(frameName);
            spriteFrames.push(frame);
        }
        var animation=new cc.Animation(spriteFrames,0.2,2);
        animation.setRestoreOriginalFrame(true);
        var animateAction=cc.animate(animation);
        sp.runAction(animateAction.repeatForever());

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

