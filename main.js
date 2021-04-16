function loadJSON(file,callback){
 
    var rawData= new XMLHttpRequest();
    rawData.overrideMimeType("application/json");
    rawData.open("GET",file,true);
    rawData.onreadystatechange= function (){
        if(rawData.readyState === 4 && rawData.status == "200"){
            callback(rawData.responseText)
        }
    }
    rawData.send(null)

}


loadJSON("data/data.json",function(text){
 let data=JSON.parse(text)
 console.log(data.basics.designation)
 basics(data.basics);
 career(data.careerobjective)
 educationDetails(data.education)
})


var main=document.querySelector('.main');
var left=document.querySelector('.left');
var right=document.querySelector('.right')

function basics(p_info){
    // image 
     var image=document.createElement('img');
     image.src="images/download.png";
     left.appendChild(image)
   
    var name=document.createElement('h1');
    name.textContent=p_info.name;
    left.appendChild(name)

    var mobile=document.createElement('h3');
    mobile.textContent=p_info.mobile;
    left.appendChild(mobile)

    var des=document.createElement('h4');
    des.textContent=p_info.designation;
    left.appendChild(des)
     

     main.appendChild(left)
     

}


function career(c_info){

         var h1=document.createElement('h1');
         h1.textContent="Careeer Objective";
         right.appendChild(h1)

         var hr=document.createElement('hr');
         right.appendChild(hr)
        
          var careerobj=document.createElement('p');
          careerobj.textContent=c_info.career;
          right.appendChild(careerobj);
          main.appendChild(right)
}






function educationDetails(edu){
      
    var etable=document.createElement('table');
    var tr1="<tr><th>S.No</th><th>Degree</th><th>Institute</th><th>Year of Passedout</th></tr>"
    tr2=""
    for(i=0;i<edu.length;i++)
    {

     tr2=tr2+"<tr><td>"+edu[i].sno+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].YOP+"</td></tr>";

     etable.innerHTML=tr1+tr2
    }
     right.appendChild(etable)
    

}