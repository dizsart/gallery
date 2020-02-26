import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const tasks = ['take out the trash', 'shovel the driveway', 'walk the dog'];
function Title(){
    return <h1> Task List</h1>
}
function tick() {
const element = (
    
<div className="container" class="font-weight-light" align="center">
    <Title/>
    <h1>Hello World!</h1>
<h2>It is {new Date().toLocaleTimeString()}.</h2>
    <ol>
    {tasks.map((task, index) => 
    <li key = {index}> {task} </li>)}
    </ol>

</div>
);

ReactDOM.render(element, document.getElementById('root'))
}

setInterval(tick, 1000);
