;(function($) {
	$(document).ready(function() {
		var position;
		var target;
		var tween;
		var el;
		var position1;
		var target1;
		var tween1;
		var el1;

		var windowWidth = $(window).width();

		if(windowWidth > 992) {

			var animations = [
				{
					els: ["arm-1", "can-1"],
					final_pos: { x: [0, -100, -105, -800], y: [0, -300, -300, -1000], rotation: 0},
					time: 2000,
					delay: 1200
				},
				{
					els: ["arm-2", "can-2"],
					final_pos: { x: [0, -250, -250, -500], y:[0, -300, -300, -1000], rotation: 0},
					time: 2000,
					delay: 2700
				},
				{			
					els: ["arm-3", "can-3"],
					final_pos: { x: [0, -100, -100, -200], y: [0, -300, -300, -1000], rotation: 0},
					time: 2000,
					delay: 4200
				},
				{
					els: ["arm-4", "can-4"],
					final_pos: { x: [0, 100, 105, -200], y: [0, -300, -300, -1000], rotation: 0},
					time: 2000,
					delay: 5700
				},
				{
					els: ["arm-5", "can-5"],
					final_pos: { x: [0, 200, 200, 400], y: [0, -300, -300, -1000], rotation: 0},
					time: 2000,
					delay: 7200
				}
			];

			$('#where').waypoint(function(direction){
			    init();
				animate();
			    this.destroy()
			});			

			function init() {
				position = {x: 0, y: 0, rotation: 0};
				position1 = {x: 0, y: 0, rotation: 0};	
				animations.forEach(function(animation) {											
					tween = new TWEEN.Tween(position)
						.to(animation.final_pos, animation.time)						
						.delay(animation.delay)
						.onUpdate(function() {	
							el = animation.els[0]						
							//animation.els.forEach(function(el) {
								target = document.getElementById(el);
								target.style.left = position.x + 'px';
								target.style.top = position.y + 'px';
								target.style.webkitTransform = 'rotate(' + Math.floor(position.rotation) + 'deg)';
								target.style.MozTransform = 'rotate(' + Math.floor(position.rotation) + 'deg)';
							//});							
						});
						tween.start();

					
					tween1 = new TWEEN.Tween(position1)
						.to(animation.final_pos, animation.time)						
						.delay(animation.delay)
						.onUpdate(function() {							
							//animation.els.forEach(function(el) {
								var el1 = animation.els[1]
								target1 = document.getElementById(el1);
								target1.style.left = position1.x + 'px';
								target1.style.top = position1.y + 'px';
								target1.style.webkitTransform = 'rotate(' + Math.floor(position1.rotation) + 'deg)';
								target1.style.MozTransform = 'rotate(' + Math.floor(position1.rotation) + 'deg)';
							//});							
						});
						tween1.start();
				});

				setTimeout(function(){ 
					$('.cans').fadeIn();
					$('.animated-img').css({
						zIndex: "0"
					});
				}, 9500);
			}
			//If we register the callback animate, but the TWEEN.update(time) returns false, 
			//cancel/unregister the handler
			function animate( time ) {
				var id = requestAnimationFrame(animate);			
				var result = TWEEN.update(time);
				if(!result) cancelAnimationFrame(id);
			}
		}

		$(window).resize(function() {
			var windowWidth = $(window).width();
			if(windowWidth < 960) {
				whereHeight = $('#where').outerHeight();
			}
		});
	});

})(jQuery);