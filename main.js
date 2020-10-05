$(document).ready(function(){
    $("button").click(function(){
if ($("#btn").hasClass("night")){
    day();
}else if($("#btn").hasClass("day")){
    night();
}
    });
    function night(){
        $("#btn").removeClass("day");
        $("#btn").addClass("night");
        $("#text")[0].innerHTML = "DARK MODE";
        $("body").css("background-color", "#032b43da");
        $("#toggle-btn").css("right", "3px");
        $("#btn").css("background-color", "#032b43");  
    }

    function day(){
        $("#btn").removeClass("night");
        $("#btn").addClass("day");
        $("#text")[0].innerHTML = "LIGHT MODE";
        $("body").css("background-color", "#0985e36e");
        $("#toggle-btn").css("right", "45px");
        $("#btn").css("background-color", "#0984e3");
    }
  
})