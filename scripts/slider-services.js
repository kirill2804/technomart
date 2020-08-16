	var btn_services = document.querySelectorAll(".services-item");
	var services_desc = document.querySelectorAll(".services-desc li");


		for(var i = 0; i < btn_services.length; i++){

			slider_services(i)

		}

		function slider_services(item){

			btn_services[item].addEventListener("click", function(evt){

				evt.preventDefault();

				for(var t = 0; t < btn_services.length; t++){
					
					if(btn_services[t].classList.contains("services-current")){

						btn_services[t].classList.remove("services-current")
						this.classList.add("services-current")
						

						services_desc[t].classList.add("visually-hidden")
						services_desc[item].classList.remove("visually-hidden")

						break
					}
				}
			})
		}