window.onload=function(){
  $('a:eq(0)').button({
      icons: {
        primary: "ui-icon ui-icon-circle-arrow-s"
      },
     
    });  $('a:eq(1)').button({
      icons: {
        primary: "ui-icon ui-icon-circle-arrow-n"
      },
     
    });
  

  $(".descer").click(function(){
    $("html,body").animate({scrollTop: $("#serpentes").offset().top}, 2000);       
        });
    $(".subir").click(function(){
    $("html,body").animate({scrollTop: $(".top").offset().top}, 2000);       
        });
 
function browser(){
var browser=navigator.appName;  
var b_version=navigator.appVersion;  
var version=parseFloat(b_version);  

if(browser=="Microsoft Internet Explorer"){
  $("#browser_dialog").dialog({
          
            width: 400,
            show: "bounce",
            hide: "fade",
            modal: true
        });
  }
}

browser();
  $("#lanche1").click(function(){
        $("#dialog").dialog({
           
            width: 525,
            show: "fade",
            hide: "fade",
            modal: true
        });
             
      });
      $("#restaurante").click(function(){
        $("#restaurante_dialog").dialog({
     
      width: 539,
      show: "fade",
      hide: "fade",
      modal: true
    });
        });
      $("#macaco_aranha").click(function(){
        $("#macaco_aranha_dialog").dialog({
     
      width: 539,
      show: "fade",
      hide: "fade",
      modal: true
    });
        });
           $("#leao").click(function(){
        $("#leao_dialog").dialog({
     
      width: 539,
      show: "fade",
      hide: "fade",
      modal: true
    });
        });
    $("#hipopotamo").click(function(){
        $("#hipopotamo_dialog").dialog({
     
      width: 539,
      show: "fade",
      hide: "fade",
      modal: true
    });
        });
    $("#serpentes").click(function(){
        $("#serpente_dialog").dialog({
     
      width: 539,
      show: "fade",
      hide: "fade",
      modal: true
    });
        });
    $("#jacare").click(function(){
        $("#jacare_dialog").dialog({
     
      width: 539,
      show: "fade",
      hide: "fade",
      modal: true
    });
        });
    $("#chimpanze").click(function(){
        $("#chimpanze_dialog").dialog({
     
      width: 539,
      show: "fade",
      hide: "fade",
      modal: true
    });
        });
   $("#macaco_prego").click(function(){
        $("#macaco_prego_dialog").dialog({
     
      width: 539,
      show: "fade",
      hide: "fade",
      modal: true
    });
        });
     $("#urso").click(function(){
        $("#urso_dialog").dialog({
     
      width: 539,
      show: "fade",
      hide: "fade",
      modal: true
    });
        });
    $("#cervideos").click(function(){
        $("#cervideos_dialog").dialog({
     
      width: 539,
      show: "fade",
      hide: "fade",
      modal: true
    });
        });
    $("#tigres").click(function(){
        $("#tigres_dialog").dialog({
     
      width: 539,
      show: "fade",
      hide: "fade",
      modal: true
    });
        });
      $("#avestruz").click(function(){
        $("#avestruz_dialog").dialog({
     
      width: 539,
      show: "fade",
      hide: "fade",
      modal: true
    });
        });
    $("#pelicano").click(function(){
        $("#pelicano_dialog").dialog({
     
      width: 539,
      show: "fade",
      hide: "fade",
      modal: true
    });
        });
    $("#urso").click(function(){
        $("#urso_dialog").dialog({
     
      width: 539,
      show: "fade",
      hide: "fade",
      modal: true
    });
        });
      $("#tucano").click(function(){
        $("#tucano_dialog").dialog({
     
      width: 539,
      show: "fade",
      hide: "fade",
      modal: true
    });
        });
        $("#quelonios").click(function(){
        $("#cagado_dialog").dialog({
     
      width: 539,
      show: "fade",
      hide: "fade",
      modal: true
    });
        });
     $("#mutuns").click(function(){
        $("#mutuns_dialog").dialog({
     
      width: 539,
      show: "fade",
      hide: "fade",
      modal: true
    });
        });
    }