import * as tasks from './tasks';

for (let task in tasks) {
    tasks[task]();
}

showHello('greeting', 'TypeScript!');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
} 
