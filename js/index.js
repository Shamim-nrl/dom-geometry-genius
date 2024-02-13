function pressBtn() {
    const inputBase = document.getElementById('input-base').value;
    const base = parseFloat(inputBase)



    const inputHeight = document.getElementById('input-height').value;
    const height = parseFloat(inputHeight);

    const area = 0.5 * base * height;

    const result = document.getElementById('area')
    result.innerText = area;
}

function calculate() {
    const inputWidth = document.getElementById('input-width')
    const inputewhdth2 = inputWidth.value;
    const input = parseFloat(inputewhdth2);
    // ----------------------------
    const input2 = document.getElementById('input2')
    const input6 =input2.value;
    const input3 = parseFloat(input6);
   
    // ------------------------------------------
    const rectangleAreaResult = input * input3

    const rectangleArea = document.getElementById('rectangle-area')
    rectangleArea.innerText = rectangleAreaResult;


}