module.exports = function reverse (n) {
    let arr = String(Math.abs(n));
    let end = "";
    for (let i = arr.length-1; i>=0; i--) {
        end += arr[i];
    }
    return end
}
