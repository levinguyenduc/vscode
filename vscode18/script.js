function calculateRectangle() {
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);

    if (!isNaN(length) && !isNaN(width)) {
        var perimeter = 2 * (length + width);
        var area = length * width;

        document.getElementById("result").innerHTML = "Perimeter: " + perimeter.toFixed(2) + "<br>Area: " + area.toFixed(2);
    } else {
        document.getElementById("result").innerHTML = "Please enter valid numbers for length and width.";
    }
}
