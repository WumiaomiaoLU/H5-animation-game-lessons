
var HelloWorldLayer = cc.Layer.extend({

    ctor:function () {

        this._super();
        var size=cc.winSize;
        // var layer1=new cc.LayerColor(cc.color.RED,200,200);
        // var layer2=new cc.LayerColor(cc.color.YELLOW,200,200);
        // var layer3=new cc.LayerColor(cc.color.BLUE,200,200);
        // layer1.ignoreAnchor=false;
        // layer2.ignoreAnchor=false;
        // layer3.ignoreAnchor=false;
        //
        // layer1.setAnchorPoint(0,0);
        // layer2.setAnchorPoint(1,1);
        // layer3.setAnchorPoint(1,0);
        //
        // layer1.setPosition(0,0);
        // layer2.setPosition(size.width-50,size.height-50);
        // layer3.setPosition(size.width-50,50);
        //
        // // layer1.rotation=45;
        // // layer2.rotation=45;
        //
        // this.addChild(layer1);
        // this.addChild(layer2);
        // this.addChild(layer3);

        // var node1=new cc.Sprite(res.RED_png);
        // node1.setAnchorPoint(cc.p(1,1));
        // node1.x=200;
        // node1.y=200;
        // this.addChild(node1);
        //
        // var node2=new cc.Sprite(res.YELLOW_png);
        // node1.setAnchorPoint(cc.p(0.5,0.5));
        // node1.x=50;
        // node1.y=50;
        // this.addChild(node2);

        var node3=new cc.Sprite(res.RED_png);
        node3.setAnchorPoint(cc.p(1,1));
        node3.x=200;
        node3.y=200;
        this.addChild(node3);

        var node4=new cc.Sprite(res.YELLOW_png);
        node4.setAnchorPoint(cc.p(0.5,0.5));
        node4.x=0;
        node4.y=0;
        node3.addChild(node4);

        var point=node3.convertToNodeSpaceAR(node4.getPosition());
        cc.log(point.x);
        cc.log(point.y);
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

