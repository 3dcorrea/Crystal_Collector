var targetNumber = function randomNum() {
    var x = Math.floor((Math.random() * 120) + 19);
    document.getElementById("demo").innerHTML = x;
};
$("#number-to-guess").text(targetNumber);
var counter = 0;
var numberOptions = [10, 5, 11, 7, 9, 6, 8, 12 ];
for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src",
        "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg"
    );
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    alert("New Score: " + counter);
    if (counter === targetNumber) {
        alert("You Win!!!");
    } else if (counter >= targetNumber) {
        alert("You Lose!!!");
    }
})