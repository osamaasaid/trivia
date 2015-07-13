$(function() {
	console.log( "ready!" );
	var score = [0,0];
	var names = ['player one','player two'];
	var turn = 0;
	var correct = $('.correct');
	var wrong = $('.wrong');

	$('.refresh').click(function() {
		location.reload();
	});
	
	


	correct.click(function(){
		$(this).css({'color':'green'})
		console.log('yes');
		score[turn]+=5;
		
		// swal({   title: "Correct!",   
		// 	text: "Good job. Go again.", 
		// 	type: "success",   
		// 	confirmButtonText: "Next question" });	

	if (score[0] === 30) {
		swal({   title: "WINNER!!",   
			text: "CONGRATULATIONS, PLAYER1!!",
			type: "success",   
			confirmButtonText: "THANKS!" });	

	}
	else if (score[1] === 30) {
		swal({   title: "WINNER!!",   
			text: "CONGRATULATIONS, PLAYER2!!", 
			type: "success",   
			confirmButtonText: "THANKS!" });	
		
		

	}else{
		swal({   title: "Correct!",   
			text: "Good job. Go again.", 
			type: "success",   
			confirmButtonText: "Next question" });	

	}



		// //TODO: hide the question they answered (so it can't be answered again)
		$(this).attr("disabled","disabled");

		
		console.log('player one score: ', score[0], 'player two score: ', score[1]);


	});


	
	


	wrong.click(function(){

		//change turn
		turn = Math.abs(turn-1);

		swal({   title: "WRONG",   
			text: "Wrong answer. It is now "+ names[turn]+"'s turn.", 
			type: "error",   
			confirmButtonText: "Cool" });
	})

	

});

	// $('.correct').animate('.correct')

 // console.log('good job!!!!!');





