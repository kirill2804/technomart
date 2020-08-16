		var bg = document.querySelector(".background");
		var contacts_btn = document.querySelector(".contacts-button");

		
		var modal_message = document.querySelector(".modal-message");
		var modal_close = modal_message.querySelector(".modal-close");

		var form = document.querySelector(".form");
		var input_name = form.querySelector(".form-message-name");
		var input_email = form.querySelector(".form-message-email");
		var input_msg = form.querySelector(".form-message-text");

		function background(){
			bg.classList.remove("bg-color")
			bg.classList.remove("no-bg")
		}

		var logininfo = {}
		var storage = ""
		var isStoragesupport = true

		    try{
				var storage = JSON.parse(localStorage.getItem("formdata"))
		    }catch(err){
		    	isStoragesupport = false
		    }


		contacts_btn.addEventListener("click", function(evt){

			evt.preventDefault()

			modal_message.classList.remove("modal-error");
			modal_message.classList.add("modal-show")

			background()
			bg.classList.add("bg-color")
			
			document.body.classList.add("scroll-hidden")

			if(storage){
				input_name.value = storage.name
				input_email.value = storage.email
				input_msg.focus()
			}else{
				input_name.focus()
			}

		})


		form.addEventListener("submit", function(evt){

			if(!input_name.value || !input_email.value || !input_msg.value){
				evt.preventDefault()
				modal_message.classList.remove("modal-error");
				modal_message.offsetWidth = modal_message.offsetWidth
				modal_message.classList.add("modal-error");

				console.log("Не все поля формы заполнены!");

			}else{
				if(isStoragesupport){
					evt.preventDefault()
					
					logininfo.name = input_name.value
					logininfo.email = input_email.value
					localStorage.setItem("formdata", JSON.stringify(logininfo))

					console.log("Форма успешно отправлена!")

					modal_message.classList.remove("modal-show")

					if(bg.classList.contains("bg-color")){
						bg.classList.add("no-bg")
						setTimeout(background, 300)
					}

					document.body.classList.remove("scroll-hidden")
					modal_message.classList.remove("modal-error");
				}
			}
			
		})


		modal_close.addEventListener("click", function(evt){

			evt.preventDefault()

			modal_message.classList.remove("modal-show")

			if(bg.classList.contains("bg-color")){
				bg.classList.add("no-bg")
				setTimeout(background, 300)
			}

			document.body.classList.remove("scroll-hidden")
			modal_message.classList.remove("modal-error");
		})


		window.addEventListener("keydown", function(evt){

			if(modal_message.classList.contains("modal-show")){

				if(evt.keyCode === 27){
					evt.preventDefault()

					modal_message.classList.remove("modal-show")

					if(bg.classList.contains("bg-color")){
						bg.classList.add("no-bg")
						setTimeout(background, 300)
					}

					document.body.classList.remove("scroll-hidden")
					modal_message.classList.remove("modal-error");
				}
			}
		})