// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve({
      name: 'Shehan Disanayake',
      age: 25
    })
  },3000)
})

promise.then(result =>{
  alert(result.name);
})