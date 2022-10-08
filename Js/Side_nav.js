function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("Overlay").style.opacity = "1";
    document.getElementById("Overlay").style.visibility = "visible";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("Overlay").style.opacity = "0";
    document.getElementById("Overlay").style.visibility = "hidden";
  }

$('#Classes_List').click(function(){
    $("html, body").animate({ scrollTop: "2750" });
});

$('#Contacts').click(function(){
    $("html, body").animate({ scrollTop: "3950" });
});

 $('#Location').click(function(){
    $("html, body").animate({ scrollTop: "3570" });
});

$('#Admission').click(function(){
    $("html, body").animate({ scrollTop: "3170" });
});