var mainLayer=cc.Layer.extend({
    ctor:function () {
        this._super();
        var layer=new cc.LayerColor(cc.color.YELLOW);
        this.addChild(layer);


        var size=cc.winSize;
        var label=new cc.LabelTTF("第一场景","",50);
        label.x=size.width*0.5;
        label.y=size.height*0.7;
        this.addChild(label);

        var menuItem=new cc.MenuItemFont("第二场景",function () {
            cc.director.runScene(new cc.TransitionFade(2,new overScene()));
        },this);

        menuItem.setFontSize(50);
        var menu=new cc.Menu(menuItem);
        menu.setPosition(0,0);
        menuItem.x=size.width*0.5;
        menuItem.y=size.height*0.3;
        this.addChild(menu);
    }
});

var bgLayer=cc.Layer.extend({
    ctor:function () {
        this._super;
        var gdLayer1=new cc.LayerGradient(cc.color.RED,new cc.Color(255,0,0,0),cc.p(0,-1));
        var gdLayer=new cc.LayerGradient(cc.color.RED,new cc.Color(255,0,0,0),cc.p(-1,-1),
            [{p:0,color:cc.color.YELLOW},
                {p:.5,color:new cc.Color(0,0,0,0)},
                {p:1,color:cc.color.BLUE}]);
        this.addChild(gdLayer);
    }
});


var mainScene=cc.Scene.extend({
    ctor:function () {
        this._super();

        var bglayer=new bgLayer();
        this.addChild(bglayer);

        var layer=new mainLayer();
        this.addChild(layer);


    }
});