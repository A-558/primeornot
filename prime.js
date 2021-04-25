console.log("js started")




// Function to check for prime number
function p() {
              
    var n, i, p = true;
      
    // Getting the value form the
    
    n = document.getElementById("text").value;
    
    for (i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            p = false;
            break;
        }
          
    // Check and display output
    if (p){
        console.log(n + " is prime");
        output="the number is prime";
        document.getElementById("result").value=output;
    }else{
        console.log(n + " is not prime");
        output="the number is not prime";
        document.getElementById("result").value=output;

    }
}