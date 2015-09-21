var process = function(callback){
  alert("call cordova process defined");
  cordova.exec(
    callback,
    function(err) {
        alert("error");
    },
    "Process",
    "process",
    ["params"]
  );
}
