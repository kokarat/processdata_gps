# processdata_gps


ใช้ mocha เป็นตัว  test 
วิธีการติดตั้ง

$ npm install -g mocha

ใช้ plugin ชื่อว่า chai ช่วยเสริม  mocha

วิธีทดสอบการ test หลังจากที่ ติดตั้ง mocah เสร็จแล้ว

เข้ามาที่ path โปรแกรม

ให้ใช้คำสั่ง

$ mocha test

โปรแกรมจะทำการ check list เพื่อ เทส logic โปรแกรมเรา

ผลการรันจะเป็นดังนี้

มีทั้งหมด 17 test case

Get_Imei

	#tk103()

	  ✓ insert gps data shot message should return 359710042160508

	  ✓ insert gps data long message should return 359710042160508

	#avl05

	  ✓ have error should Exeption error

	  ✓ insert gps data should return 863771022576278

	#vt300

    ✓ insert gps data should return 861074021217651

Get_Latitude

	#tk103()

	  ✓ insert gps data shot message should return error message

	  ✓ insert gps data long message should return 13.979505

	#avl05

	  ✓ have error should Exeption error message

	  ✓ insert gps data should return 14.945580

	#vt300
   	  ✓ insert gps data should return 14.945535

      ✓ have error should Exeption error message

Get_Longtitude

	#tk103()

	  ✓ insert gps data shot message should return error message 101.756725

	  ✓ insert gps data long message should return 101.756725

	#avl05

	  ✓ have error should Exeption error message 102.166418

	  ✓ insert gps data should return 102.166418

	#vt300

      ✓ insert gps data should return 102.166410

      ✓ have error should Exeption error message
