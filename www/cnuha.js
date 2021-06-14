  function hitted( o, name )
    {
     for(var i=0; i < o[name].length; i++)      	 
	      if( o[name][i].checked ) break;
      if ( o[name].length==1)  r=o[name][0].value; 
	  else  r=o[name][i].value;
	  var n = r.indexOf("#");
	  var k=r.slice(0,n);
	  var w=r.slice(n+1,r.length);
	  var klen=k.length;
	  var kstr="";
	  var kcode=k.slice(k.length-1,k.length);
	  var allcode=localStorage.allcode;
	  
	  switch(klen)
	  {	  
		case 1: kstr = "<div class=\"pseccss\"> Section&nbsp;</div><div  class=\"pseccss1\"><b>"+kcode+"&nbsp;"+w+"</b></div>"; break;
	    case 2: kstr = "<div class=\"pbodycss\"> Body System&nbsp;</div><div  class=\"pbodycss1\"><b>"+kcode+"&nbsp;"+w+"</b></div>"; break;
		case 3: kstr = "<div class=\"popercss\">  Operation&nbsp;</div><div   class=\"popercss1\"><b>"+kcode+"&nbsp;"+w+"</b></div>"; break;
		case 4: kstr = "<div class=\"pbodypacss\"> Body Part&nbsp;</div><div   class=\"pbodypacss1\"><b>"+kcode+"&nbsp;"+w+"</b></div>"; break;
	    case 5: kstr = "<div class=\"pappcss\"> Approach&nbsp;</div><div   class=\"pappcss1\"><b>"+kcode+"&nbsp;"+w+"</b></div>"; break;
	    case 6: kstr = "<div class=\"pdevcss\"> Device&nbsp;</div><div   class=\"pdevcss1\"><b>"+kcode+"&nbsp;"+w+"</b></div>"; break;
	    case 7: kstr = "<div class=\"pquacss\"> Qualifier&nbsp;</div><div   class=\"pquacss1\"><b>"+kcode+"&nbsp;"+w+"</b></div>"; break;
	  
	  }
	  //alert(kstr);
	  allcode += kstr;
	  localStorage.allcode=allcode;
	  if (klen==6) text="code7/P_"+k+".html";
	  else
      { 
		  if (klen==7) text="../code8/P_"+k+".html";
          else text = "P_"+k+".html";
	  } 	  
	  
	  localStorage.k=k;
	  m="";
	  for (var j=0; j<k.length; j++)
	    m+= "<td class=\"test\">" +  k.slice(j,j+1) + "</td>";
       
	  m+="";
	  document.getElementById("allcode").innerHTML = allcode;
	  document.getElementById("pcscode").innerHTML = m;
	  localStorage.k=m;
	
	 //window.open(text,"right"); //"right");
	 // add below to replace upper
	 document.open();
     alls="<form id='fm1' onclick='hitted(this, "+'"pcodea")'+"'>";
     alls=alls+'<div class="test1">'+'<P align="center" class="sec2">Body System</p>';
	 alls=alls+'<input name="pcodea"  id="pcodea" type=radio  value="4A#Physiological Systems"><b>A</b>&nbsp;Physiological Systems<br />';
     alls=alls+'<input name="pcodea"  id="pcodea" type=radio  value="4B#Physiological Devices"><b>B</b>&nbsp;Physiological Devices<br />';
     alls=alls+' <P align="center" class="sec2"></form></p></div>';
	 
     document.write(alls);
     document.close();
	 
    }
 
 function newpcs()
 {
		var k = location.hash;
		
	    if (k.length==0) { 
		
	       localStorage.none=1;		 
	       return;
		}
	    else  
	    {	
	    
    	 localStorage.none=0;
		
	     localStorage.k="";
	     localStorage.allcode="";
	     allcode="";
	      m="";
	     for (var j=1; j<k.length; j++)
	       m+= "<td class=\"test\">" +  k.slice(j,j+1) + "</td>";
       
	     m+="";
	   
	     document.getElementById("pcscode").innerHTML = m;
	     document.getElementById("allcode").innerHTML = allcode;
	     localStorage.k=m;
		}	
		
 }		
 
 function pcsindex() {	
  //var x = location.hash;
  var x=localStorage.pond;
 
  if (x.length==0) { 			
	       return;
  }
  else
  {	  
 
  // alert(x);
	z=x;
    //alert(z);
    var sdata = z;
	var chchar=sdata.slice(0,1);	
	 y=sdata;
	
  //
    r=y;
    w="P:contains('"+r+"')";
	
	$(w).css("background-color", "#FFD700");
    var k=$(w).first().css("background-color", "#FFD700");
 
	k.each(function(){
    var m=$(this);
	var id = m.attr("id"); 	
	
  //
   t=chchar + "_indexpcs.html#" + id;  
  localStorage.pond="";
	//t=chchar + "_indexpcs.html#" + id;
	window.open(t,"left");
	//location.reload();
	}); 
  } 	
 }	
 
 function myFunctionpcs_index(fname) {	
    var z = document.getElementById("fname");
    var sdata = z.value;
	var chchar=sdata.slice(0,1).toUpperCase();	
	var  y=chchar+sdata.slice(1,sdata.length);
    localStorage.pond="";
    t="pcsindex/"+chchar +"_indexpcs.html#" + y;  
	//t= chchar + "_indexpcs.html#" + y;  
	localStorage.pond=y;
	window.open(t,"left");
	//location.reload();
		
 }	 
 
 function myFunctionpcs(fnamepcs) {
    var x = document.getElementById("fnamepcs");
    var k = x.value;
	k=k.toUpperCase();	
	var klen=k.length;
	
	  if (klen==6) text="pcodeanew/code7/P_"+k+".html#"+k;
	  else
      { 
		  if (klen==7) text="pcodeanew/code8/P_"+k+".html#"+k;
          else text = "pcodeanew/P_"+k+".html#"+k;
	  } 	  
	  //window.open(text);   //,"right");
	  localStorage.k="";
	  localStorage.allcode="";
	  allcode="";
	  m="";
	  
	  for (var j=0; j<k.length; j++)
	    m+= "<td class=\"test\">" +  k.slice(j,j+1) + "</td>";
       
	  m+="";
	 // document.getElementById("allcode").innerHTML = allcode;
	 // document.getElementById("pcscode").innerHTML = m;
	 //  $("#mcode").html(acstr);	
	  localStorage.k=m;
	
	 window.open(text,"right");

	

}	
 
 function newfun()
 {
		var x = location.hash;
		
	    if (x.length==0) { 
	       localStorage.none=1;
		   $('#basic-modal-content').close();	
	       return;
		}
	    else  localStorage.none=0;
		
         myID=x.slice(1, x.length+1);
		 var lastx=x.slice(x.length-1, x.length);
		 if (lastx =='-') myID=x.slice(1, x.length-1);
	      
         var s = document.getElementById(myID);
         var y = s.getElementsByTagName("table");
         // alert(y[0].innerHTML); 
		  var chchar=x.slice(1, 2);
		  var uchchar=chchar.toUpperCase();
		  var str12=x.slice(1,3);
		  var k=parseInt(str12);
		  
          switch(uchchar)
          {
            case 'A':  case 'B': 
               i=1;  
			   acstr="1.Certain infectious and parasitic diseases (A00-B99)感染症與寄生蟲";
			   acstr1="1";
			   break;
	        case 'C': 
               i=2;
               acstr="2.Neoplasms (C00-D49)腫瘤";
			   acstr1="2";
			   break;  
	        case 'D':      	 
	           if (k<50) {
				  i=2;
				  acstr="2.Neoplasms (C00-D49)腫瘤";
				  acstr1="2";
			   }	 
               else {
				 i=3;
				 acstr="3.Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism (D50-D89)血液和造血器官及涉及免疫機轉的疾患";				
				 acstr1="3";
			   }	 
	           break;  
            case 'E': 
               i=4; 
               acstr="4.Endocrine, nutritional and metabolic diseases (E00-E89)內分泌、營養及新陳代謝疾病";
			   acstr1="4";
			   break;  
	        case 'F': 
               i=5;  
			   acstr="5.Mental, Behavioral and Neurodevelopmental disorders (F01-F99)精神與行為疾患";
			   acstr1="5";
			   break;   
	        case 'G': 
               i=6;  
			   acstr="6.Diseases of the nervous system (G00-G99)神經系統與感覺器官的疾病";
			   acstr1="6";
			   break;   
	        case 'H': 	
	           if (k<60){
				   i=7;
				   acstr="7.Diseases of the eye and adnexa (H00-H59)眼睛和附屬器官的疾病";
				   acstr1="7";
			   }	   
               else {
				 i=8;
				 acstr="8.Diseases of the ear and mastoid process (H60-H95)耳及乳突之疾病";
				 acstr1="8";
			   }	 
	           break;    
	        case 'I': 
               i=9; 
               acstr="9.Diseases of the circulatory system (I00-I99)循環系統疾病";
			   acstr1="9";
			   break;  
	        case 'j': 
               i=10;  
			   acstr="10.Diseases of the respiratory system (J00-J99)呼吸系統的疾病";
			   acstr1="10";
			   break;       
	        case 'K': 
               i=11;  
			   acstr="11.Diseases of the digestive system (K00-K95)消化系統的疾病";
			   acstr1="11";
			   break;       
	        case 'L': 
               i=12;  
			   acstr="12.Diseases of the skin and subcutaneous tissue (L00-L99)皮膚及皮下組織的疾病";
			   acstr1="12";
			   break;  
            case 'M': 
               i=13;  
			   acstr="13.Diseases of the musculoskeletal system and connective tissue (M00-M99)肌肉骨骼系統及結締組織疾病";
			   acstr1="13";
			   break; 	  
	        case 'N': 
               i=14;  
			   acstr="14.Diseases of the genitourinary system (N00-N99)生殖泌尿系統疾病";
			   acstr1="14";
			   break;   
	        case 'O': 
               i=15;  
			   acstr="15.Pregnancy, childbirth and the puerperium (O00-O9A)妊娠、生產與產褥期合併症";
			   acstr1="15";
			   break;   
	        case 'P': 
               i=16;  
			   acstr="16.Certain conditions originating in the perinatal period (P00-P96)源於週產期的指引";
			   acstr1="16";
			   break;   
	        case 'Q': 
               i=17;  
			   acstr="17.Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)先天性畸形、變形與染色體異常";
			   acstr1="17";
			   break;   
	        case 'R': 
               i=18;  
			   acstr="18.Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified (R00-R99)症狀、癥候、與臨床和實驗室的異常發現";
			   acstr1="18";
			   break;   
	        case 'S': case 'T':
               i=19;  
			   acstr="19.Injury, poisoning and certain other consequences of external causes (S00-T88)傷害中毒與其它外因造成的特定影響";
			   acstr1="19";
			   break;   
            case 'V': case 'W': case 'X': case 'Y':
               i=20;  
			   acstr="20.External causes of morbidity (V00-Y99)導致罹病或致死之外因";
			   acstr1="20";
			   break;
            case 'Z': 
               i=21;  
			   acstr="21.Factors influencing health status and contact with health services (Z00-Z99)影響健康狀況及健康服務";
			   acstr1="21";
			   break;     	  
          }
		 acstr="Chapter"+acstr;
	     var text = "";
         var i;
         for (i = 0; i < y.length; i++) {
               text += y[i].innerHTML ;
         }
		 
		 var atext=text.replace(/tbody/g,"table");
        
		 // window.open(text,"_blank");
		 
		 $("#mcode").html(acstr);	 
		 $("#name").html(atext);
	}


	
