		var btn_buy = document.querySelectorAll(".button-buy")
		var bg = document.querySelector(".background");
		var modal_info = document.querySelector(".modal-info")
		var btn_cont =  modal_info.querySelector(".btn-continue-shopping");
		var basket =  document.querySelector(".order-navigation-basket");
		var modal_close = modal_info.querySelector(".modal-close");


		function background(){
			bg.classList.remove("bg-color")
			bg.classList.remove("no-bg")
		}


		for(var i = 0; i < btn_buy.length; i++){
			modal_active(i)
		}


		function modal_active(item){

		btn_buy[item].addEventListener("click", function(evt){

			evt.preventDefault()

			modal_info.classList.add("modal-show")

			basket.classList.add("product-availability")

			bg.classList.add("bg-color")

			document.body.classList.add("scroll-hidden")
		})

	}


		btn_cont.addEventListener("click", function(evt){

			evt.preventDefault()

			modal_info.classList.remove("modal-show")

			if(bg.classList.contains("bg-color")){
				bg.classList.add("no-bg")
				setTimeout(background, 300)
			}

			document.body.classList.remove("scroll-hidden")

		})


		modal_close.addEventListener("click", function(evt){

			evt.preventDefault()

			modal_info.classList.remove("modal-show")

			if(bg.classList.contains("bg-color")){
				bg.classList.add("no-bg")
				setTimeout(background, 300)
			}

			document.body.classList.remove("scroll-hidden")

		})


		window.addEventListener("keydown", function(evt){

			if(modal_info.classList.contains("modal-show")){

				if(evt.keyCode === 27){
					evt.preventDefault()

					modal_info.classList.remove("modal-show")

					if(bg.classList.contains("bg-color")){
						bg.classList.add("no-bg")
						setTimeout(background, 300)
					}

					document.body.classList.remove("scroll-hidden")
				}
			}
		})