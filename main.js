import {App} from './app.js';
import {Modal} from './modal.js';
import { Menuproductos } from './menuproductos.js';


const listener=(e)=>{
        if(e.target.matches('[data-name]')){
                //console.log('click en los enlaces',e.target.dataset.name)
                document.getElementById('app').innerHTML='';
                if(e.target.dataset.name==='TODOS'){
                    document.getElementById('app').appendChild(Menuproductos())
                }else{
                    document.getElementById('app').appendChild(Menuproductos(e.target.dataset.name))
                }
                
        }
        if(e.target.matches('.btn-ver')){
                console.log('clic boton ver',e.target.dataset.id)
                e.stopPropagation();
                let $productossection=document.querySelector('.product-container')
                let $modalexistente=document.querySelector('.modal-container')
                if($modalexistente){
                    return;
                }else{
                    $productossection.appendChild(Modal(e.target.dataset.id))
                }
                
        }
        if(e.target.matches('.hamburger-inner')|| e.target.matches('.hamburger-box') || e.target.matches('.hamburger')){
            e.stopPropagation();    
            //console.log(e.target)
            let $burguerbtn=document.querySelector('.hamburger');
            if($burguerbtn.classList.contains('is-active')){
                $burguerbtn.classList.remove('is-active')
            }else{
                $burguerbtn.classList.add('is-active')
            }
            //$burguerbtn.children[0].classList.toggle('is-active')
            let $menulateral=document.querySelector('.lateral-menu-container')
            $menulateral.classList.toggle('lateral-menu-visible')
                
        }
        if(e.target.matches('.close-modal')){
            let $modalexistente=document.querySelector('.modal-container')
            if($modalexistente){
                $modalexistente.remove();
            }     
        }
}

document.addEventListener('click',listener)

document.addEventListener('DOMContentLoaded',()=>{
    window.location.hash='#/';
    App();

})
window.addEventListener('hashchange',()=>App())

