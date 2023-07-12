
//Topic Filter JS
$(document).ready(function(){
$(".filter-item").click(function() {
    const value = $(this).attr("data-filter")
    if(value=="all"){
        $(".art-box").show('1000')
    }
    else{
        $('.art-box').not('.' + value).hide('1000')
        $('.art-box').filter('.' + value).show('1000')
    }
})
})

//Active button
$(".filter-item").click(function(){
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
})