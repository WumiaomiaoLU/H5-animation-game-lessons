var startLayer=cc.Layer.extend({
    ctor:function () {
        this._super();
        var size=cc.winSize;
        var startLabel=new cc.LabelTTF("开始","",50);
        startLabel.setFontFillColor(cc.color.BLUE);
        startLabel.enableStroke(cc.color.WHITE,5);

        var startMenuItem=new cc.MenuItemLabel(startLabel,function () {
            cc.log("游戏主场！！");
            cc.director.runScene(new mainScene());//跳转到主场景
        },this);
        var menu=new cc.Menu(startMenuItem);
        menu.y=size.height*0.2;
        this.addChild(menu);

        //图标
        var logo=new cc.LabelTTF("飞机游戏","",80);
        logo.setFontFillColor(cc.color.RED);
        logo.enableStroke(cc.color.YELLOW,5);
        logo.setPosition(size.width*0.5,size.height*0.8);
        this.addChild(logo);

        return true;
    }
});



var startScene=cc.Scene.extend({
    ctor:function () {
        this._super();
        //var layer=new cc.LayerColor(cc.color.RED);
        var layer=new startLayer();
        this.addChild(layer);
    }
});