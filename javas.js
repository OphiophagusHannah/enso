window.addEventListener('load', function(){

		var sphere = null;

			var table =[
  "./img/works/001.jpg",
  "./img/works/002.jpg",
  "./img/works/003.jpg",
  "./img/works/004.jpg",
  "./img/works/005.jpg",
  "./img/works/006.jpg",
  "./img/works/007.jpg",
  "./img/works/008.jpg",
  "./img/works/009.jpg",
  "./img/works/010.jpg",
  "./img/works/001.jpg",
  "./img/works/002.jpg",
  "./img/works/003.jpg",
  "./img/works/005.jpg",
  "./img/works/006.jpg",
  "./img/works/007.jpg",
  "./img/works/008.jpg",
  "./img/works/009.jpg",
  "./img/works/010.jpg",
  "./img/works/011.jpg",
  "./img/works/012.jpg",
  "./img/works/013.jpg",
  "./img/works/014.jpg",
  "./img/works/015.jpg",
  "./img/works/016.jpg",
  "./img/works/017.jpg",
  "./img/works/018.jpg",
  "./img/works/019.jpg",
  "./img/works/020.jpg",
  "./img/works/021.jpg",
  "./img/works/022.jpg",
  "./img/works/023.jpg",
  "./img/works/024.jpg",
  "./img/works/025.jpg",
  "./img/works/026.jpg",
  "./img/works/027.jpg",
  "./img/works/028.jpg",
  "./img/works/029.jpg",
  "./img/works/030.jpg",
  "./img/works/031.jpg",
  "./img/works/032.jpg",
  "./img/works/033.jpg",
  "./img/works/035.jpg",
  "./img/works/034.jpg",
  "./img/works/036.jpg",
  "./img/works/037.jpg",
  "./img/works/038.jpg",
  "./img/works/039.jpg",
  "./img/works/040.jpg",
  "./img/works/041.jpg",
  "./img/works/042.jpg",
  "./img/works/043.jpg",
  "./img/works/044.jpg",
  "./img/works/045.jpg",
  "./img/works/046.jpg",
  "./img/works/047.jpg",
  "./img/works/048.jpg",
  "./img/works/049.jpg",
  "./img/works/050.jpg",
  "./img/works/051.jpg",
  "./img/works/052.jpg",
  "./img/works/053.jpg",
  "./img/works/054.jpg",
  "./img/works/055.jpg",
  "./img/works/056.jpg",
  "./img/works/057.jpg",
  "./img/works/058.jpg",
  "./img/works/059.jpg",
  "./img/works/060.jpg",
  "./img/works/061.jpg",
  "./img/works/062.jpg",
  "./img/works/063.jpg",
  "./img/works/064.jpg",
  "./img/works/065.jpg",
  "./img/works/066.jpg",
  "./img/works/067.jpg",
  "./img/works/068.jpg",
  "./img/works/069.jpg",
  "./img/works/070.jpg",
  "./img/works/071.jpg",
  "./img/works/072.jpg",
  "./img/works/073.jpg",
  "./img/works/074.jpg",
  "./img/works/075.jpg",
  "./img/works/076.jpg",
  "./img/works/077.jpg",
  "./img/works/078.jpg",
  "./img/works/079.jpg",
  "./img/works/080.jpg",
  "./img/works/081.jpg",
  "./img/works/082.jpg",
  "./img/works/083.jpg",
  "./img/works/084.jpg",
  "./img/works/085.jpg",
  "./img/works/086.jpg",
  "./img/works/087.jpg",
  "./img/works/088.jpg",
  "./img/works/089.jpg",
  "./img/works/090.jpg",
  "./img/works/091.jpg",
  "./img/works/092.jpg",
  "./img/works/093.jpg",
  "./img/works/094.jpg",
  "./img/works/095.jpg",
  "./img/works/096.jpg",
  "./img/works/097.jpg",
  "./img/works/098.jpg",
  "./img/works/099.jpg",
  "./img/works/100.jpg"
];
// var createSphere = function createSphere() {
// 	var geometry = new THREE.SphereGeometry(100, 5, 100);
// 	var material = new THREE.MeshBasicMaterial({
// 		color: 0xcc0d00
// 	});
// 	var mesh = new THREE.Mesh(geometry, material);
// 	return mesh;
// };

document.getElementById( 'c-information-btn' ).addEventListener( 'click', function ( event ) {
					var elem = document.getElementById( 'c-information' );
					document.getElementById( 'c-information-btn' ).classList.toggle('opened');
					elem.classList.toggle('is-viewed');
	});


			var camera; 
			var scene; 
			var renderer;
			var geometry; 
			var material; 
			var mesh;

			var controls;

			var objects = [];
			var targets = { table: [], sphere: [], helix: [], grid: [], forth:[], new:[] };

			init();
			animate();

			function init() {

				camera = new THREE.PerspectiveCamera( 85, window.innerWidth / window.innerHeight, 1, 5000 );
				camera.position.z = 1800;

				scene = new THREE.Scene();
					


				for ( var i = 0; i < table.length; i ++ ) {

					var item = table[ i ];

					var element = document.createElement( 'div' );
					element.className = 'element';

					var sym = document.createElement( 'img' );
					var src = document.createAttribute('src');
					sym.className = 'symbol';
					src.value = table[i];

var a;
sym.addEventListener('click', function(){
						var can = document.querySelector("#can");
						var ns = document.querySelector("img.s");
						var s = this.getAttribute('src');
						a = table.indexOf(s);
 						console.log(a);
 						var att = document.createAttribute("src");
 						att.value = s;
 						

 						ns.setAttributeNode(att);
 						//console.log(ns);
 						ns.style.visibility = "visible";
 						can.style.visibility = "visible";
 						ns.style.opacity = "1";


				
});



document.querySelector("#n").addEventListener('click', function(e){

						var ns = document.querySelector("img.s");
 						var att = ns.getAttributeNode("src");
 						console.log(att.value);
 						a = table.indexOf(att.value);
 						newind = a + 1;
 						console.log(newind);
 						att.value = table[newind];
 						console.log(att.value);
 						ns.setAttributeNode(att);
 						ns.style.visibility = "visible";
 						can.style.visibility = "visible";
 						ns.style.opacity = "1";
		

});

document.querySelector("#p").addEventListener('click', function(){


						var ns = document.querySelector("img.s");
						//var s = this.getAttribute('src');
 						var att = ns.getAttributeNode("src");
 						console.log(att.value);
 						a = table.indexOf(att.value);
 				if (table.indexOf(att.value) === 0){
								a = 10;
						}
 						newind = a - 1;
 						console.log(newind);
 						att.value = table[newind];
 						console.log(att.value);
 						ns.setAttributeNode(att);
 						ns.style.visibility = "visible";
 						can.style.visibility = "visible";
 						ns.style.opacity = "1";

});


var rr = document.querySelector("img.s");

var can = document.querySelector("#can");
can.addEventListener('click', function(e){
	var n = document.querySelector(".buttonpn");
	var can = document.querySelector("#can");
	if(e.target == can)	{		
 						var rr = document.querySelector("img.s");
 						rr.style.visibility = "hidden";
 						can.style.visibility = "hidden";
 						rr.style.opacity = "0";
 						a = 0 ;

				}	
});





					element.appendChild( sym );
					sym.setAttributeNode(src);
// >>>>>>>>>>>>>>>>>>>>>>>>use indexOf to get array place. list through images


					var object = new THREE.CSS3DObject( element );
					object.position.x = Math.random() * 4000 - 2000;
					object.position.y = Math.random() * 4000 - 2000;
					object.position.z = Math.random() * 4000 - 2000;
					scene.add( object );


					objects.push( object );

				}

								// 5

				var vector = new THREE.Vector3();
				var ra;


				for ( var i = 0, l = objects.length; i < l; i ++ ) {

					var phi = i * 0.175 + Math.PI;
					var theta = Math.sqrt( l * Math.PI ) * phi;
					var ra;

					var object = new THREE.Object3D();
					if(i<5){
						ra=400;
					}
					else if(i<60){
						ra=700;
					}
					else if(i<100){
						ra=1000;
					}
					var object = new THREE.Object3D();

					object.position.x = ra * Math.sin( theta ) * Math.cos( phi );
					object.position.y = ra * Math.sin( theta ) * Math.sin( phi );
					object.position.z = ra *  Math.cos( phi );

					vector.copy( object.position );
					vector.x *= 2;
					vector.z *= 2;

					object.lookAt( vector );

					targets.new.push( object );

				}


				// 4

				var vector = new THREE.Vector3();
				var ra;


				for ( var i = 0, l = objects.length; i < l; i ++ ) {

					var phi = i * 0.175 + Math.PI;
					var theta = Math.sqrt( l * Math.PI ) * phi;
					var ra;

					var object = new THREE.Object3D();
					if(i<5){
						ra=600;
					}
					else if(i<60){
						ra=800;
					}
					else if(i<150){
						ra=1200;
					}
					var object = new THREE.Object3D();

					object.position.x = ra * Math.sin( theta ) * Math.cos( phi );
					object.position.y = ra * Math.cos( theta ) * Math.sin( phi );
					object.position.z = ra *  Math.sin( phi );

					vector.copy( object.position );
					vector.x *= 2;
					vector.z *= 2;

					object.lookAt( vector );

					targets.forth.push( object );

				}




				// 3

				var vector = new THREE.Vector3();

				for ( var i = 0, l = objects.length; i < l; i ++ ) {

					var object = objects[ i ];

					var phi = Math.acos( -1 + ( 2 * i ) / l );
					var theta = Math.sqrt( l * Math.PI ) * phi;
					var r;

					var object = new THREE.Object3D();
					if(i<5){
						r=400;
					}
					else if(i<50){
						r=700;
					}
					else if(i<150){
						r=950;
					}
					else if(i<150){
						r=1200;
					}

					object.position.x = r * Math.sin( theta ) * Math.sin( phi );
					object.position.y = r * Math.cos( theta ) * Math.cos( phi );
					object.position.z = r * Math.cos( phi );

					vector.copy( object.position ).multiplyScalar( 2 );

					object.lookAt( vector );

					targets.table.push( object );

				}

				// 2
 
				var vector = new THREE.Vector3();

				for ( var i = 0, l = objects.length; i < l; i ++ ) {

					var object = objects[ i ];

					var phi = Math.acos( -1 + ( 2 * i ) / l );
					var theta = Math.sqrt( l * Math.PI ) * phi;
					var r;

					var object = new THREE.Object3D();
					if(i<5){
						r=400;
					}
					else if(i<60){
						r=700;
					}
					else if(i<150){
						r=950;
					}
					else if(i<150){
						r=1200;
					}
					object.position.x = r * Math.sin( theta ) * Math.sin( phi );
					object.position.y = r * Math.sin( theta ) * Math.cos( phi );
					object.position.z = r * Math.cos( phi );

					vector.copy( object.position ).multiplyScalar( 2 );

					object.lookAt( vector );

					targets.sphere.push( object );

				}

				// 1

				var vector = new THREE.Vector3();
				var ra;


				for ( var i = 0, l = objects.length; i < l; i ++ ) {

					var phi = i * 0.175 + Math.PI;
					var theta = Math.sqrt( l * Math.PI ) * phi;
					var ra;

					var object = new THREE.Object3D();
					if(i<5){
						ra=400;
					}
					else if(i<60){
						ra=700;
					}
					else if(i<100){
						ra=1000;
					}
					var object = new THREE.Object3D();

					object.position.x = ra * Math.sin( theta ) * Math.sin( phi );
					object.position.y = ra * Math.cos( theta ) * Math.sin( phi );
					object.position.z = ra *  Math.cos( phi );

					vector.copy( object.position );
					vector.x *= 2;
					vector.z *= 2;

					object.lookAt( vector );

					targets.helix.push( object );

				}

				// 0

				for ( var i = 0; i < objects.length; i ++ ) {

					var object = objects[ i ];

					var object = new THREE.Object3D();

					object.position.x = ( ( i % 11 ) * 200 ) - 800;
					object.position.y = ( - ( Math.floor( i / 11 ) % 11 ) * 200 ) + 800;
					object.position.z = ( Math.floor( i / 121 ) ) * 500 - 2000;

					targets.grid.push( object );

				}

				//

				renderer = new THREE.CSS3DRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				//renderer.domElement.style.position = 'absolute';
				renderer.domElement.style.top = 0;
				// renderer.domElement.className = "additional";
				document.getElementById( 'container' ).appendChild( renderer.domElement );




				//

				controls = new THREE.TrackballControls( camera, renderer.domElement );
				controls.rotateSpeed = 0.5;
				controls.addEventListener( 'change', render );

				var button = document.getElementById( 'tab' );
				button.addEventListener( 'click', function ( event ) {

					transform( targets.table, 2000 );

				}, false );

				var button = document.getElementById( 'new' );
				button.addEventListener( 'click', function ( event ) {

					transform( targets.new, 2000 );

				}, false );

				var button = document.getElementById( 'for' );
				button.addEventListener( 'click', function ( event ) {

					transform( targets.forth, 2000 );

				}, false );

				var button = document.getElementById( 'wave' );
				button.addEventListener( 'click', function ( event ) {

					transform( targets.sphere, 2000 );

				}, false );

				var button = document.getElementById( 'round' );
				button.addEventListener( 'click', function ( event ) {

					transform( targets.helix, 2000 );

				}, false );

				var button = document.getElementById( 'grid' );
				button.addEventListener( 'click', function ( event ) {

					transform( targets.grid, 2000 );

				}, false );

				transform( targets.table, 5000 );


				window.addEventListener( 'resize', onWindowResize, false );

			}
			

			function transform( targets, duration ) {

				TWEEN.removeAll();

				for ( var i = 0; i < objects.length; i ++ ) {

					var object = objects[ i ];
					var target = targets[ i ];

					new TWEEN.Tween( object.position )
						.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut)
						.start();

					new TWEEN.Tween( object.rotation )
						.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

				}

				new TWEEN.Tween( this )
					.to( {}, duration * 2 )
					.onUpdate( render )
					.start();

			}
			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );
			}

			function animate() {
				requestAnimationFrame( animate );
				TWEEN.update();
				controls.update();
			}
			function render() {

				renderer.render( scene, camera );
			}





})