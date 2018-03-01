import task1 from './tasks/task1';
import task2 from './tasks/task2';
import task3 from './tasks/task3';
import task4 from './tasks/task4';
import task5 from './tasks/task5';

task1();
task2();
task3();
task4();
task5();

showHello('greeting', 'TypeScript!');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
} 
