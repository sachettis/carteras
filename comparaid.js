import { carteras } from "./basecarteras.js";

export function comparaid(){
    const newid=carteras.map(el=>el.id)
    const repetidos=[];
    newid.forEach((el,index)=>{
        carteras.forEach((ele,i)=>{
             if(el===ele.id && index!==i){
                repetidos.push(el);                
            }
        })

    })
    if(repetidos.length!==0){
        alert(`el o los elementos con el id ${repetidos} están repetidos en basecarteras`)
    }
    
}
