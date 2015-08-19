var expect = require('chai').expect
var process_gps_data = require('../process_gps_data')

describe('Get_Longtitude', function() {

	describe('#tk103()', function() {

		it('insert gps data shot message should return error message', 
		function(done) {

			data_for_send = "##,imei:359710042160508,A;"

			process_gps_data.getLongtitude(data_for_send, function(answer){
				expect("Error->process_gps_data->getLongtitude").to.equal(answer)
			})

			done();
		})

		it('insert gps data long message should return 101.756725', 
		function(done) {

			data_for_send = "imei:359710042160508,tracker,1508151807,"+
							",F,100734.000,A,1358.7703,N,10145.4035,E"+
							",10.64,181.61,,0,0,0.00%,,;"

			process_gps_data.getLongtitude(data_for_send, function(answer){
				expect("101.756725").to.equal(answer)
			})

			done();
		})
	})

	describe('#avl05', function(){
		it('have error should Exeption error message', 
		function(done) {

			data_for_send = "02.3|000000000000|20"+
							"150807163503|14201265|00000000|3BCD302F|0"+
							"270|0.0000|0400|4AD8"

			process_gps_data.getLongtitude(data_for_send, function(answer){
				expect("Error->process_gps_data->getLongtitude").to.equal(answer)
			})

			done();
		})

		it('insert gps data should return 102.166418', 
		function(done) {

			data_for_send = "$$B8863771022576278|AA$GPRMC,163503.000,A"+
							",1456.7348,N,10209.9851,E,0.00,187.13,070"+
							"815,,,A*6A|03.0|02.0|02.3|000000000000|20"+
							"150807163503|14201265|00000000|3BCD302F|0"+
							"270|0.0000|0400|4AD8"

			process_gps_data.getLongtitude(data_for_send, function(answer){
				expect("102.166418").to.equal(answer)
			})

			done();
		})
	})

	describe('#vt300', function(){
		it('insert gps data should return 102.166410', 
		function(done) {

			data_for_send = "$$^@^?E^S4 ^CO��U091628.000,A,1456.7321,N,"+
							"10209.9846,E,0.00,252,150815,,*06|0.8|181|"+
							"2000|0123,0134|020800013BCD302F|14|017F301E1~"

			process_gps_data.getLongtitude(data_for_send, function(answer){
				expect("102.166410").to.equal(answer)
			})

			done();
		})

		it('have error should Exeption error message', 
		function(done) {

			data_for_send = "$$^@NE^S4 ^CO��^A45133420034,"+
							"861074021217651,GPS Tracker VT300i_EV335_20130708��"

			process_gps_data.getLongtitude(data_for_send, function(answer){
				expect("Error->process_gps_data->getLongtitude").to.equal(answer)
			})

			done();
		})
	})
})