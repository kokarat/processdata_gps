exports.getImie = function(data ,callback){

	try{

		if(data.indexOf("imei") > -1){

			var array_imei = data.match("imei:"+"(\\d+),")

			var position_of_array_imie = 1

			var imei_tk103 = array_imei[position_of_array_imie]

			return callback(imei_tk103)
		}
		if(data.indexOf("VT300") > -1){
			var imie_vt300 = data.match("\\d{15}")[0];
			return callback(imie_vt300)
		}
		var Imei_avl05 = data.substring(4,19)
		return callback(Imei_avl05)	
	}

	catch (ex) {

		return callback("Error->process_gps_data->getImei")

	}

}

exports.getLatitude = function(data, callback){

	try{

		var Latitude = data.match("(\\d+)(\\d{2}\\.\\d+),"+"([NS]),");

		var DegreeLatitude = (parseFloat(Latitude[1]) + (parseFloat(Latitude[2]) / 60)).toFixed(6);

		return callback(DegreeLatitude)	
	}

	catch(ex){

		return callback("Error->process_gps_data->getLatitude")

	}

}

exports.getLongtitude = function(data, callback){

	try{

		var Longtitude = data.match("(\\d+)(\\d{2}\\.\\d+),"+"([EW])?,");

		var DegreeLongtitude = (parseFloat(Longtitude[1]) + (parseFloat(Longtitude[2]) / 60)).toFixed(6);

		return callback(DegreeLongtitude)	
	}

	catch(ex){

		return callback("Error->process_gps_data->getLongtitude")

	}

}