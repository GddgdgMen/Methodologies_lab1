const solveEquation = (a, b, c) => {
    console.log(`\nYour equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);
    const roots = [];
    const disc = b * b - 4 * a * c;
    console.log(`The discriminant is ${disc}`);
    if (disc === 0) {
        const x = -b / (2 * a);
        roots.push(x);
    } else if (disc > 0) {
        const x1 = (-b - Math.sqrt(disc)) / (2 * a);
        const x2 = (-b + Math.sqrt(disc)) / (2 * a);
        roots.push(x1, x2);
    }
    printRoots(roots);
    console.log();
};

const printRoots = (roots) => {
    const rootsLength = roots.length;
    console.log(`There are ${rootsLength} roots`);
    if (rootsLength == 1) {
        console.log(`x1 is: ${roots[0]}`);
    } else if (rootsLength == 2) {
        console.log(`x1 is: ${roots[0]}`);
        console.log(`x2 is: ${roots[1]}`):
    }
};

export { solveEquation };