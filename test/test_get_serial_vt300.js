var expect = require('chai').expect
var get_serail = require('../get_serial_vt300')


describe('Get_serail', function(){

	describe('#vt300', function(){

		it('insert gps data should return serail 45133420034', 
		function(done) {
			data_for_send = "$$^@^?E^S4 ^CO��U100702.000,A,1456.7321,N"+
							",10209.9846,E,0.00,252,150815,,*06|0.7|18"+
							"1|2000|0185,013A|020800013BCD302F|14|017F301E�<"

			get_serail.getSerial(data_for_send, function(answer){
				expect("45133420034").to.equal(answer)
			})

			done();
		})
		
	})

})