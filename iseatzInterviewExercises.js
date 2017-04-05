

/*CLOSURE  Example*/
alert(add(5)(4));

function add(op1)
{
	return function(op2){return op1+op2;};
}


/*EXERCISE CAR_DATA*/
test();

function test(){
   var CAR_DATA = [{ manufacturer: 'Chevrolet', 
   	                 models: ['Camaro', 'Corvette'], 
   	                 manufacturer: 'Ford', 
   	                 models: ['Mustang', 'Lobo']}];

   console.log(CAR_DATA);
}


/*EXERCISE Destructuring*/
returnNameAndSurname();
function returnNameAndSurname(){

	let newArray=[];
	var data = [
		{nombre:'Cesar', apellido: 'Olayo'},
		{nombre:'Yoshua', apellido: 'Sanchez'},
		{nombre:'Pedro', apellido: 'Picapiedra'},
		{nombre:'Ana', apellido: 'Perez'},
		{nombre:'Lulu', apellido: 'Gonzalez'}
	] ;

	data.forEach(({nombre,apellido})=>{
		newArray.push(nombre+' '+apellido);
	});

	console.log(newArray);
}


/*JOIN Array ECMA5*/
joinArrayEcma5();

function joinArrayEcma5(){
	var data = [1, 2, 3, 4, 5];
	var data2 = [6, 7, 8, 9, 0];

	var arrayECMA5Joined=data.concat(data2);

	console.log(arrayECMA5Joined);

} 

/*JOIN Array ECMA6*/
joinArrayEcma6();

function joinArrayEcma6(){
	let data = [1, 2, 3, 4, 5];
	let data2 = [6, 7, 8, 9, 0];

	let arrayECMA6Joined = [...data,...data2];

	console.log(arrayECMA6Joined);

};


/*FLATTENED ARRAY*/
flatArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

function flatArray(arrayEx){
	var flattened = arrayEx.reduce(function(a, b) {
    	return a.concat(b);
	});
	console.log('flattened array: '+flattened);
}


/*array operations*/
//5.- Crear un codigo que tome el valor inicial, lo duplique, luego lo reduzca,
//// lo vuelva a duplicar y al final imprima la mitad de ese valor. Luego hacer que haga 
///las operaciones al reves. Primero obtenga la mitad, luego duplique, ....

arrayOperations();
function arrayOperations()
{
	var initial_value = 1;

	var functionsA=[function double(input) {console.log('=>input*2 '); return input * 2; },
	function decrement(input) {console.log('=>input-1 ');  return input - 1; },
	function double(input) {console.log('=>input*2 ');  return input * 2; },
	function halve(input) {console.log('=>input/2 ');  return input / 2; }];

	var result= functionsA.reduce(function(val_ant_ret,funcion,index,arreglo)
		{
			initial_value=val_ant_ret(initial_value); //evaluacion con la iesima funcion
			console.log('val:: '+initial_value);
			console.log('--------------');
			return funcion; 
		}
	);
    console.log('resultado al derecho::'+result(initial_value));

    result= functionsA.reverse().reduce(function(val_ant_ret,funcion,index,arreglo)
		{
			initial_value=val_ant_ret(initial_value); //evaluacion con la iesima funcion
			console.log('val:: '+initial_value);
			console.log('--------------');
			return funcion; 
		}
	);
	console.log('resultado al reves::'+result(initial_value));
	
}