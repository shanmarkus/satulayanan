function Controller() {
    function closeWindow() {
        $.win3.close();
        Alloy.createController("index").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "daftarkategori";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win3 = Ti.UI.createWindow({
        id: "win3",
        title: "Add Item",
        modal: "false",
        backgroundColor: "white"
    });
    $.__views.win3 && $.addTopLevelView($.__views.win3);
    $.__views.__alloyId0 = Ti.UI.createButton({
        width: "50%",
        top: "20dp",
        title: "Cancel",
        id: "__alloyId0"
    });
    $.__views.win3.add($.__views.__alloyId0);
    closeWindow ? $.__views.__alloyId0.addEventListener("click", closeWindow) : __defers["$.__views.__alloyId0!click!closeWindow"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId0!click!closeWindow"] && $.__views.__alloyId0.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;