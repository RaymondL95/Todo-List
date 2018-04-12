//add listeners to ul to listen to li that arent created yet
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(function(){
		$(this).remove(); //use call back function to remove after fadeout
	});
	e.stopPropagation(); //stops bubbling up on listeners
});

$("input[type='text']").keypress(function(e){
	if(e.which === 13){ //13 is char code for enter
		var todoText = $(this).val();
		$(this).val("");
		//add a new li to all ul on page
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()
});