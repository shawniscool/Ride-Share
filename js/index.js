$(document).ready(function(){
	//get date from click
	
	//Parse query
	Parse.initialize("60pOb4BeNwwtN2Kmge840kLA7flw0GpVWJ1m0fAr", "YugQLv3sJlPvHtuITAW1gmCd85ubEoOePgqlxr5w");
	var rideObject = Parse.Object.extend("Ride");
	var query = new Parse.Query("Ride");

	//Find all dates in database
	var dateList = [];
	query.find({
		success:function(results){
			for(var i = 0; i<results.length; i++){
				ind = dateList.indexOf(results[i].get("date"))
				if (ind == -1) {
					dateList.push(results[i].get("date"))
				}
			}
		},
		error: function(err){
			alert("Query to database raised unexpected error.")
		}
	});

	//TODO: sort the dates
	for(var i = 0; i<dateList.length; i++){
		console.log(dateList[i]);
		sectionNum="section"+i.toString()
		$('#dates').appendChild("<li><a href = " + sectionNum + "><span>" + dateList[i] + "</span></a></li>");
		$('#content').appendChild("<section id =" + sectionNum + "></section>");
	}

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