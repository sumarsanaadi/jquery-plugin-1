(function ($) {
	$.fn.emailValidator = function () {
		this.keyup(function () {
			let regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/
			if (regex.test(this.value)) {
				$("#email")
					.removeClass("error")
					.addClass("success")
				$("#alert")
					.removeClass("error")
					.text("Email address is valid")
					.addClass("success")
			} else {
				$("#email")
					.addClass("error")
				$("#alert")
					.text("Email address is not valid")
					.addClass("error")
			}
		})
	}
})(jQuery)