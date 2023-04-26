
module.exports.get_date = get_date;



function get_date(){

console.log("hellosaxsaxa");
var today = new Date()
var options = {
    weekday: "long",
    day: "numeric" ,
    month: "long"
    
}
currentday = today.toLocaleDateString("en-US" , options)

return currentday;

}
module.exports.get_day = get_day;
function get_day(){

    console.log("hellosaxsaxa");
    var today = new Date()
    var options = {
        weekday: "long"
       
        
    }
    currentday = today.toLocaleDateString("en-US" , options)
    
    return currentday;
    
    }