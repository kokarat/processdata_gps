exports.getImie = function(data ,callback){

	try{

		if(data.indexOf("imei") > -1){

			var array_imei = data.match("imei:"+"(\\d+),")

			var position_of_array_imie = 1

			var imei = array_imei[position_of_array_imie]

			return callback(imei)
		}

		var Imei = data.substring(4,19)
		return callback(Imei)	
	}

	catch (ex) {

		return callback("Error->process_gps_data->getImei")

	}

}