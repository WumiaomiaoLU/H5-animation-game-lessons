var overLayer=cc.Layer.extend({
    ctor:function () {
        this._super();
        var layer=new cc.LayerColor(cc.color.BLUE);
        this.addChild(layer);


        var size=cc.winSize;
        var label=new cc.LabelTTF("第一场景","",50);
        label.x=size.width*0.5;
        label.y=size.height*0.7;
        this.addChild(label);

        var menuItem=new cc.MenuItemFont("第二场景",function () {
            cc.director.runScene(new cc.TransitionFade(2,new startScene()));
        },this);

        menuItem.setFontSize(50);
        var menu=new cc.Menu(menuItem);
        menu.setPosition(0,0);
        menuItem.x=size.width*0.5;
        menuItem.y=size.height*0.3;
        this.addChild(menu);
    }
});



var overScene=cc.Scene.extend({
    ctor:function () {
        this._super();
        //var layer=new cc.LayerColor(cc.color.RED);
        var layer=new overLayer();
        this.addChild(layer);
    }
});