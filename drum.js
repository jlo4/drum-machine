
// var keyData = {
// 			q: {
// 				sound: new Howl({
// 		  		src: ['sounds/bubbles.mp3']
// 				}),
// 				// color: '#1abc9c'
// 			},
// 			w: {
// 				sound: new Howl({
// 		  		src: ['sounds/clay.mp3']
// 				}),
// 				// color: '#2ecc71'
// 			},
// 			e: {
// 				sound: new Howl({
// 		  		src: ['sounds/confetti.mp3']
// 				}),
// 				// color: '#3498db'
// 			},
// 			r: {
// 				sound: new Howl({
// 		  		src: ['sounds/corona.mp3']
// 				}),
// 				// color: '#9b59b6'
// 			}
// }

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
			}
}

	// var circles = [];
// document.onkeypress = function(e) {
//     // console.log(e.which);

// 	// function onKeyDown(event) {
// 			if(keyData[event.key]){
// 	// 			// var maxPoint = new Point(view.size.width, view.size.height);
// 	// 			// var randomPoint = Point.random();
// 	// 			// var point = maxPoint * randomPoint;
// 	// 			// var newCircle = new Path.Circle(point, 300)
// 	// 			// newCircle.fillColor = keyData[event.key].color;
// 				keyData[event.key].sound.play();
// 				// console.log(keyData[event.key]);
// 	// 			// circles.push(newCircle);
// 			}
// 	// }

// 	// function onFrame(event){
// 	// 		for(var i = 0; i < circles.length; i++){
// 	// 		    circles[i].scale(0.9);
// 	// 		    circles[i].fillColor.hue += 1;
// 	// 		 	if(circles[i].area < 1){
// 	// 		      circles[i].remove();
// 	// 		      circles.splice(i, 1);
// 	// 		      console.log(circles);
//  //    			}
//  //  			}
// 	// }
// };

$(document).ready(function(){
	$(document).keydown(function(e){
		if(keyData[event.key]){
			keyData[event.key].sound.play();
		}
	});

});