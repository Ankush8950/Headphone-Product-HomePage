const items = document.getElementById('Items_list')
const hamberger = document.getElementById('hamberger')

hamberger.addEventListener('click',function(){
    if(items.style.display === 'none'){
        items.style.display = 'block'
    }
    else{
        items.style.display = 'none'
    }
})