$(function(){
    var l=$("#rectangle-width"),
    u=$("#rectangle-height");
    function c(e,t){
        return Math.round(e*Math.pow(10,t))/Math.pow(10,t)}$(".rectangle form").submit(function(e){
            e.preventDefault();
            var t=Number(l.val()),
            a=Number(u.val()),
            r=c(2*t+2*a,2),
            n=c(t*a,2);
            $("#rectangle-perimeter").val(r),
            $("#rectangle-area").val(n)
        })
    });