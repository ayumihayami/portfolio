$(function(){
    $(".dropMenu").mouseover(function(){
        $(this).children(".dropDisplay").stop().slideDown();
    });
    $(".dropMenu").mouseout(function(){
        $(".dropDisplay").stop().slideUp();
    });
});