//Counter code

var button = document.getElementById('counter');
var counter = 0;

button.onclick = function () {
    
     // Create a request object
     var request = new XmlHttpRequest();
      
      //Capture the response and store in a new variable
      request.onreadystatechange = function () {
         if (request.readyState === XMLHttpRequest.DONE) {
              //Take some action
            if(request.status === 200) {
                  //Capture a list of names and render it as a list
                    var counter = request.responseText;
                    counter = counter + 1;
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