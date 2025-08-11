export function Menulateral(cat){
    if(!cat){
        return;
    }
    let $fragmento1=document.createDocumentFragment();
    let $lateralmenu=document.createElement('article');
    $lateralmenu.classList.add('lateral-menu-container');
    let $menuimg=document.createElement('img');
    $menuimg.src='./imagenes/Logo luxe.jpg';
    let $alldiv=document.createElement('div');
    $alldiv.dataset.name='TODOS'
    $alldiv.textContent='TODOS'
    $fragmento1.appendChild($alldiv)
    cat.forEach(el => {
        let $lateraldiv=document.createElement('div');
        $lateraldiv.classList.add('lateral-content');
        $lateraldiv.dataset.name=el;
        $lateraldiv.textContent=String(el).toUpperCase();
        $menuimg.classList.add('lateral-img');
        $fragmento1.appendChild($lateraldiv);
        

    });
        $fragmento1.appendChild($menuimg);
        $lateralmenu.appendChild($fragmento1);
        return $lateralmenu
    
}