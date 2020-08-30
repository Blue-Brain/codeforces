var numberStopTram = +readline();
var maxVolumeTram = 0;
var currentVolumeTram = 0;
for (numberStopTram; numberStopTram>0; numberStopTram--) {
    var currentStopInfo = readline().split(" ");
    var passengersOut = +currentStopInfo[0];
    var passengersIn = +currentStopInfo[1];
    currentVolumeTram = currentVolumeTram - passengersOut + passengersIn;
    if (currentVolumeTram > maxVolumeTram) maxVolumeTram = currentVolumeTram;
}
print(maxVolumeTram);