function printFirstNFibonacci(n) {
    const fibonacci = [0, 1]; // Initialize with the first two Fibonacci numbers
    
    for (let i = 2; i < n; i++) {
        const nextFibonacci = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(nextFibonacci);
    }

    console.log(fibonacci.join(', '));
}

const n = 100; // Change this to the desired number of Fibonacci numbers you want to print
printFirstNFibonacci(n);
