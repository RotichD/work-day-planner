

$("button").click(function() {
    const value = $(this).data("value");
    console.log(value);

    const textEntry = $("." + value).val(); 
    console.log(textEntry);
}) 


// If the object has a name matching class name of input then insert values with the matching class 

/* function setDay() {
    if (currentDay != dayofWeek) {
        localStorage.clear();
    }
} 


function setUp() {
    $("#currentDay").text(currentDay);
    renterTextareaBackground();
}
*/