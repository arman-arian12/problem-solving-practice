// how to sokese a class room all student roll number one  by one

const rollNumber = [5, 8, 120, 31, 855, 540, ];
document.write(rollNumber.sort(function(a, b) {
	return a - b;
}));