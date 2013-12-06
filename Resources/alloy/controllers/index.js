function Controller() {
    function sayHi(e) {
        0 == e.index ? Alloy.createController("daftarkategori").getView().open() : 2 == e.index ? Alloy.createController("tentangsatulayanan").getView().open() : alert("Hello from tab a index " + e.index + "!");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.header = Ti.UI.createView({
        top: Alloy.Globals.top,
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#a00",
                offset: 0
            }, {
                color: "#800",
                offset: 1
            } ]
        },
        id: "header"
    });
    $.__views.index.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff",
        left: "10dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Satu Layanan",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.__alloyId2 = Ti.UI.createView({
        height: "48dp",
        width: "3dp",
        top: "1dp",
        right: "50dp",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "100%",
                y: "0%"
            },
            colors: [ {
                color: "#666",
                offset: 0
            }, {
                color: "#ccc",
                offset: .5
            }, {
                color: "#666",
                offset: 1
            } ]
        },
        id: "__alloyId2"
    });
    $.__views.header.add($.__views.__alloyId2);
    $.__views.footer = Ti.UI.createView({
        bottom: 0,
        height: "46dp",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#a00",
                offset: 0
            }, {
                color: "#800",
                offset: 1
            } ]
        },
        id: "footer"
    });
    $.__views.index.add($.__views.footer);
    var __alloyId4 = [];
    var __alloyId8 = {
        title: "Daftar Kategori",
        ns: "Alloy.Abstract"
    };
    __alloyId4.push(__alloyId8);
    var __alloyId9 = {
        title: "Daftar Modul Layanan",
        ns: "Alloy.Abstract"
    };
    __alloyId4.push(__alloyId9);
    var __alloyId10 = {
        title: "Tentang Satu Layanan",
        ns: "Alloy.Abstract"
    };
    __alloyId4.push(__alloyId10);
    $.__views.tabbedbar = Ti.UI.iOS.createTabbedBar({
        style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
        backgroundColor: "#fff",
        index: 1,
        height: 40,
        left: 20,
        right: 20,
        font: {
            fontFamily: "Helvetica",
            fontSize: "4dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        labels: __alloyId4,
        id: "tabbedbar"
    });
    $.__views.footer.add($.__views.tabbedbar);
    sayHi ? $.__views.tabbedbar.addEventListener("click", sayHi) : __defers["$.__views.tabbedbar!click!sayHi"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.tabbedbar!click!sayHi"] && $.__views.tabbedbar.addEventListener("click", sayHi);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;