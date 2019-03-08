//Product Report Pull Start - Ticketmaster

var params1 = {  
    "reportDescription":{
    "reportSuiteID": "heatglobalprod",
    "dateFrom": "2019-01-01",
    "dateTo": "2019-04-01",
    "dateGranularity": "quarter",
        "metrics": [{
                "id": "orders",
            }],
    "elements": [
      {
          "id": "product",
           "top": 10
      }],
}
}


 
jQuery(document).ready(function() {
    jQuery("#api-response").html("calling...");

//Queue Report
MarketingCloud.makeRequest(config.username, config.secret, "Report.Queue", params1, config.endpoint, function(e) {
        console.log("functions fired for report to QUEUE");
        var foo = JSON.parse(e.responseText).reportID;
        localStorage.setItem("reportID1", foo);
        jQuery("#api-response").html(e.responseText);
            });


//Get Report Status
jQuery("#api-response").ready(function (){
    //setInterval(function() {
MarketingCloud.makeRequest(config.username, config.secret, "Report.GetQueue", {"reportID": localStorage.reportID1 }, config.endpoint, function(e) {
jQuery("#api-response-status").html(e.responseText);
});
    //}, 6000);

});


//Get Report When Ready

jQuery("#api-response").ready(function (){
    //setTimeout(function() {


MarketingCloud.makeRequest(config.username, config.secret, "Report.Get", {"reportID": localStorage.reportID1 }, config.endpoint, function(e) {
                var foo = e.responseText;
                localStorage.setItem("tmsales", foo);
                console.log("functions fired to GET--->" + foo);
                //jQuery("#api-response-data").html(e.responseText);
    });

    //}, 30000);

});

  });

//Product Report Pull End - Ticketmaster

//Product Report Pull Start - Heat Store

//Product Report Pull End - Heat Store