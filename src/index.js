module.exports = function check(str, bracketsConfig) {
  // your solution
	let arr = bracketsConfig.map(a => a.join(''));
	for (let i = 0; i < arr.length;) {
		if (str.includes(arr[i])) {
			str = str.replace(arr[i], '');
			i = 0;
		}
		else i++
	}
	return (str.length === 0)
}
