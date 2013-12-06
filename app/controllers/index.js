$.index.open();

function doClick(e) {
    alert("working");
}

function showTasks(e) {
        if (typeof e.index !== 'undefined' && e.index !== null) {
                whereIndex = e.index; // TabbedBar
        } else {
                whereIndex = INDEXES[e.source.title]; // Android menu
        }
        todos.fetch();
}


function daftarkategori() {
	Alloy.createController("daftarkategori").getView().open();
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