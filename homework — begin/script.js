var elem = document.getElementsByClassName('menu-item');

for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', function(e) {
    	console.log(e);
    	
    	for (var j = 0; j < elem.length; j++) {
    		elem[j].classList.remove("active");
    	}
    	e.path[1].classList.add("active");

		var text = document.getElementsByClassName('text-item');

		for (var k = 0; k < text.length; k++) {
    		text[k].classList.remove("active");

    		if (text[k].classList[0] == e.path[1].id){
    			text[k].classList.add("active");
    		}
    	}
	});
}