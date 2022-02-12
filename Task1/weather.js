window.onload = makeAjaxRequest;

let xhr = false;

function makeAjaxRequest() {
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		if (window.ActiveXObject) {
				xhr = newActiveXObject("Microsoft.XMLHTTP");
		}
	}
	if (xhr) {
		xhr.open("GET", "weather.json", true);
		xhr.send(); 
		xhr.onreadystatechange = showContents; 
	} else {
		document.getElementById("updatemessage").innerHTML = "Could not perform stated Request";
	}	
}

function showContents () {
	if (xhr.readyState == 4) {
	    if (xhr.status == 200) {
		    let data = JSON.parse(xhr.responseText); 
			let txt = "<tr><th>City ID</th><th>City Name</th><th>Current Conditions</th><th>temperature</th><th>Wind Speed</th><th>Wind Direction</th><th>Wind Chill Factor</th><th>icon</th></tr>";
			for (i =0; i<data.length/2;i++) {
			  txt += "<tr>"
			  txt += "<td>" + data[i].city_id + "</td>";
			  txt += "<td>" + data[i].city_name + "</td>";
			  txt += "<td>" + data[i].current_conditions + "</td>";
			  txt += "<td>" + data[i].temperature + "</td>";
			  txt += "<td>" + data[i].wind_speed + "</td>";
			  txt += "<td>" + data[i].wind_direction + "</td>";
			  txt += "<td>" + data[i].wind_chill_factor + "</td>";
              txt += "<td><img src ='" + data[i].icon + "'  style='height:50px;' ></td>";
			  txt += "</tr>"
              
			}
			document.getElementById("weatherTable").innerHTML = txt;
		} else {
		document.getElementById("updatemessage").innerHTML = "Could not perform stated request. Error: " + xhr.status;
		}
	}
}


setTimeout(update,5000);
	

function update () {
	if (xhr.readyState == 4) {
	    if (xhr.status == 200) {
		    let data = JSON.parse(xhr.responseText); 
			let txt = "<tr><th>City ID</th><th>City Name</th><th>Current Conditions</th><th>temperature</th><th>Wind Speed</th><th>Wind Direction</th><th>Wind Chill Factor</th><th>icon</th></tr>";
			for (i =data.length/2; i<data.length;i++) {
			  txt += "<tr>"
			  txt += "<td>" + data[i].city_id + "</td>";
			  txt += "<td>" + data[i].city_name + "</td>";
			  txt += "<td>" + data[i].current_conditions + "</td>";
			  txt += "<td>" + data[i].temperature + "</td>";
			  txt += "<td>" + data[i].wind_speed + "</td>";
			  txt += "<td>" + data[i].wind_direction + "</td>";
			  txt += "<td>" + data[i].wind_chill_factor + "</td>";
              txt += "<td><img src ='" + data[i].icon + "'  style='height:50px;' ></td>";
			  txt += "</tr>"
			}
			document.getElementById("weatherTable").innerHTML = txt;
		} else {
		document.getElementById("updatemessage").innerHTML = "Could not perform stated request. Error: " + xhr.status;
		}
	}
}



