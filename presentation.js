//import fotoprincipal from './imagenes/freepik-simple-flat-beautiful-boutique-youtube-banner-20241223225404DmW2.png'

export function Presentation(){
    let $principalsection=document.createElement('section');
    $principalsection.classList.add('presentation-container')
    $principalsection.innerHTML=`
    <div class="principal-photo">
    </div>
     <article class="phrase">
      <div class="phrase-p">
        Producto 100% hecho por manos argentinas con calidad internacional.
      </div>
      </article>
      <article class="presentation-main">
      <h3>Carteras</h3>
      <div class="presentation-item">
        
        <section>
        <a href="#/menu">
        <img src="./imagenes/cartera_mustard_kylee_para_muj.jpg" alt="carteras">
        </a>
        </section>
        <section class="presentation-prod"><p>Descubre la elegancia atemporal de nuestras carteras. Cada pieza es una obra de arte artesanal y 100% argentina, confeccionada en cuero o piel genuina. Diseños únicos que combinan calidad, durabilidad y precios accesibles.</p></section>
      </div>

      <h3>Mochilas</h3>
      <div class="presentation-item">
        <section>
         <a href="#/menu">
        <img src=".//imagenes/dora.jpg" alt="mochilas">
        </a>
        </section>
        <section class="presentation-prod">Llevá la esencia de Argentina con vos. Cada mochila es el resultado del trabajo de manos artesanas, usando las mejores pieles para ofrecerte un producto de alta calidad y diseño único a un precio accesible.</section>
      </div>

       <h3>Otros</h3>
      <div class="presentation-item">
        <section>
         <a href="#/menu">
        <img src=".//imagenes/matilde rosado.jpg" alt="otros">
        </a>
        </section>
        <section class="presentation-prod">Descubre nuestros productos. Sumá a tu estilo nuestros productos: bolsos, protectores, riñoneras y mucho más. Creados a mano para durar y con precios al alcance de todos.</section>
      </div>

      
    </article>
    `;
    return $principalsection;
}