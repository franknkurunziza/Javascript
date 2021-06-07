var convert = function (s, numRows) {
    row = 0;
    direction = 1
    var newArr = Array(numRows).fill("")
    for (var j = 0; j < s.length; j++) {
        newArr[row] += s[j]
        row += direction
        if (row == 0 || row == numRows - 1) {
            direction *= -1
        }
    }
    return newArr.join('')
};

console.log(convert('PAYPALISHIRING',3))