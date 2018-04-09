/*
    Simple script for a slideshow inside a website
    Copyright (C) <year> <name of author>

    This program is free software; you can redistribute it and/or modify it under
    the terms of the GNU General Public License as published by the Free Software Foundation;
    either version 2 of the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
    or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along with this program;
    if not, write to the Free Software Foundation, Inc., 59 Temple Place, Suite 330, Boston,
    MA 02111-1307 USA
*/


/*
	the slideshow's section should be like this:

	<section id="slideshow">
		<i class="fa fa-arrow-left"></i>
		<div>
			<section><img sliderID="1" src="imgs/Servicios de Protecciòn Radiológica.png"></section>
			<section><img sliderID="2" src="imgs/Proyectos, venta y mantenimiento de equipos.png"></section>
			<section><img sliderID="3" src="imgs/servicios de consultoría.png"></section>
			<section><img sliderID="4" src="imgs/servicio de centro de imágenes.png"></section>
		</div>
		<i class="fa fa-arrow-right"></i>	
	</section>
*/
(function() {
	let app = {
		frame     : document.getElementById('slideshow'),
		imgs      : document.querySelectorAll('#slideshow img'),
		container : document.querySelector('#slideshow div'),
		left      : document.querySelector('#slideshow .fa-arrow-left'),
		right     : document.querySelector('#slideshow .fa-arrow-right')
	}
	let css = document.createElement("style")
	css.type = "text/css"
	css.innerHTML = "#slideshow{position:relative;height:90vh;width:80vw;overflow:hidden;display:block}"+
		"#slideshow img{height:90vh;z-index:2;max-width:80vw}"+
		"#slideshow .fa{color:silver;position:absolute;top:42.5vh;font-size:5vh;height:5vh;cursor:pointer}"+
		"#slideshow .fa-arrow-left{left:0;z-index:3}"+
		"#slideshow .fa-arrow-right{left:100%;transform:translateX(-100%)}"+
		"#slideshow *{transition-duration:1s}"+
		"#slideshow section{width:80vw;display:inline-block;text-align:center}"+
		"#slideshow div{transition-timing-function:linear;white-space:nowrap;height:90vh;width:"+app.imgs.length*100+"%}"
	let currentImg = 0
	document.body.appendChild(css)
	let slide = function() {
		let length = app.imgs.length
		if (currentImg===length-1){
			app.container.style.transform="translateX(0%)"
			currentImg = 0
		}else{
			app.container.style.transform="translateX(-"+((currentImg+1)*100/length)+"%)"
			currentImg++
		}
	}
	let slideBack = function() {
		let length = app.imgs.length
		if (currentImg===0){
			app.container.style.transform="translateX(-"+((length-1)*100/length)+"%)"
			currentImg = length-1
		}else{
			app.container.style.transform="translateX(-"+((currentImg-1)*100/length)+"%)"
			currentImg--
		}
	}
	app.left.addEventListener('click',slideBack)
	app.right.addEventListener('click',slide)
	if (window.innerWidth < 1000) {
		app.frame.style.display='none'
	}
	window.addEventListener('resize',function() {
		if (window.innerWidth < 1000) {
			app.frame.style.display='none'
		}else{
			app.frame.style.display='block'
		}
	})
	setInterval(slide,15000)
})()