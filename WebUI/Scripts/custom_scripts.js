document.getElementById("mathBtn").addEventListener("click", function () {
    const bld1 = parseInt(document.getElementById("bld1").value);
    const bld2 = parseInt(document.getElementById("bld2").value);
    const bld3 = parseInt(document.getElementById("bld3").value);
    const bld4 = parseInt(document.getElementById("bld4").value);
    const bld5 = parseInt(document.getElementById("bld5").value);
    const bldArray = [bld1, bld2, bld3, bld4, bld5];
    const output = document.getElementById("output");
    output.innerHTML = "";
    let bldOutput = [];

    function isIndexTaller(arr) {
        const resultsArr = [];
        let currTallest = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > currTallest) {
                resultsArr.push(arr[i]);
                currTallest = arr[i];
            }
        }
        return resultsArr;
    }

    bldOutput = isIndexTaller(bldArray);
    output.innerHTML = `There are ${bldOutput.length} building(s) that can see the sunset: ${bldOutput}`;
});