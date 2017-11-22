var keyData = {
			q: {
				sound: new Howl({
		  		src: ['drums/boom.wav']
				}),
				// color: '#1abc9c'
			},
			w: {
				sound: new Howl({
		  		src: ['drums/clap.wav']
				}),
				// color: '#2ecc71'
			},
			e: {
				sound: new Howl({
		  		src: ['drums/hihat.wav']
				}),
				// color: '#3498db'
			},
			r: {
				sound: new Howl({
		  		src: ['drums/kick.wav']
				}),
				// color: '#9b59b6'
			},
			t: {
				sound: new Howl({
				src: ['drums/openhat.wav']
				}),
			}
}

$(document).ready(function(){
	$(document).keydown(function(e){
		if(keyData[e.key]){
			var that = e.key
			$("." + that).addClass('pressed');
  		setTimeout(function(){
  			$("." + that).removeClass('pressed');
  		}, 70);
			keyData[e.key].sound.play();
		}
	});

	$(".circle").on("click", function() {
		var clicked = ($(this).text());
		keyData[clicked].sound.play();
		$("." + clicked).addClass('pressed');
  		setTimeout(function(){
  			$("." + clicked).removeClass('pressed');
  		}, 70);
		// break;
		// case 'w':
		// keyData['w'].sound.play();
		// $(".w").addClass('pressed');
  // 		setTimeout(function(){
  // 			$(".w").removeClass('pressed');
  // 		}, 70);
		// break;
		// case 'e':
		// keyData['e'].sound.play();
		// $(".e").addClass('pressed');
  // 		setTimeout(function(){
  // 			$(".e").removeClass('pressed');
  // 		}, 70);
		// break;
		// case 'r':
		// keyData['r'].sound.play();
		// $(".r").addClass('pressed');
  // 		setTimeout(function(){
  // 			$(".r").removeClass('pressed');
  // 		}, 70);
		// break;
		// case 't':
		// keyData['t'].sound.play();
		// $(".t").addClass('pressed');
  // 		setTimeout(function(){
  // 			$(".t").removeClass('pressed');
  // 		}, 70);
		// break;
 
  	// }
  	});
});
