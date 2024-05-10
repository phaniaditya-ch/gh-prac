function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    const sqrtNum = Math.sqrt(num);
    for (let i = 3; i <= sqrtNum; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function printFirstNPrimes(n) {
    const primes = [];
    let num = 2;
    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    console.log(primes.join(', '));
}

//CHANGEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
//this is a change
function printNumbersUpToN(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

const n = 10; // Change this to the desired number of prime numbers you want to print
printFirstNPrimes(n);
