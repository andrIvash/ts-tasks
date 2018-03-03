import task1 from './tasks/task1';
import task2 from './tasks/task2';
import task3 from './tasks/task3';
import task4 from './tasks/task4';
import task5 from './tasks/task5';
import task6 from './tasks/task6';
import task7 from './tasks/task7';
import task8 from './tasks/task8';
import task9 from './tasks/task9';
import task10 from './tasks/task10';
import task11 from './tasks/task11';
import task12 from './tasks/task12';
import task13 from './tasks/task13';

task1();
task2();
task3();
task4();
task5();
task6();
task7();
task8();
task9();
task10();
task11();
task12();
task13();

showHello('greeting', 'TypeScript!');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
} 
