export const getReadingTime = (text: String): Number => {
	const wpm = 500;
	const words = text.trim().split(/\a-zA-Z0-9+/).length;
	return Math.ceil(words / wpm);
};

export const getSlug = (file: String): String => {
	return file.split("/").pop().slice(0, -3);
};

export const getSimpleDate = (date: Date): String => {
	return `${date.toLocaleString("default", { month: "long" })} ${date.getDay()}, ${date.getFullYear()}`;
};

export const sortByYear = (arr): { [key: number]: object } => {
	return arr.reduce(function (obj, item) {
		// Check if the criteria is a function to run on the item or a property of it
		var key = item.data.created.getFullYear();

		// If the key doesn't exist yet, create it
		if (!obj.hasOwnProperty(key)) {
			obj[key] = [];
		}

		// Push the value to the object
		obj[key].push(item);

		// Return the object to the next item in the loop
		return obj;
	}, {});
};
