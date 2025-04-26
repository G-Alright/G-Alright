document.getElementById("format").addEventListener("change", function() {
    var customFormatInput = document.getElementById("customFormatInput");
    if (this.value === "custom") {
      customFormatInput.style.display = "block";
    } else {
      customFormatInput.style.display = "none";
    }
  });
  
  document.getElementById("timestampForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var data = document.getElementById("data").value;
    var format = document.getElementById("format").value;
    var expiry = document.getElementById("expiry").value;
    
    // Generate timestamp based on selected format
    var timestamp;
    switch (format) {
      case "date":
        timestamp = new Date().toLocaleString();
        break;
      case "unix":
        timestamp = Math.floor(Date.now() / 1000);
        break;
      case "iso":
        timestamp = new Date().toISOString();
        break;
      case "custom": // Handle custom format
        var customFormat = document.getElementById("customFormat").value;
        timestamp = new Date().toLocaleString(customFormat);
        break;
      default:
        timestamp = new Date().toLocaleString();
    }
    
    // Format expiry date if provided
    var expiryMessage = expiry ? "<br>Expiry Date: " + new Date(expiry).toLocaleDateString() : "";
    
    var message = "Data: " + data + "<br>Timestamp: " + timestamp + expiryMessage;
    document.getElementById("message").innerHTML = message;
  });
