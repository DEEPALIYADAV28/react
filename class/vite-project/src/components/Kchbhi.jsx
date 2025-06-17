function Kchbhi(){
     let a=10;
     let b="sam";
     let c=true;
     let f=false;
     let d="undefined";// undefined word as aa string hi nzr aaega wrnanhi jese baaki as json.stringify se aarhi hai
     let e=null;
     return(
        <div>
            {1+1}
            {a}
            {b}
            {JSON.stringify(c)}
            {JSON.stringify(f)}
            {JSON.stringify(d)}
            {JSON.stringify(e)}

        </div>
     )
}
export default Kchbhi;