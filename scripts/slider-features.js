	var slider_content = document.querySelectorAll(".features-slider-item");
	var btn_radio = document.querySelectorAll(".btn-radio");
	var btn_controls = document.querySelectorAll(".btn-control");


		for(var i = 0; i < btn_radio.length; i++){

			slider_radio(i)

			slider_controls(i)
		}

		function slider_radio(item){

			btn_radio[item].addEventListener("click", function(evt){

				evt.preventDefault();

				for(var t = 0; t < btn_radio.length; t++){
					
					
					if(btn_radio[t].classList.contains("btn-radio-current")){

						btn_radio[t].classList.remove("btn-radio-current")
						this.classList.add("btn-radio-current")
						

						slider_content[t].classList.remove("visually-hidden")
						slider_content[item].classList.add("visually-hidden")

						break
					}
				}

			})
		}



		function slider_controls(item){

			btn_controls[item].addEventListener("click", function(evt){

			for(var t = 0; t < btn_controls.length; t++){
					
					if(slider_content[t].classList.contains("visually-hidden")){

						btn_radio[t].classList.remove("btn-radio-current")
						btn_radio[item].classList.add("btn-radio-current")

						slider_content[t].classList.remove("visually-hidden")
						slider_content[item].classList.add("visually-hidden")

						break
					}
				}

			})
		}







		