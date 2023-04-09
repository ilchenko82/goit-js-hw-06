const liItems = document.querySelectorAll('li.item');
console.log(liItems.length);

liItems.forEach(liItem => {
	
	console.log("Categories:" , liItem.querySelector('h2').textContent);
	console.log("Elements:" , liItem.querySelectorAll('li').length);
});