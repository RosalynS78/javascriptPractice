//Template Strings

const num1 = 1;
const num2 = 2;
`Adding ${num1} and ${num2} gives ${num1 + num2}.`; // `Adding ${num1} and ${num2} gives ${num1 + num2}.`;

// const total = `Adding ${num1} and ${num2} gives ${num1 + num2}`;
// console.log(total);

const track = "JavaScript";
`This track on exerism.org is ${track.toUpperCase()}.`;

const grade = 95;

`You have ${grade > 90 ? 'passed' : 'failed'} the exam.`;
// => You have passed the exam.