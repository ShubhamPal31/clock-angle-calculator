

function printAngle(hour, minute, angle) {
    if (angle >= 360) {
        $("#result").val(Math.abs(Number(360 - angle)) + "°"); // Prints Answer
    } else {
        $("#result").val(Math.abs(Number(angle)) + "°"); // Prints Answer
    }
};