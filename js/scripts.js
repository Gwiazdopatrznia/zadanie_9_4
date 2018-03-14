function drawTree(h){
	for ( var i = 1 ; i <= h ; i++ ) {
		var star = '*';
		var space = ' ';
		for ( j = h ; j > i ; j-- ) {
			space += ' ';
		}
		for ( var j = 1 ; j < i ; j++ ) {
			star += '**';
		}
		console.log(space,star);
	}
}

var number = prompt('Enter your number');
drawTree(number);
