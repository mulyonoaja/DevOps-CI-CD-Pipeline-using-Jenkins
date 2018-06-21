
 var file0 = require("G:\\CSC 519 - DevOps\\DevOps-Project\\checkbox_test_generation\\server.js");
 var file1 = require("G:\\CSC 519 - DevOps\\DevOps-Project\\checkbox_test_generation\\mock_routes\\admin.js");
 var file2 = require("G:\\CSC 519 - DevOps\\DevOps-Project\\checkbox_test_generation\\mock_routes\\study.js");
 var file3 = require("G:\\CSC 519 - DevOps\\DevOps-Project\\checkbox_test_generation\\mock_routes\\create.js");
var request = require("request");
//var nock = require("nock"); 


request({ url : 'http://localhost:3002/api/design/survey', method: 'POST', json: {"markdown":"\n{NumberQuestions:true}\n-------"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/load/1', method: 'GET'}, function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/load/3', method: 'GET'}, function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/status', method: 'GET'}, function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/status/1', method: 'GET'}, function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/status/3', method: 'GET'}, function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/listing', method: 'GET'}, function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/create', method: 'POST', json: {"invitecode":"RESEARCHno","studyKind":"survey"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/create', method: 'POST', json: {"invitecode":"RESEARCHno","studyKind":"dataStudy"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/create', method: 'POST', json: {"invitecode":"RESEARCH","studyKind":"survey"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/create', method: 'POST', json: {"invitecode":"RESEARCH","studyKind":"dataStudy"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":1,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":2,"fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":1}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":1,\"kind\":\"multichoice\",\"answer\":[\"0\",\"1\"]}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"khchoksi@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"nsingh9@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"kjpatel4@ncsu.edu"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test5'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/vote/submit/', method: 'POST', json: {"studyId":"{\"val\":2}","fingerprint":"3691423112","answers":"{\"question\":2,\"kind\":\"textarea\",\"answer\":\"Other questions askes\"}","email":"khchoksi@ncsu.edu","contact":"'test6'"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/1', method: 'GET'}, function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/3', method: 'GET'}, function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/download/1', method: 'GET'}, function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/download/3', method: 'GET'}, function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/assign/1', method: 'GET'}, function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/assign/3', method: 'GET'}, function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/open/', method: 'POST', json: {"token":"1"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/open/', method: 'POST', json: {"token":"2"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/open/', method: 'POST', json: {"token":"3"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/open/', method: 'POST', json: {"token":"4"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/open/', method: 'POST', json: {"token":"b12267524b09c38ccad87b7fdbb28251b245c5ee4344de6ee4e5b63ad76c609d9d36b118c5c72397df6a7d5994856db9"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/open/', method: 'POST', json: {"token":"28f0e8a41446c663cf19adb24ca76c54275b5c71bc5f273bb4f0dcc735e2570566e80e2bb68f8cc6bb9dad0734177589"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/close/', method: 'POST', json: {"token":"1"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/close/', method: 'POST', json: {"token":"2"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/close/', method: 'POST', json: {"token":"3"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/close/', method: 'POST', json: {"token":"4"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/close/', method: 'POST', json: {"token":"b12267524b09c38ccad87b7fdbb28251b245c5ee4344de6ee4e5b63ad76c609d9d36b118c5c72397df6a7d5994856db9"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/close/', method: 'POST', json: {"token":"28f0e8a41446c663cf19adb24ca76c54275b5c71bc5f273bb4f0dcc735e2570566e80e2bb68f8cc6bb9dad0734177589"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/notify/', method: 'POST', json: {"email":"khchoksi@ncsu.edu","kind":"AMZN"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/notify/', method: 'POST', json: {"email":"khchoksi@ncsu.edu","kind":"SURFACE"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/notify/', method: 'POST', json: {"email":"khchoksi@ncsu.edu","kind":"IPADMINI"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/notify/', method: 'POST', json: {"email":"khchoksi@ncsu.edu","kind":"GITHUB"}}
            , function(error, response, body) { console.log(body);} ); 
request({ url : 'http://localhost:3002/api/study/admin/notify/', method: 'POST', json: {"email":"khchoksi@ncsu.edu","kind":"BROWSERSTACK"}}
            , function(error, response, body) { console.log(body);} ); 

 setTimeout(function() { file0.server.close(); }, 7000);