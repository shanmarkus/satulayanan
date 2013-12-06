function closeWindow(){
    $.win3.close();
    Alloy.createController("index").getView().open();
}


function closeKeyboard(e) {
    e.source.blur();
}

