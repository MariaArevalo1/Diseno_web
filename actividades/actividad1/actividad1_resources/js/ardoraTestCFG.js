//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Excelente"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_self"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0aXZpZGFkMQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Qué es HTML5?","¿Qué version de HTML usamos segun la W3C?","¿Qué son las etiquetas en HTML5?","¿Qué son los atributos?","Seleccione cual no es un contenido o etiqueta de html"];
var answers1=["MUxlbmd1YWplIGRlIGV0aXF1ZXRhcw","MExlbmd1YWplIGRlIHByb2dyYW1hY2nzbg","MExlbmd1YWplIGRlIGVzdGlsb3MgZW4gY2FzY2FkYQ","MExlbmd1YWplIGRlIGFwcmVuZGl6YWpl"];
var answers2=["MTU","MDQ","MDM","MDI","MDE","MDY"];
var answers3=["MUFxdWVsbGFzIHF1ZSBlc2NyaWJpbW9zIHBhcmEgZGFyIGVzdHJ1Y3R1cmEgYWwgYXJjaGl2bw","MFNvbiBsYXMgcXVlIGV0aXF1ZXRhbiBhbCBhcmNoaXZv","MFNvbiBsYXMgYmFzZXMgcGFyYSBIVE1M","MFNvbiBwYXJhIGNvbnRlbmVyIHVuIGRvY3VtZW50bw"];
var answers4=["MVNvbiBhcXVlbGxvcyBxdWUgZXN04W4gY29udGVuaWRvcyBlbiBsYXMgZXRpcXVldGFzIHkgcXVlIGNvbnRpZW5lbiB1biB2YWxvcg","MFNvbiBhcXVlbGxvcyBxdWUgY29udGllbmVuIHVuIHZhbG9yIHkgZXN0YW4gZnVlcmEgZGUgbGEgZXRpcXVldGE","MFNvbiBsYXMgZXRpcXVldGFz","MFNvbiBhcXVlbGxvcyBxdWUgY29udGllbmVuIHVuIHZhbG9y"];
var answers5=["MWY","MGFzaWRl","MGZvb3Rlcg","MGhlYWRlcg","MG5hdg"];
var ans=[answers1,answers2,answers3,answers4,answers5];
var err=["Estudia el material","Revisa tus apuntes","","",""];
var ima=["","","","",""];
var mp4=["","","","",""];
var ogv=["","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="actividad1_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
