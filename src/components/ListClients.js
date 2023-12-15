import axios from 'axios';
import {useEffect,useState} from 'react';
import ElementsArticle from './ElementsArticle';
function ListClients() {
const[Clients,setClients]=useState([]);
useEffect(() => {
axios.get("http://localhost:3001/Clients")
.then((response)=>setClients(response.data));
}, []);
const deleteClients = async (Nom) => {
if (!window.confirm("Are you sure you want to delete")) {
return;
}
axios.delete('http://localhost:3001/Clients/' + Nom)
.then(() => {
console.log('successfully deleted!')
setClients(prevClients => prevClients.filter((Clients) =>
Clients.Nom !== Nom));
}).catch((error) => {
console.log(error)
})
}
return ( 
<>
<center><i><h2>Liste des clients </h2></i></center>
<ElementsArticle Clients={Clients} deleteClient={Clients}/>
</>
);
}
export default ListClients;
