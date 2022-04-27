let sum = $(".container").height()
let page = 0;
let max = sum * 7;
let active = 1;

$("#button-down").click(function() {
    if(page < max){
        active++;
        console.log(active)
        page = page == max ? max : page + sum;
        $('.container').animate({
            scrollTop: page
        }, 0);
        setTimeout(() => {
            $("#page-"+active).children('.animate').addClass('animated');
        },500)
    }
})

$("#button-up").click(function() {
    if(page > 1){
        active--;
        console.log(active)
        page = page == 0 ? 0 : page - sum;
        $('.container').animate({
            scrollTop: page
        }, 0);
    }
})


  