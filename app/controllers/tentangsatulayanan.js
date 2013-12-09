function closeWindow(){
    $.win2.close();
}
function focusTextField() {
    $.itemField.focus();
}

function closeKeyboard(e) {
    e.source.blur();
}

function sayHi(e) {
		if(e.index == 0){
			Alloy.createController("daftarkategori").getView().open();
		}
		else if (e.index==2){
			Alloy.createController("tentangsatulayanan").getView().open();
		}
		else{
			alert('Hello from tab a index ' + e.index + '!');
		}
        
}