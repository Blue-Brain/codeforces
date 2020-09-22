var numberTests = +readline();
for (var test = 0; test<numberTests; test++) {
    var sizeArray = +readline();
    var contentArray = readline().split(" ");
    for (var i=0; i<sizeArray; i++) {
        var j=1;
        while (j<sizeArray) {
            // print ("Cont " + contentArray);
            if (Math.abs(contentArray[i]-contentArray[j])<=1 && i != j) {
                // print("ABS " + Math.abs(contentArray[i]-contentArray[j]) + " j=" + j + " i=" + i);
                contentArray[i]<=contentArray[j] ? contentArray.splice(i,1) : contentArray.splice(j,1);
                sizeArray = contentArray.length;
            } else {
                j++;
            }
            // print("size " + sizeArray);
        }
    }
    if (contentArray.length === 1) {
        print("YES");
    } else {
        print("NO");
    }
}