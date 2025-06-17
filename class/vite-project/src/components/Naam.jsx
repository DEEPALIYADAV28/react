/*function Naam(prop){
    console.log(props);
    return(
        <div>
            <h1>hjk:</h1>
            <button> naam badal luna</button>
        </div>
    )
}
    
export default Naam;
*/
import{useState} from "react";
function Naam({age,name,isMarried}){
      const  [naaam,setNaam]=useState()
    function handlechange(){
        console.log(naaam,"before");
        setNaam("Rahul") //setNaam is asynchronous  
        
        console.log(name,"after");//react m variable change hote hh but no re rendering is there thta's why we see no chage on ui isliiye useeffect is introduced
    }
    return(
        <div>
            <h1>hjk:{naaam}</h1>
            <button onClick={handlechange}> naam badal luna</button>
        </div>
    )
}
export default Naam;
//use state is a hook return two elements in an array state and function
// state can't be changedeed n directly we need another func to chage it