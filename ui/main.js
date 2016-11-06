// Counter code
var button = document.getElementById('counter');

button.onclick = function () {
  // Create a request object
  var request=new XmlHttpRequest();
  
  //Capture the response and store in a new variable
   request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          //Take some action
          if(request.status === 200) {
              //Capture a list of names and render it as a list
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHtml = counter.toString();
          }
      }
      //Not done yet
  };
  //Make the request
  request.open('GET','http://mukesh1729.imad.hasura-app.io/counter',true);
  request.send(null);
};

//Submit name
var nameInput=document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    
    //Create a request object
  var request = new XMLHttpRequest();
   //Capture the response and store it in a variable 
  request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          //Take some action
          if(request.status === 200) {
              //Capture a list of names and render it as a list
                var names = request.responseText;
                names = JSON.parse(names);
                
                var list = '';
                for(var i=0;i<names.length;i++){
                    list+='<li>' + names[i] + '</li>';
                }
                var ul=document.getElementById('namelist');
                ul.innerHtml=list;
          
      }
    }
    //Not done yet
};

request.open('GET','http://mukesh1729.imad.hasura-app.io/submit-name?name=' + name,true);
request.send(null);
};