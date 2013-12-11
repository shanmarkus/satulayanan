function Controller() {
    function sayHi(e) {
        0 == e.index ? Alloy.createController("daftarkategori").getView().open() : 2 == e.index ? Alloy.createController("tentangsatulayanan").getView().open() : alert("Hello from tab a index " + e.index + "!");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tentangsatulayanan";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win2 = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "win2",
        title: "Add Item",
        modal: "true"
    });
    $.__views.win2 && $.addTopLevelView($.__views.win2);
    $.__views.header = Ti.UI.createView({
        top: 0,
        height: "40dp",
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
    $.__views.win2.add($.__views.header);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "12dp"
        },
        text: "Satu Layanan",
        id: "__alloyId11"
    });
    $.__views.header.add($.__views.__alloyId11);
    $.__views.menu = Ti.UI.createScrollView({
        top: "40dp",
        bottom: "50dp",
        height: "390dp",
        layout: "vertical",
        contentWidth: "auto",
        id: "menu",
        showVerticalScrollIndicator: "true",
        showHorizontalScrollIndicator: "false"
    });
    $.__views.win2.add($.__views.menu);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "12dp"
        },
        text: '"Portal Satu Layanan" adalah laman yang dirancang dan dibangun untuk memberikan kemudahan kepada masyarakat dalam mendapatkan informasi mengenai layanan-layanan yang diberikan badan publik atau pemerintah kepada warga negaranya.\n\n\nSatu Layanan merupakan salah satu inisiatif dari gerakan Open Government Indonesia yang mendorong lebih jauh nilai-nilai transparansi, partisipasi, dan inovasi di dalam birokrasi di Indonesia.\n\n\nMelalui ketiga nilai tersebut diharapkan kualitas dan profesionalisme pelayanan badan publik akan meningkat sehingga pada akhirnya seluruh manfaat akan dirasakan oleh warga negara Indonesia.\n\n\nSatu Layanan sendiri merupakan hasil kolaborasi antara pemerintah yang dimotori oleh Unit Kerja Presiden bidang Pengawsan dan Pengendalian Pembangunan dibantu beberapa instansi lainnya, BUMN, Akademisi, sektor swasta, hingga para relawan.\n\n\nPortal Satu Layanan ini dirancang untuk menghadapi abad informasi dan bertujuan untuk mewujudkan cita-cita adanya suatu pusat informasi layanan masyarakat sehari-hari.',
        id: "__alloyId12"
    });
    $.__views.menu.add($.__views.__alloyId12);
    $.__views.footer = Ti.UI.createView({
        bottom: 0,
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
        id: "footer"
    });
    $.__views.win2.add($.__views.footer);
    var __alloyId14 = [];
    var __alloyId18 = {
        title: "Daftar Kategori",
        ns: "Alloy.Abstract"
    };
    __alloyId14.push(__alloyId18);
    var __alloyId19 = {
        title: "Daftar Modul Layanan",
        ns: "Alloy.Abstract"
    };
    __alloyId14.push(__alloyId19);
    var __alloyId20 = {
        title: "Tentang Satu Layanan",
        ns: "Alloy.Abstract"
    };
    __alloyId14.push(__alloyId20);
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
        labels: __alloyId14,
        id: "tabbedbar"
    });
    $.__views.footer.add($.__views.tabbedbar);
    sayHi ? $.__views.tabbedbar.addEventListener("click", sayHi) : __defers["$.__views.tabbedbar!click!sayHi"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.tabbedbar!click!sayHi"] && $.__views.tabbedbar.addEventListener("click", sayHi);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;