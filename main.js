function objectInArray(item, array) {
	if (item && array) {
		var arrayA = array.indexOf(item);
		return array[arrayA];
	}
	else {
		return "Typical Error: objectInArray failed to load because information was entered was wrong."
	}
}
