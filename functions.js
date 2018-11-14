var x = 10;

function square1()
{
    return x*x;
}

function square2()
{
    return x*x*x;
}

console.log(square1(1));
console.log(square1(10));

console.log(square2(2));
console.log(square2(10));

for( let i = 0; i <= 10; i ++)
{
    console.log(square1(i));
}

