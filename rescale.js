console.log('JS number range rescale v1.0');

function rescale(numbers,new_min = 0, new_max = 100)
{
   var output = [];
   var old_min = Math.min(...numbers); 
   var old_max = Math.max(...numbers);

   numbers.forEach(function(v) {
     var new_v = (new_max - new_min) / (old_max - old_min) * (v - old_min) + new_min;
     output.push(new_v);
  });

  return output;

}

var a = [1,2,3,5,8,9,10];

console.log(a);

console.log(rescale(a));
