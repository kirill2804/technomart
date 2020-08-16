var map_sm = document.querySelector(".contacts-map");
		var bg = document.querySelector(".background");
		var modal_map = document.querySelector(".modal-map");
		var modal_close = modal_map.querySelector(".modal-close");


		function background(){
			bg.classList.remove("bg-color")
			bg.classList.remove("no-bg")
		}

		map_sm.addEventListener("click", function(evt){

			evt.preventDefault()

			modal_map.classList.add("modal-show")

			bg.classList.add("bg-color")
			
			document.body.classList.add("scroll-hidden")

		})


		modal_close.addEventListener("click", function(evt){

			evt.preventDefault()

			modal_map.classList.remove("modal-show")

			if(bg.classList.contains("bg-color")){
				bg.classList.add("no-bg")
				setTimeout(background, 300)
			}

			document.body.classList.remove("scroll-hidden")

		})


		window.addEventListener("keydown", function(evt){

			if(modal_map.classList.contains("modal-show")){

				if(evt.keyCode === 27){
					evt.preventDefault()

					modal_map.classList.remove("modal-show")

					if(bg.classList.contains("bg-color")){
						bg.classList.add("no-bg")
						setTimeout(background, 300)
					}

					document.body.classList.remove("scroll-hidden")
				}
			}
		})