$(document).ready(function(){
	
	
	//Parse query
	Parse.initialize("60pOb4BeNwwtN2Kmge840kLA7flw0GpVWJ1m0fAr", "YugQLv3sJlPvHtuITAW1gmCd85ubEoOePgqlxr5w");
	var rideObject = Parse.Object.extend("Ride");
	var query = new Parse.Query(rideObject);
	query.ascending("date");
	
	//Find all dates in database
	var dateList = [];
	query.find({
		success:function(results){
			for(var i = 0; i<results.length; i++){
				ind = dateList.indexOf(results[i].get("date"));
				if (ind == -1) {
					dateList.push(results[i].get("date"));
				}
			}
			console.log("DateList:" + dateList);
			for(var i = 0; i<dateList.length; i++){
				console.log("there");
				var md = parseDate(dateList[i])//returns array of [month, day]
				var className = md[0].toString() + md[1].toString();
				var sectionNum="section"+i.toString();
				$('.content').append("<section id ='" + sectionNum + "' class ='" + className + "'></section>");
				$('#dates').append("<li><a href = #" + sectionNum + "><span>" + (md[0]+1).toString() + "/" + md[1].toString() + "</span></a></li>");

				
			}
			var text = "";
			for(var i = 0; i<results.length; i++){
				console.log("here");
				var ride = results[i];
				text += "<div class = 'mediabox'>";
				text += "<h3>" + ride.get("time") + "</h3>";
				text += "<h5>" + ride.get("direction") + "</h5>";
				text += "<ul>";
					text += "<li> Name: " + ride.get("name") + "</li>";
					text += "<li> Contact Info: </li>";
					text += "<ul>";
						text += "<li> Phone: " + ride.get("phone") + "</li>";
						text += "<li> email: " + ride.get("email") + "</li>";
					text += "</ul>";
					text += "<li> Preferred Meeting Place: " + ride.get("place") + "</li>";
					text += "<li> Method of Transportation" + ride.get("transportation") + "</li>";
					text += "<li> Additional Comments: " + ride.get("additional") + "</li>";
				text += "</ul>";
				var md =  parseDate(ride.get("date"));
				var className = md[0].toString() + md[1].toString();
				var classStr = "."+className;
				$(classStr).append(text);
				text = "";
			}
		},
		error: function(err){
			alert("Query to database raised unexpected error.")
		}
	});


	

	/*
	query.equalTo("date", date);

	query.find({
		success:function(results){
			var text = "";
			for(var i = 0; i<results.length; i++){
				var ride = results[i];
				text += "<div class = 'mediabox'>"
				text += "<h3>" + ride.get("time") + "</h3>"
				text += "<h5>" + ride.get("direction") + "</h5>"
				text += "<ul>"
					text += "<li> Name: " + ride.get("name") + "</li>"
					text += "<li> Contact Info: </li>"
					text += "<ul>"
						text += "<li> Phone: " + ride.get("phone") + "</li>"
						text += "<li> email: " + ride.get("email") + "</li>"
					text += "</ul>"
					text += "<li> Preferred Meeting Place: " + ride.get("place") + "</li>"
					text += "<li> Method of Transportation" + ride.get("transportation") + "</li>"
					text += "<li> Additional Comments: " + ride.get("additional") + "</li>"
				text += "</ul>"

			}

		},
		error: function(err){
			alert("Query to database raised unexpected error.")
		}
	});*/
});

function createTabs(){
	

}

function parseDate(d){
	month = d.getMonth();
	day = d.getDate();
	return [month, day];
}