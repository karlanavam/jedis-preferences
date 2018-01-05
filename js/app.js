var jedis = [
	{
    "name":"Jonh",
    "age":31,
    "cars":[],
    "preferences":[ "No, i love the choppers"]
    },
	{
    "name":"Karla",
    "age":25,
    "cars":[ "Mini cooper", "Volvo C30", "BMW X6", "Fiat 500"],
    "preferences":["i love cars"]
    },
	{
    "name":"Amalia",
    "age":26,
    "cars":[ "Mustang", "BMW", "Beetle"],
    "preferences":["i love cars"]
    },
	{
    "name":"Silvana",
    "age":31,
    "cars":[ "Seat", "Golf", "Chevy", "Bocho"],
    "preferences":["Yeah, but prefer the bicycles"]
    },
	{
    "name":"Emmanuel",
    "age":25,
    "cars":[],
    "preferences":["No, i don´t like. I love the sport motorcycles" ]
    }
];

// 1. Elabora una función que retorne a los Jedis
// 2. Elabora una función para obtener datos (nombre, por edad y marca o modelo).
// 3. Elabora una función que de el promedio de las edades de los Jedis
// 4. Elabora una función que enliste todas las marcas o modelos de coches.

function returnJedis(array) {
  console.log(array);
  return array;
}

returnJedis(jedis);

function getData(array) {
  var age = [];
  for (var i = 0; i < array.length; i++) {
    var name =array[i].name;
    var cars = array[i].cars;
    age.push(array[i].age);
  }
  averageAge(age);
}

function averageAge(array) {
  var total = 0;

  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  total = total / array.length;
  console.log(total);

}

getData(jedis);
