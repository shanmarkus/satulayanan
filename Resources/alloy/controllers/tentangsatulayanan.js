function Controller() {
    function closeWindow() {
        $.win2.close();
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
        id: "win2",
        title: "Add Item",
        modal: "true",
        backgroundColor: "white"
    });
    $.__views.win2 && $.addTopLevelView($.__views.win2);
    $.__views.__alloyId11 = Ti.UI.createButton({
        width: "50%",
        top: "20dp",
        title: "back",
        id: "__alloyId11"
    });
    $.__views.win2.add($.__views.__alloyId11);
    closeWindow ? $.__views.__alloyId11.addEventListener("click", closeWindow) : __defers["$.__views.__alloyId11!click!closeWindow"] = true;
    $.__views.__alloyId12 = Ti.UI.createLabel({
        text: '"Portal Satu Layanan" adalah laman yang dirancang dan dibangun untuk memberikan kemudahan kepada masyarakat dalam mendapatkan informasi mengenai layanan-layanan yang diberikan badan publik atau pemerintah kepada warga negaranya.\n\n			Satu Layanan merupakan salah satu inisiatif dari gerakan Open Government Indonesia yang mendorong lebih jauh nilai-nilai transparansi, partisipasi, dan inovasi di dalam birokrasi di Indonesia. Melalui ketiga nilai tersebut diharapkan kualitas dan profesionalisme pelayanan badan publik akan meningkat sehingga pada akhirnya seluruh manfaat akan dirasakan oleh warga negara Indonesia.\n\n			Satu Layanan sendiri merupakan hasil kolaborasi antara pemerintah yang dimotori oleh Unit Kerja Presiden bidang Pengawsan dan Pengendalian Pembangunan dibantu beberapa instansi lainnya, BUMN, Akademisi, sektor swasta, hingga para relawan.\n\n			Portal Satu Layanan ini dirancang untuk menghadapi abad informasi dan bertujuan untuk mewujudkan cita-cita adanya suatu pusat informasi layanan masyarakat sehari-hari.',
        id: "__alloyId12"
    });
    $.__views.win2.add($.__views.__alloyId12);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId11!click!closeWindow"] && $.__views.__alloyId11.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;