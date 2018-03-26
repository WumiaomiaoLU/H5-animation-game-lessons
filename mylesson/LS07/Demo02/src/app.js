
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();


        var size = cc.winSize;
        var startMenuItem=new cc.MenuItemFont("开始",function () {
            cc.log('开始按钮');
        },this);

        var setMenuItem=new cc.MenuItemFont("设置",function () {
            cc.log('设置按钮');
        },this);

        var ttLabl=new cc.LabelTTF("其他","",30);
        ttLabl.setFontFillColor(cc.color.RED);
        ttLabl.enableStroke(cc.color.YELLOW,2);
        ttLabl.enableShadow(cc.color.WHITE,15,15,15);

        var otherMenuItem=new cc.MenuItemLabel(ttLabl,function () {
            cc.log("其他按钮");
        },this);

        var menu=new cc.Menu(startMenuItem,setMenuItem,otherMenuItem);
        this.addChild(menu);
        menu.x=0;
        menu.y=0;

        startMenuItem.x=size.width/5;
        startMenuItem.y=size.height/2;

        setMenuItem.x=size.width/5*3;
        setMenuItem.y=size.height/2;

        otherMenuItem.x=size.width/5*5;
        otherMenuItem.y=size.height/2;
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

