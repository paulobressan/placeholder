export default {
    bind(el, binding, vnode){
        el.style.transition = 'transform 1s';
        var zoom = true;
        el.addEventListener('click', ()=>{                       
            if(zoom){
                el.style.transform = `scale(${binding.value ? binding.value : '1.1'})`;
                zoom = false;
                return;
            }
            el.style.transform = `scale(1)`;
            zoom = true;
            
        });
    }
}