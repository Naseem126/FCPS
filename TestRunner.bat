@ECHO OFF
cd c:/FCPS_Insystech
call webdriver-manager update
call protractor conf.js
cmd /k
