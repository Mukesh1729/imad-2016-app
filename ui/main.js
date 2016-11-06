// Counter code
var button = document.getElementById('counter');
var counter=0;

button.onclick = function () {
  // Create a request object
 
        counter = counter + 1;
        var span = document.getElementById('count');
        span.innerHtml = counter.toString();
    
};

