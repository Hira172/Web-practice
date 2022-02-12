$(document).ready(function() {
  $("#cities").change(function() {
    let city = $(this).val();
    let key = 'd87f5b6cfe50866d16fd48d116d606ee';
    let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric'+'&appid='+key;
    $.ajax( {
    url: apiUrl,
    type: "GET",
    dataType: "json", 
    success: function(response){
      console.log(response);    
      $.each(response, function() {   
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();  
        today = dd + '-' + mm + '-' + yyyy;
        let txt = "<table><tr><th>Date</th><td>"+today+"</td></tr>";
        let tempC= response["main"]["temp"];
        // let tempC=36;
        let tempF = (tempC * 9/5) + 32;
        txt += "<tr><th>"+tempC+"&#8451;</br>"+tempF.toFixed(2)+"&#8457;</th><th><h1><img src='http://openweathermap.org/img/w/"+response["weather"][0]["icon"]+".png' />"+response["name"]+"</h1>"+response["weather"][0]["main"]+"</th></tr>"// row 1
        if(tempC>35 || tempC<-5)
          txt+="<tr><td colspan='2'><p class='warning'>severe weather!!!</p><td></tr>";
        let windkm = response["wind"]["speed"];
        let windmile = response["wind"]["speed"]/1.609;
        // let windmile = 53;
        txt+= "<tr><td><h4>Wind Speed</h4></td><td>"+windkm+"km/h</br>"+windmile.toFixed(2)+"mi/h</td></tr>"// row 2
        if(windmile>50)
          txt+="<tr><td colspan='2'><p class='warning'>severe weather!!!</p><td></tr>";
        txt+= "<tr><td><h4>Wind Direction</h4></td><td>"+response["wind"]["deg"]+"&#176;</td></tr>"// row 3
        txt += "</table>"; 
        $("#data").html(txt);					
        if ($("#data").attr("hidden")) {
          $("#data").show();	
        }

      });

    },	

    error: function(xhr, error){
      $("#info").html("");
      $("#info").show();
      $("#data").hide();	
      $("#info").append(error.toUpperCase() + ". HTTP status: " + xhr.status);
    }
  });    
  });	
});


function loadEngland() {
  if ($("#cities").attr("hidden")) {
    $("#cities").show();	
  }
  $("#cities").load("england-cities.html"); 
  $("#data").hide();	
  $("#info").hide();

}

function loadIreland() {
  if ($("#cities").attr("hidden")) {
    $("#cities").show();	
  }
  $("#cities").load("ireland-cities.html"); 
  $("#data").hide();	
  $("#info").hide();
}

function loadWales() {
  if ($("#cities").attr("hidden")) {
    $("#cities").show();	
  }
  $("#cities").load("wales-cities.html"); 
  $("#data").hide();	
  $("#info").hide();
}
 
function loadScotland() {
  if ($("#cities").attr("hidden")) {
    $("#cities").show();	
  }
  $("#cities").load("scotland-cities.html"); 
  $("#data").hide();	
  $("#info").hide();
}
 