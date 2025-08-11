import { carteras } from "./basecarteras.js";
import {Menulateral} from './menulateral.js';

let $fragmento=document.createDocumentFragment();
let $burguerbtn=document.createElement('div');
let $productossection;
let $prodarticle;
export function Menuproductos(cate){
    let de=document.documentElement;
    $prodarticle=document.createElement('article'); //cambio
    de.scrollTop=0; //envia la paGIA AL INICIO
    let categoria=cate||'Todos'
    console.log(categoria)
    $prodarticle.classList.add('prod-list');
    $productossection=document.createElement('section');
    
    $productossection.classList.add('product-container')
    
    $burguerbtn.classList.add('ham-btn')
    $burguerbtn.innerHTML=`
    <button class="hamburger hamburger--collapse" type="button">
    <span class="hamburger-box">
    <span class="hamburger-inner"></span>
    </span>
    </button>`;
    const categorias=[];
    if(carteras.length!==0){
    carteras.map(el=>{
        if(categorias.includes(el.categoria)){
            return
        }else{
            categorias.push(el.categoria)
        }
    })
    //console.log(categorias)
    $productossection.appendChild(Menulateral(categorias))
    
    categorias.sort().forEach(el=>{
        if(categoria==='Todos'){
            crearprods(el)
        }else 
        if(el===categoria){
             crearprods(el)  
        
        }
    }
    )
    return $productossection;
    }else{
        let $noprod=document.createElement('h3');
        $noprod.textContent='No hay productos que mostrar'
        return $noprod
    }
}

function crearprods(el){
    
    let $cattitle=document.createElement('h2');
        $cattitle.textContent=String(el).toUpperCase();
        $cattitle.classList.add('cat-title');
        $prodarticle.appendChild($cattitle);
        carteras.forEach(ele=>{
            if(ele.categoria===el){
                let $figproducto=document.createElement('figure');
                $figproducto.classList.add('prod-figure-container');
                $figproducto.innerHTML=`
                    <h3>${ele.nombre}</h3>
                    <img src=${ele.imagen} alt=${ele.nombre} class="prod-img">
                    <figcaption class="precio">Precio:${ele.precio}</figcaption>
                    <button data-id=${ele.id} class="btn-ver">Ver producto</button>
                    
                `;

                $fragmento.appendChild($figproducto)
                
               
            }
                //$productossection.appendChild($fragmento)
            //$productossection.appendChild($burguerbtn)
           
           
        })
        $prodarticle.appendChild($fragmento)
           $prodarticle.appendChild($burguerbtn)
        $productossection.appendChild($prodarticle)

}
