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

  Get_Imei
    #tk103()
      ✓ insert gps data shot message should return 359710042160508
      ✓ insert gps data long message should return 359710042160508
    #avl05
      ✓ have error should Exeption error
      ✓ insert gps data should return 863771022576278