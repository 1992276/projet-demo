import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let noms =[
  "a","b","c"
];
function Etudiant(pros){
  return (
    <h1>prenom   {pros.prenom} famille {pros.famille}</h1>
  );
}
function Matricule(pros){
  return(<h1>Matricule {pros.matricle} </h1>);
}

function App(props){
  return(
    <ul>{props.nums.map(n=><li>{n}</li>)}</ul>
  );

}

  


 


ReactDOM.render(
  <App nums={["1","2"]}/>,
  document.getElementById('root')
);
