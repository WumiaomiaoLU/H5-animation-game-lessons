
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var size=cc.winSize;
        var layer1=new cc.LayerColor(cc.color.YELLOW,200,200);
        layer1.ignoreAnchor=false;
        layer1.x=size.width/6;
        layer1.y=size.height/2;
        this.addChild(layer1);

        var layer2=new cc.LayerColor(cc.color.RED,200,200);
        layer2.ignoreAnchor=false;
        layer2.x=0;
        layer2.y=0;
        layer1.addChild(layer2);

        var layer3=new cc.LayerColor(cc.color.BLUE,200,200);
        layer3.ignoreAnchor=false;
        // layer3.x=size.width/6*5;
        // layer3.y=size.height/2;
        layer3.setPosition(0,0);
        layer3.setPosition(cc.p(0,0));
        this.addChild(layer3);

        layer1.runAction(cc.moveBy(5,200,0));
        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        // var size = cc.winSize;
        //
        // /////////////////////////////
        // // 3. add your codes below...
        // // add a label shows "Hello World"
        // // create and initialize a label
        // var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        // // position the label on the center of the screen
        // helloLabel.x = size.width / 2;
        // helloLabel.y = size.height / 2 + 200;
        // // add the label as a child to this layer
        // this.addChild(helloLabel, 5);
        //
        // // add "HelloWorld" splash screen"
        // this.sprite = new cc.Sprite(res.HelloWorld_png);
        // this.sprite.attr({
        //     x: size.width / 2,
        //     y: size.height / 2
        // });
        // this.addChild(this.sprite, 0);

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

