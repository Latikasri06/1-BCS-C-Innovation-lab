let i = 1;
while (i <= 10) 
    {
        console.log(i);
        i++;
    }

let input;
do 
{
    input = prompt("Enter number greater than 10:");
} 
while (input <= 10);


let n = 5;
let sum = 0;
for (let i=1;i<=n;i++) 
    {
        sum += i;
    }
        console.log("Sum:", sum);


for (let i = 1; i <= 5; i++) 
    {
        for (let j = 1; j <= 10; j++) 
            {
                console.log(i + " x " + j + " = " + (i * j));
            }
    }
