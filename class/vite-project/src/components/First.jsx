function First(){
   /* let rn=Math.floor(Math.random()*10);
    let num=7;
    let el;
    if(rn==num){
        el=<h1> CONGO</h1>
    }
    else{
        el=<h1> better luck</h1>
    }
        */
    return(
        // here statements are not allowed5
        <div>
           
           
           {Math.floor(Math.random()*10)===7?<h1>WON</h1> :<h1>loss</h1>} 
            
        </div>
    )
}
export default First;
// conditional statements are not allowed inside the return statement like if,while,let...etc
// we can write switch,ternary operators,like array methodslike filter,map inside the return statement
// Math.random includes [0,1) means it does not include 1