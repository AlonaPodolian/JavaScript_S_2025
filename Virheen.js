function addNumbers(a, b )
  { 
    return a + b; 
  }

  function printMessage() 
{ 
  message = "Hello, world!"
  console.log(message); 
} 
printMessage();

//*3*//
for (let i = 0; i < 5; i++) 
{ 
  console.log(i); 
}
//*4*//
const num1 = 5; 
const num2 = "3"; 
const sum = num1 + parseInt(num2); 
console.log(sum);

//*5*//
function divideNumbers(a, b) 
{
 if (b === 0)
 {
 throw new Error("Division by zero.");
 } 
  return a / b; 
} 
try 
{
 const result = divideNumbers(10, 2);
 console.log(result); 
} 
catch (error) 
{
 console.error(error.message); }

 //*6*//
 let count = 0; 
  while (count < 5) { 
  console.log(count); 
  count++;
  }

  //*7*//
  for (let i = 0; i < 2; i++) 
  { 
    console.log(i); 
  }

  //*8*// ei toimi
   const message1 = "Hello, world!";
  console.log(message1);

  //*9*//
  function greet(name) 
    {
      console.log("Hello, " + name);
    } 
    greet("Alice");

    //*10*//
    const numbers = [1, 2, 3]; 
    console.log(numbers[2]);

    //*11*//
     const person = { 
        name: "Alice", 
        age: 30,
    adddres: {
        street: "123 Main St",
        city:"Anytown",
    },
 }; 
    console.log(person.adddres.street);

    //*12*//
function add(a, b) 
  {
    const result = a + b; 
    return result;
  } 
  const sum1 = add(3, 4); 
  console.log(sum1);

  //*13*//
  const temperature = 25; 
  console.log(temperature);

  //*14*//
  const y = 5; 
  console.log(y);

  //*15*//
   function greet(name) 
  {
    console.log("Hello, " + name); 
   
  } 
  greet("Alice");

  //*16*//
   const day = "Monday"; 
  switch (day) 
  {
    case "Monday": 
      console.log("It's Monday."); 
      break;
    case "Tuesday": 
      console.log("It's Tuesday."); 
      break; 
    case "Wednesday": 
      console.log("It's Wednesday."); 
       
    default: 
      console.log("It's another day.");}

      //*17*//
      const x = 10; 
  if (x == 5) 
  {
    console.log("x is equal to 5."); 
  } 
  else 
  { 
    console.log("x is not equal to 5."); 
  }

  //*18*//
  function multiply(a, b) 
    {
      return a * b; 
    } 
    const result = multiply(3, 4); 
    console.log(result);

    //*19*//
     const numbers1 = [1, 2, 3]; 
    for (let i = numbers.length - 1; i >= 0; i--) 
    { 
      console.log(numbers1[i]);
    }

    //*20*//
     const person1 = { name: "Bob",
        age: 18,
      }; 
    console.log(person1.age);
  

