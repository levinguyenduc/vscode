function calculateCircle() {
    var radius = parseFloat(document.getElementById("radius").value);

    if (!isNaN(radius) && radius >= 0) {
        var perimeter = 2 * Math.PI * radius;
        var area = Math.PI * Math.pow(radius, 2);

        document.getElementById("result").innerHTML = "Perimeter: " + perimeter.toFixed(2) + "<br>Area: " + area.toFixed(2);
    } else {
        document.getElementById("result").innerHTML = "Please enter a valid non-negative number for the radius.";
    }
}
