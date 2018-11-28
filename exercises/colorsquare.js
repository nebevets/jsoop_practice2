

class ColorSquare{
	/*
	arguments: 
		available colors (array), 
		the current color index (number)
		class to make the future dom element in render (string)
	returns:
		nothing
	notes:
		will need to store the available colors, dom element class, color index, and probably
		the dom element that belongs to it, the neighbor to the right (which should start at null), and
		you'll need to bind the handleClick method to this object:
			this.handleClick = this.handleClick.bind(this)
	*/
	constructor( ){
	}
	/*setter function for the property neighbor
	new, somewhat limited support: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
	arguments: 
		newNeighbor (ColorSquare), the color square physically to the right of this square
	returns: 
		true / false, depending on success
	notes:
		make sure it only sets the neighbor if it is the right class constructor (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
		if it is the right constructor, set the neightbor
	*/
	set neighbor(){

	}
	/* getter function for the property neighbor
	new, somewhat limited support: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
	arguments: 
		nothing
	returns: 
		this object's property of the neighbor to the right
	*/
	get neighbor(){

	}
	/*
	click handler for this dom element
		arguments: 
			nothing
		returns: 
			nothing
		notes:
			check the current index position of this element in the color array.  move it to the next one
			if that move would go past the end of the color array, go to the 0th position instead
			then change the color of this square to the new color
			go to your right neighbor's object, and invoke its handleClick method, as well
			yes, this will cause a cascade of all the elements to the right
			make sure the rightNeighbor is something!  the rightmost element won't have a neighbor
		*/
	handleClick(){

	}
	/*
	change the color of the current element
	arguments:
		the color to change the current element to
	returns:
		nothing
	notes:
		changes the current object's dom element's backgound color to the argument color
	*/
	changeColor(  ){

	}
	/*
	render / generate the dom element for the current object 
	arguments: 
		nothing
	returns:
		the dom element generated by the function
	notes:
		create a dom element, attach it to a property on this object for a later time
		add a class to the element based on the class stored from the constructor
		add a click handler that calls the handleClick method of this object
		add the background color of the dom element to the currently chosen color (based on the passed in index of the constructor)
		return the dom element that was generated. 
	*/
	render(){

	}
}