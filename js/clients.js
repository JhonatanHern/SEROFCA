class EnterpriseClient{
	constructor(name,edep,url,pic,desc,country='Venezuela'){
		this.name = name
		this.country = country
		this.edep = edep
		this.desc = desc
		this.url = url
		this.pic = pic
		return this
	}
}

var clients = [
	new EnterpriseClient(
		'Clínica Santa Sofía',
		'Distrito Capital',
		'http://www.clinicasantasofia.com.ve/',
		'logos/santasofia.jpg',
		'En la Clínica Santa Sofía entregamos servicios de salud de calidad, gracias al desempeño de un equipo médico especializado, quienes junto al mejor personal auxiliar (Enfermeras, Bioanalistas, Técnicos, Radiólogos, entre otros) y el equipo administrativo y obrero, representan el pilar fundamental de nuestra institución, y hacen posible la prestación de una atención integral, profesional y humana a nuestros pacientes.'
	),/*
	new EnterpriseClient(
		'Policlínica Metropolitana',
		'Distrito Capital',
		'http://www.pcm.com.ve/',
		'logos/www.pcm.com.ve/wp-content/themes/mature_health_wp_theme/LOGO_POLICLINICA_METROPOLITANA_SOLO.png',
		'Policlínica Metropolitana es uno de los Centros Médicos hospitalarios más completos y mejor dotados del país. Tanto su organización como su estructura arquitectónica permiten ofrecer una eficaz atención médica, garantizando al enfermo su pronta recuperación y reincorporación a las actividades diarias.'
	),*/
	new EnterpriseClient(
		'St. Elisabeth Hospital',
		'Otrobanda',
		'http://www.sehos.cw/',
		'logos/se.jpg',
		'The St. Elisabeth Hospital (SEHOS) provides care to patients of Curaçao, the other islands and the wider region.',
		'Curaçao'
	),
	new EnterpriseClient(
		'Clínica SANITAS',
		'Distrito Capital',
		'http://www.sanitasvenezuelaemp.com/',
		'logos/sanitas.png',
		'Sanitas Venezuela, Empresa de Medicina Prepagada, abrió sus puertas en 1998 introduciendo en el país un nuevo concepto de medicina prepagada, un servicio de salud integral con el respaldo de la OSI.'
	),
	new EnterpriseClient(
		'ODONTOSANITAS (Sábana Grande)',
		'Distrito Capital',
		'http://portal.colsanitas.com/portal/web/odontosanitas',
		'logos/odontosanitas.jpg',
		'Odontosanitas es la empresa especializada en la administración y prestación de servicios odontológicos de la Organización Sanitas Internacional.'
	),
	new EnterpriseClient(
		'ODONTOSANITAS (la castellana)',
		'Distrito Capital',
		'http://portal.colsanitas.com/portal/web/odontosanitas',
		'logos/odontosanitas.jpg',
		'Odontosanitas es la empresa especializada en la administración y prestación de servicios odontológicos de la Organización Sanitas Internacional.'
	),
	new EnterpriseClient(
		'ODONTOSANITAS VIZCAYA',
		'Distrito Capital',
		'http://portal.colsanitas.com/portal/web/odontosanitas',
		'logos/odontosanitas.jpg',
		'Odontosanitas es la empresa especializada en la administración y prestación de servicios odontológicos de la Organización Sanitas Internacional.'
	),
	new EnterpriseClient(
		'VIDAMED',
		'Distrito Capital',
		'http://vidamed.org',
		'logos/vidamed.png',
		'Centro Médico Quirúrgico Vidamed, Centro Materno del Este y Centro de Cirugía Endoscópica y Mínimamente Invasiva con Tres centros asociados, estratégicamente ubicados sobre la Avenida Francisco Solano, entre la Avenida Libertador y el Boulevard de Sabana Grande, a 100 mts, de la estación del Metro, con fácil acceso desde cualquier punto de la ciudad de Caracas.'
	),
	new EnterpriseClient(
		'MEDIPROT',
		'Distrito Capital',
		'http://clinicamediprot.com/',
		'logos/mediprot.jpg',
		' CMQ MEDIPROT, es una organización privada,  fundada en el año 2011,  desarrollada en un edificio exclusivo que alberga 7 niveles principales donde se desarrollan todos los servicios clínicos, orientada  a la prestación de servicios de salud tanto de de medicina preventiva como sanativa, con el aporte del mayor talento médico apoyado en la más amplia experiencia y bajo los más altos estrictos protocolos de calidad y servicio.'
	),
	new EnterpriseClient(
		'Centro Médico de Caracas',
		'Distrito Capital',
		'http://www.centromedicodecaracas.com.ve',
		'logos/centromedicocaracas.png',
		'Somos un hospital de alta seguridad y confianza en el cumplimiento de exigentes protocolos de calidad para ayudar a nuestros pacientes en la prevención y cuidado de sus problemas de salud, a través de todas las etapas de su vida.'
	),
	new EnterpriseClient(
		'ONCOMEDICA ',
		'Distrito Capital',
		'http://www.oncomedica.com.ve',
		'logos/oncomedica.jpg',
		'Cada individuo que integra Oncomédica desempeña un rol fundamental, por eso se trabaja de forma conjunta, con un espíritu integrador y ético que propicia constantemente el desarrollo profesional que se traduce en mejor calidad de servicio en los pacientes.'
	),
	new EnterpriseClient(
		'UCQ NORESTE',
		'Distrito Capital',
		'http://www.clinicanoreste.com',
		'logos/noreste.jpg',
		'La Unidad Clínico Quirúrgica Noreste, nació un 25 de abril del 2003 y fue creada para satisfacer  en forma directa y efectiva a una población desasistida de atención médica, con influencia directa en los Municipios Chacao, Sucre, Plaza y Zamora de la ciudad de Caracas - Venezuela.'
	),
	new EnterpriseClient(
		'ASISTANET (capital)',
		'Distrito Capital',
		'http://asistanet.com/',
		'logos/asistanet.jpg',
		'En AsistaNet Somos Clínicas de Atención Médica Primaria y operamos en Venezuela desde el 19 de marzo de 2007; brindamos servicios integrales de salud a través de consultas en las diferentes especialidades médicas y servicios médicos de apoyo.'
	),
	new EnterpriseClient(
		'ASISTANET CAST CEMADI',
		'Distrito Capital',
		'http://asistanet.com/',
		'logos/asistanet.jpg',
		'En AsistaNet Somos Clínicas de Atención Médica Primaria y operamos en Venezuela desde el 19 de marzo de 2007; brindamos servicios integrales de salud a través de consultas en las diferentes especialidades médicas y servicios médicos de apoyo.'
	),
	new EnterpriseClient(
		'DENTALNET CAPITOLIO',
		'Distrito Capital',
		'http://www.dentalnet-ve.com.ve',
		'logos/dentalnet.jpg',
		'Somos un equipo multidisciplinario de alto nivel dispuesto a satisfacer necesidades, en el área de salud bucal, de índole patológico, estético y funcional en niños, jóvenes, adultos y personas de la tercera edad.'
	),
	new EnterpriseClient(
		'DENTALNET EL ROSAL',
		'Distrito Capital',
		'http://www.dentalnet-ve.com.ve',
		'logos/dentalnet.jpg',
		'Somos un equipo multidisciplinario de alto nivel dispuesto a satisfacer necesidades, en el área de salud bucal, de índole patológico, estético y funcional en niños, jóvenes, adultos y personas de la tercera edad.'
	),
	new EnterpriseClient(
		'P. CRISTOBAL ROJAS',
		'Distrito Capital',
		'http://policlinicacristobalrojas.com.ve/',
		'logos/cristobalrojas.png',
		'La Policlínica Cristóbal Rojas, es una organización Medico-Asistencial de carácter privado, ubicada en la Urb. Santa Mónica, dirigida a prestar asistencia y atención integral a pacientes hospitalizados, ambulatorios y de consulta externa a objeto de lograr prevención, restitución y mantenimiento de la salud, dentro de un ambiente físico, humano y optimo.'
	),
	new EnterpriseClient(
		'CANIA',
		'Distrito Capital',
		'http://www.cania.org.ve/',
		'logos/cania.jpg',
		'Fortalecemos el capital humano y social a través de la prevención y atención integral de la condición nutricional infantil y familiar, la producción de conocimientos y la capacitación en salud nutricional y áreas relacionadas para lograr cambios positivos sostenibles en la comunidad en general.'
	),/*
	new EnterpriseClient(
		'DAMAS',
		'Distrito Capital',
		'http://damasalud.com',
		'logos/damas.png',
		'basada en el trabajo en equipo, la credibilidad, responsabilidad y atención personalizada, comprometidos con los pacientes y los médicos de referencia, con alto estándar de calidad y ética profesional.'
	),*/
	new EnterpriseClient(
		'Centro Médico Loira',
		'Distrito Capital',
		'http://www.cmloira.com.ve/',
		'logos/Loira.jpg',
		'El Centro Médico Loira pone a su orden todos los servicios de los cuales disponemos, a fin de que su estadía sea lo más cómoda y grata posible.'
	),
	new EnterpriseClient(
		'Sociedad Anticancerosa',
		'Distrito Capital',
		'https://www.sociedadanticancerosa.org/',
		'logos/sociedadanticancerosa.png',
		'La Sociedad Anticancerosa de Venezuela busca iniciar acciones que promuevan en la comunidad médica y profesionales de la salud de nuestro país, el empuje y el interés por incorporarse a propuestas de investigación científica en el área oncológica que admitan la profundización de la matriz de conocimiento que en relación al tema se maneja, como aportes que amplíen los horizontes de acción en el manejo de la enfermedad en nuestro país.'
	),
	new EnterpriseClient(
		'DENTALNET (El Paraíso)',
		'Distrito Capital',
		'http://www.dentalnet-ve.com.ve',
		'logos/dentalnet.jpg',
		'Somos un equipo multidisciplinario de alto nivel dispuesto a satisfacer necesidades, en el área de salud bucal, de índole patológico, estético y funcional en niños, jóvenes, adultos y personas de la tercera edad.'
	),
	new EnterpriseClient(
		'DARSALUD',
		'Distrito Capital',
		'http://www.darsalud.com.ve',
		'logos/darsalud.png',
		'Somos un grupo dedicado a la atención integral de salud, basado en Modelos Médicos validados, altos estándares e innovación tecnológica. Ofrecemos servicios de calidad que garantizan el bienestar de nuestros usuarios y permiten la optimización de recursos a través del manejo del riesgo del paciente.'
	),
	new EnterpriseClient(
		'SIEMENS',
		'Distrito Capital',
		'https://www.siemens.com/ve/es/home.html',
		'logos/siemens.png',
		'Siemens inicia sus actividades en el país en el año 1935, con la construcción de la planta eléctrica “El Aguacatal”, ubicada en el estado Yaracuy. En 1955, establece su negocio en la capital venezolana, inaugurando la primera oficina de operaciones, en Caracas.'
	),
	new EnterpriseClient(
		'IMECA Imágenes Médicas',
		'Aragua',
		'http://maternidadlafloresta.com/servicios/imeca/',
		'logos/imeca.jpg',
		'Contamos con los equipos más avanzados en tomografía multicorte, con los cuales  se realizan estudios tomograficos simples y con contraste, de diferentes regiones anatómicas del cuerpo, incluyendo la adquisición de imágenes multiplanares, reconstrucciones en máxima intensidad de proyección y volumétricas 3d. También, realizamos punciones guiadas por tomografía.'
	),
	new EnterpriseClient(
		'Unidad de Diagnóstico La FLoresta',
		'Aragua',
		'http://maternidadlafloresta.com/servicios/unidad-de-diagnostico-la-floresta/',
		'logos/lafloresta.jpg',
		''
	),
	new EnterpriseClient(
		'Instituto Docente de Urología',
		'Aragua',
		'http://idu.com.ve/',
		'logos/idu.png',
		''
	),
	new EnterpriseClient(
		'VITADENT',
		'Carabobo',
		'http://www.vitadent.com.ve/',
		'logos/vitadent.jpg',
		'Somos una Clínica de Odontología Integral, altamente especializada, con profesionales dedicados a procedimientos de alta calidad, cubriendo todas las especialidades en Salud Oral con tecnología de punta y a la vanguardia de los últimos adelantos científicos para ofrecer una excelente atención en el menor tiempo posible.'
	),
	new EnterpriseClient(
		'OTOVAL',
		'Carabobo',
		'http://www.otoval.com/',
		'logos/otoval.png',
		'Nuestra Unidad de Otorrinolaringología esta equipada por profesionales con años de experiencias y equipos de ultima generación.'
	),
	new EnterpriseClient(
		'Policlínica Puerto La Cruz C.A.',
		'Anzoátegui',
		'http://policlinicaplc.org.ve/',
		'logos/policpuertolc.jpg',
		'Policlínica Puerto La Cruz,C.A. plantea ser una empresa que garantice la integralidad de los servicios de salud, ofertados a sus clientes las 24 horas del día todo el año. para ello contamos con los servicios demandados por Ustedes.'
	),
	new EnterpriseClient(
		'Grupo Médico de Especialidades',
		'Anzoátegui',
		'http://grupomedico.com.ve',
		'logos/grupomedicoespecialidades.png',
		'Bienvenidos al Grupo Médico de Especialidades. Excelente servicios, personal médico/técnico y equipos de alta generación.'
	),
	new EnterpriseClient(
		'Clínica Santa Rosa',
		'Anzoátegui',
		'http://clinicasantarosa.com',
		'logos/santarosa.png',
		''
	),
	new EnterpriseClient(
		'Centro diagnóstico Las Acacias (Valera)',
		'Trujillo',
		'http://www.cdlasacacias.com/cdla/',
		'logos/lasacacias.png',
		'Nuestro objetivo es mejorar cada día mediante la entrega de soluciones efectivas basadas en tecnologías innovadoras y a tiempo.'
	),/*
	new EnterpriseClient(
		'Policlínica Táchira ',
		'Táchira',
		'http://www.policlinicatachira.com.ve/sitio/index.php',
		'logos/policlinicatachira.png',
		'Somos una organización médica con más de 70 años al servicio de la salud. En Policlínica Táchira nuestro equipo humano trabaja cada día para brindar un servicio de excelente calidad a cada uno de nuestros usuarios.'
	),*//*
	new EnterpriseClient(
		'Ambulatorio del Sur',
		'Lara',
		'http://ambulatoriodelsur.com/cw_site/1/',
		'http://ambulatoriodelsur.com/cw_site/images/images/home(7).png',
		'Somos una Asociación Civil sin fines de lucro que decidimos hace 21 años LLEGAR A SER LA CASA DE LA VIDA Y NO DE LA ENFERMEDAD.'
	),*/
	new EnterpriseClient(
		'CRUZ ROJA',
		'Lara',
		'http://www.cruzrojavenezolana.org/',
		'logos/cruzroja.jpg',
		'Brindar ayuda humanitaria oportuna y eficaz, dirigida a favor de víctimas de conflictos armados internacionales o no internacionales y/o en desastres producidos por fenómenos naturales. Esto mediante el desarrollo permanente en el ámbito nacional de un conjunto de actividades regidas por los Principios Fundamentales del Movimiento Internacional de la Cruz Roja y de la Media Luna Roja: Humanidad, Imparcialidad, Neutralidad, Independencia, Voluntariado, Unidad y Universalidad.'
	)
]

let places = globalGrouping(clients),
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
	ul.innerHTML = ''
	for (var i = 0 ; i < arr.length ; i++) {
		ul.innerHTML += '<li class="j-animate">'+
							'<a href="'+arr[i].url+'">'+
								'<img src="'+arr[i].pic+'">'+
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
			ul.innerHTML += '<li class="j-animate">'+
								'<a href="'+places[crrVal][i].url+'">'+
									'<img src="'+places[crrVal][i].pic+'">'+
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