function Button(){
    function ss(a,b){
        console.log("hello");
    }
    return(
        <div>
        <button onClick={ss}>
            Click me pleae!
        </button>
        <button onClick={()=>ss("vohra","maverik")}>
            Click me pleae!
        </button>
        // whenever an event is triggered we have event object

        </div>
    )
} 
export default Button;