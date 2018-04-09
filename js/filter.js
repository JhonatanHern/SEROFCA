/*
li
	a
		img
		div
			h3
			p


*/

var Client = function(name,country,edep,desc,url,pic){
	this.name = name
	this.country = country
	this.edep = edep
	this.desc = desc
	this.url = url
	this.pic = pic
	return this
}

var clients = [
	new Client('cl1','p1','e1','d1','u1','picurl'),
	new Client('cl2','p1','e1','d1','u1','picurl'),
	new Client('cl3','p1','e2','d1','u1','picurl'),

	new Client('cl4','p2','e1','d1','u1','picurl'),
	new Client('cl5','p2','e1','d1','u1','picurl'),
	new Client('cl6','p2','e1','d1','u1','picurl'),
	new Client('cl7','p2','e2','d1','u1','picurl'),

	new Client('cl8','p3','e1','d1','u1','picurl'),
	new Client('cl9','p3','e1','d1','u1','picurl'),
	new Client('cl0','p3','e1','d1','u1','picurl'),
	new Client('cl9','p3','e2','d1','u1','picurl'),
	new Client('cl0','p3','e2','d1','u1','picurl'),
	new Client('cl8','p3','e2','d1','u1','picurl'),
	new Client('cl0','p3','e2','d1','u1','picurl')
]

function groupBy(crit,array,destiny){
	if (!array) {
		return
	}
	if (!destiny) {
		destiny={}
	}
	for (var i = array.length - 1; i >= 0; i--) {
		if(Array.isArray(destiny[array[i][crit]])){
			destiny[array[i][crit]].push(array[i])
		}else{
			destiny[array[i][crit]] = [array[i]]
		}
	}
	return destiny;
}
function globalGrouping(){
	let countries = groupBy('country',clients)
	for(country in countries){
		if (countries[country].length > 5) {
			countries[country] = groupBy('edep',countries[country])
		}
	}
	return countries
}

let places = globalGrouping(),
	selector = document.getElementById('country'),
	state = document.getElementById('state'),
	ul = document.getElementById('ul'),
	crrVal = null

for(c in places){
	selector.innerHTML+='<option value="'+c+'"">'+c+'</option>'
}

function updateByState() {
	let stat = state.value
	let arr = places[crrVal][stat]
	for (var i = arr.length - 1; i >= 0; i--) {
		ul.innerHTML += '<li>'+
							'<a href="'+arr[i].url+'">'+
								'<img src="'+arr[i].img+'">'+
								'<div>'+
									'<h3>'+arr[i].name+'</h3>'+
									'<p>'+arr[i].desc+'</p>'+
								'</div>'+
							'</a>'+
						'</li>'
	}

}
function update(){
	ul.innerHTML=''
	state.innerHTML=''
	crrVal = selector.value
	if ( Array.isArray( places[ crrVal ] ) ) {
		state.disabled=true
		for (var i = 0; i < places[crrVal].length; i++) {
			ul.innerHTML += '<li>'+
								'<a href="'+places[crrVal][i].url+'">'+
									'<img src="'+places[crrVal][i].img+'">'+
									'<div>'+
										'<h3>'+places[crrVal][i].name+'</h3>'+
										'<p>'+places[crrVal][i].desc+'</p>'+
									'</div>'+
								'</a>'+
							'</li>'

		}
	}else{
		for(e in places[ selector.value ]){
			state.innerHTML+='<option value="'+e+'"">'+e+'</option>'
		}
		state.disabled=false
		updateByState()
	}
}
update()
selector.addEventListener('change',update)
state.addEventListener('change',updateByState)