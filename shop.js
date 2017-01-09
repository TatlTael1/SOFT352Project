function loadShop() { //Function to load the shop
  $('#shop').append("Welcome to the shop!");
  $.ajax({url: "/getShop", cache: false, success: function(result) { //AJAX call to the server to get documents from the database
    console.log(result); //Log the result into the console, returns 11 objects
    for(var i = 0; i < 11; i++) { //For each object...
      $('#shop').append("<br />" + result[i].itemName + ", Price: " + result[i].price + " "); //...append onto the shop div the name and price of each object
      
      var button = document.createElement("button"); //Create the button
      button.innerHTML = "Buy"; //Set the text
      button.value = result[i].itemName;
      button.price = result[i].price;
      
      var shop = document.getElementById('shop'); //Get the shop element to append to
      shop.appendChild(button); //Append the button to it

      button.addEventListener ("click", function() { //Add an event listener to the button to call the buyItem function
        buyItem(this.value, this.price);
      });
    }
  }});
}

function buyItem(item, price) { //When an item is bought...
  console.log("Bought Item:" + item + " for " + price + " gold");
  
  this.item = item;
  this.price = price;
  
  if(item == "Lesser Potion") {
    console.log("Bought " + item);
    
    $.ajax({
        url: "/buyItem",
        data: { 
          "username": sessionStorage.getItem("username"),
          "item": item,
          "price": price
        },
        cache: false, //Don't cache the call
        type: "POST", 
        success: function(response) {
          console.log("Success!");
          alert("You bought " + item + "!");
        },
        error: function(err) { 
        alert(err.responseText); //On an error, display the error in an alert
      }
    });
  }
  
  if(item == "Potion") {
    console.log("Bought " + item);
    
    $.ajax({
        url: "/buyItem",
        data: { 
          "username": sessionStorage.getItem("username"),
          "item": item,
          "price": price
        },
        cache: false, //Don't cache the call
        type: "POST", 
        success: function(response) {
          console.log("Success!");
        },
        error: function(err) { 
        alert(err.responseText); //On an error, display the error in an alert
      }
    });
  }
  
  if(item == "Greater Potion") {
    console.log("Bought " + item);
    
    $.ajax({
        url: "/buyItem",
        data: { 
          "username": sessionStorage.getItem("username"),
          "item": item,
          "price": price
        },
        cache: false, //Don't cache the call
        type: "POST", 
        success: function(response) {
          
        },
        error: function(err) { 
        alert(err.responseText); //On an error, display the error in an alert
      }
    });
  }
  
  if(item == "Shortsword") {
    console.log("Bought " + item);
    
    $.ajax({
        url: "/buyItem",
        data: { 
          "username": sessionStorage.getItem("username"),
          "item": item,
          "price": price
        },
        cache: false, //Don't cache the call
        type: "POST", 
        success: function(response) {
          
        },
        error: function(err) { 
        alert(err.responseText); //On an error, display the error in an alert
      }
    });
  }
  
  if(item == "Longsword") {
    console.log("Bought " + item);
    
    $.ajax({
        url: "/buyItem",
        data: { 
          "username": sessionStorage.getItem("username"),
          "item": item,
          "price": price
        },
        cache: false, //Don't cache the call
        type: "POST", 
        success: function(response) {
          
        },
        error: function(err) { 
        alert(err.responseText); //On an error, display the error in an alert
      }
    });
  }
  
  if(item == "Greatsword") {
    console.log("Bought " + item);
    
    $.ajax({
        url: "/buyItem",
        data: { 
          "username": sessionStorage.getItem("username"),
          "item": item,
          "price": price
        },
        cache: false, //Don't cache the call
        type: "POST", 
        success: function(response) {
          
        },
        error: function(err) { 
        alert(err.responseText); //On an error, display the error in an alert
      }
    });
  }
  
  if(item == "Uchigatana") {
    console.log("Bought " + item);
    
    $.ajax({
        url: "/buyItem",
        data: { 
          "username": sessionStorage.getItem("username"),
          "item": item,
          "price": price
        },
        cache: false, //Don't cache the call
        type: "POST", 
        success: function(response) {
          
        },
        error: function(err) { 
        alert(err.responseText); //On an error, display the error in an alert
      }
    });
  }
  
  if(item == "Leather Armour") {
    console.log("Bought " + item);
    
    $.ajax({
        url: "/buyItem",
        data: { 
          "username": sessionStorage.getItem("username"),
          "item": item,
          "price": price
        },
        cache: false, //Don't cache the call
        type: "POST", 
        success: function(response) {
          
        },
        error: function(err) { 
        alert(err.responseText); //On an error, display the error in an alert
      }
    });
  }
  
  if(item == "Chain Mail") {
    console.log("Bought " + item);
    
    $.ajax({
        url: "/buyItem",
        data: { 
          "username": sessionStorage.getItem("username"),
          "item": item,
          "price": price
        },
        cache: false, //Don't cache the call
        type: "POST", 
        success: function(response) {
          
        },
        error: function(err) { 
        alert(err.responseText); //On an error, display the error in an alert
      }
    });
  }
  
  if(item == "Half-Plate") {
    console.log("Bought " + item);
    
    $.ajax({
        url: "/buyItem",
        data: { 
          "username": sessionStorage.getItem("username"),
          "item": item,
          "price": price
        },
        cache: false, //Don't cache the call
        type: "POST", 
        success: function(response) {
          
        },
        error: function(err) { 
        alert(err.responseText); //On an error, display the error in an alert
      }
    });
  }
  
  if(item == "Full Plate") {
    console.log("Bought " + item);
    
    $.ajax({
        url: "/buyItem",
        data: { 
          "username": sessionStorage.getItem("username"),
          "item": item,
          "price": price
        },
        cache: false, //Don't cache the call
        type: "POST", 
        success: function(response) {
          
        },
        error: function(err) { 
        alert(err.responseText); //On an error, display the error in an alert
      }
    });
  }
  
  
}