function myFunction(fname) {
    var x = document.getElementById("fname");
    var sdata = x.value;
	var chchar=sdata.slice(0,1);
	var chchar=sdata.slice(0,1).toUpperCase();	
	var  y=chchar+sdata.slice(1,sdata.length);
	sdata=y;
	var str1=sdata.slice(1,2);
	var str12=sdata.slice(1,3);
	
	
 if (str1 >= '0' && str1 <= '9')	// code
 {	
  var k=parseInt(str12);
  var uchchar=chchar.toUpperCase();
  
  switch(uchchar)
  {
    case 'A':  case 'B': 
      i=1;  break;
	case 'C': 
      i=2;  break;  
	case 'D':      	 
	  if (k<50) i=2;
      else i=3;
	  break;  
    case 'E': 
      i=4;  break;  
	case 'F': 
      i=5;  break;   
	case 'G': 
      i=6;  break;   
	case 'H': 	
	  if (k<60) i=7;
      else i=8;
	  break;    
	case 'I': 
      i=9;  break;  
	case 'j': 
      i=10;  break;       
	case 'K': 
      i=11;  break;       
	case 'L': 
      i=12;  break;  
    case 'M': 
      i=13;  break; 	  
	case 'N': 
      i=14;  break;   
	case 'O': 
      i=15;  break;   
	case 'P': 
      i=16;  break;   
	case 'Q': 
      i=17;  break;   
	case 'R': 
      i=18;  break;   
	case 'S': case 'T':
      i=19;  break;   
    case 'V': case 'W': case 'X': case 'Y':
      i=20;  break;
    case 'Z': 
      i=21;  break;     	  
  }
  if (sdata.length == 3)
  {
    x=sdata	
  }
  else
  { 
    x=sdata.slice(0,3);
  }
 
  y=sdata
  t="P_Tabular/chap" + i + "/" + x + ".html#" + y ;
  // window.open(t,'right');
  window.open(t,"right");
 
 }
 else
 {
	localStorage.cmindex="";
   // t="pcsindex/"+chchar +"_indexpcs.html#" + y;  
	//t= chchar + "_indexpcs.html#" + y;  
	localStorage.cmindex=y;
	
    t="index/" + chchar + ".html#" + y; 

	window.open(t,"left");

 }
}

