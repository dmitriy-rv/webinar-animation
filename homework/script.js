var elem = document.getElementsByClassName('menu-item');

function startShow(){

	var start = document.getElementsByClassName('start');
	start[0].style.display = "none";
	var delay = 100;
    for (var i = 0; i < elem.length; i++) {
    	var el = elem[i];
    	el.style.transition = "600ms cubic-bezier(0.215, 0.61, 0.355, 1) "+delay+"ms";
    	el.classList.add("move"); 
    	delay = delay + 300;   	
    }	

    var text = document.getElementsByClassName('text');
    text[0].style.transition = "900ms cubic-bezier(0.215, 0.61, 0.355, 1) "+delay+"ms";
    text[0].classList.add("move"); 
}

for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', function(e) {
    	
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