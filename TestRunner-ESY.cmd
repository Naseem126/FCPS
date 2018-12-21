@ECHO OFF
cd c:/FCPS_Insystech
call webdriver-manager update
call protractor conf_esy.js
cmd /k
