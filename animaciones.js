window.onscroll = function(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 2692){

        document.querySelector('got-top-container')
        .classList.add('show')
    }else{
        document.querySelector('got-top-container')
        .classList.remove('show')
    }
}