function cmindex() {	
  //var x = location.hash;
  var x=localStorage.cmindex;
 
  if (x.length==0) { 			
	       return;
  }
  else
  {	  
 
  // alert(x);
	z=x;
    //alert(z);
    var sdata = z;
	var chchar=sdata.slice(0,1);	
	 y=sdata;
	
  //
    r=y;
    w="P:contains('"+r+"')";
	
	$(w).css("background-color", "#FFD700");
    var k=$(w).first().css("background-color", "#FFD700");
 
	k.each(function(){
    var m=$(this);
	var id = m.attr("id"); 	
  //
     
  //
   t=chchar + ".html#" + id;  
  localStorage.cmindex="";
	//t=chchar + "_indexpcs.html#" + id;
	window.open(t,"left");
	//location.reload();
	}); 
  } 	
 }	


function haoptfl(sel)
{
        selno=sel.options[sel.selectedIndex].text;		
		//pcsindex/A_indexpcs.html
		a="pcsindex/" ; a=a+selno; a=a+ "_indexpcs"; a=a+".html";							
		window.open(a,'left');
		// $("#left").html(a);
}

function haoptflcm(sel)
{
        selno=sel.options[sel.selectedIndex].text;		
		a="index/" ; a=a+selno; a=a+".html";							
		window.open(a,'left');
		// $("#left").html(a);
}

function haoptfr(sel)
{
 
        selno=sel.options[sel.selectedIndex].text;	
        if (selno[1]=='.') se12=selno[0];
		else se12=selno.slice(0,2);
		
		a="P_Tabular/chap" ; a=a+se12;  a=a+ "/head_chap"+se12; a=a+".html";	
	   
        //alert(a); 		
		window.open(a,'right');
		// $("#left").html(a);
}



