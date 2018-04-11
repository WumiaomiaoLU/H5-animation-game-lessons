
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();

        var size=cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.GRAY));
        var sp1=new cc.Sprite(res.spider_png);
        sp1.setPosition(size.width/2,size.height/2);
        this.addChild(sp1);

        cc.spriteFrameCache.addSpriteFrames(res.enemy11_plist,res.enemy11_png);
        var sp2=new cc.Sprite("#11_L_at_00004.png");
        sp2.setPosition(size.width/2,size.height/4);
        this.addChild(sp2);

        var spriteFrame=cc.spriteFrameCache.getSpriteFrame("11_L_wk_00005.png");
        var sp3=new cc.Sprite(spriteFrame);
        sp3.setPosition(size.width/2,size.height/3*2);
        this.addChild(sp3);

        var moveMenuItem=new cc.MenuItemFont("移动",function () {
            sp3.y-=5;
            var rect=sp2.getBoundingBox();
            if(cc.rectContainsPoint(rect,sp3.getPosition())){
                cc.log("碰撞！！！");
            }
        },this);

        var menu=new cc.Menu(moveMenuItem);
        menu.setPosition(0,0);
        moveMenuItem.setPosition(size.width*0.5,size.height*0.1);
        this.addChild(menu);

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

