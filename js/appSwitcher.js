(function() {
	let links =  document.getElementsByClassName("appSwitcher")

	for (let i = links.length - 1; i >= 0; i--) {
		let attribute = links[i].getAttribute("appTarget")
		let element = document.getElementById(attribute)
		if (!attribute) {
			throw "missing attribute appTarget"
		}
		if (!element) {
			throw "missing element where appTarget = " + attribute
		}
		if (element.getAttribute("appState") !== 'visible') {
			element.style.display = "none"
		}
		links[i].addEventListener("click",function(e) {
			e.preventDefault()
			for (let i = links.length - 1; i >= 0; i--) {
				document.getElementById(links[i].getAttribute("appTarget")).style.display = "none"
			}
			document.getElementById(this.getAttribute("appTarget")).style.display = "block"
		})
	}
})()