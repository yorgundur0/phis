var minimize = document.getElementById("minimize-win");
var square = document.getElementById("square-win");
var exit = document.getElementById("exit-win");
var titleBar = document.getElementById("title-bar-win");

////////////////// Hover listeners //////////////////
minimize.addEventListener('mouseover', function handleMouseOver() {
  minimize.style.backgroundColor = 'rgba(0, 0, 0, 0.09765625)';
  minimize.style.cursor = 'context-menu';
});

minimize.addEventListener('mouseout', function handleMouseOut() {
  minimize.style.backgroundColor = '#d6dae0';
  minimize.style.cursor = 'default';
});

square.addEventListener('mouseover', function handleMouseOver() {
  square.style.backgroundColor = 'rgba(0, 0, 0, 0.09765625)';
  square.style.cursor = 'context-menu';
});

square.addEventListener('mouseout', function handleMouseOut() {
  square.style.backgroundColor = '#d6dae0';
  square.style.cursor = 'default';
});

exit.addEventListener('mouseover', function handleMouseOver() {
  exit.style.backgroundColor = '#E81123';
  exit.style.cursor = 'context-menu';
});

exit.addEventListener('mouseout', function handleMouseOut() {
  exit.style.backgroundColor = '#d6dae0';
  exit.style.cursor = 'default';
});

titleBar.addEventListener('mouseover', function handleMouseOver() {
  titleBar.style.cursor = 'context-menu';
});

titleBar.addEventListener('mouseout', function handleMouseOver() {
  titleBar.style.cursor = 'default';
});


//////////////// Make window draggable start ////////////////
// Make the DIV element draggable:
var draggable = $('#window-win');
var title = $('#title-bar-win');

title.on('mousedown', function(e){
	var dr = $(draggable).addClass("drag");
	height = dr.outerHeight();
	width = dr.outerWidth();
	ypos = dr.offset().top + height - e.pageY,
	xpos = dr.offset().left + width - e.pageX;
	$(document.body).on('mousemove', function(e){
		var itop = e.pageY + ypos - height;
		var ileft = e.pageX + xpos - width;
		if(dr.hasClass("drag")){
			dr.offset({top: itop,left: ileft});
		}
	}).on('mouseup', function(e){
			dr.removeClass("drag");
	});
});
//////////////// Make window draggable end ////////////////


////////////////// Onclick listeners //////////////////
// X button functionality
$("#exit-win").click(function(){
    $("#window-win").css("display", "none");
  });

// Maximize button functionality
//$("#square-win").click(enlarge);

function enlarge(){
  if(square.classList.contains("enlarged")){
    $("#window-win").css("width", "40%");
    $("#title-bar-width-win").css('width', '100%');
    $("#content-win").css("width", "100%");
    $("#square-win").removeClass("enlarged");
  }
  else{
    $("#window-win").css("width", "70%");
    $("#title-bar-width-win").css('width', '100%');
    $("#content-win").css("width", "100%");
    $("#square-win").addClass("enlarged");
  }
}