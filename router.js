import { Presentation } from './presentation.js';
import { Menuproductos } from './menuproductos.js';
export function Router(){
    const {hash}=location;

     
    //console.log(hash)
   document.getElementById('app').innerHTML='';
   
        if(!hash || hash==='#/'){
            //console.log('pagina principal')
            document.getElementById('app').appendChild(Presentation())
        }else if(hash==='#/menu'){
            //console.log('menuproductos')
            document.getElementById('app').appendChild(Menuproductos())
            
        }


    

}
