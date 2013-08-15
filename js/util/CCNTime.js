/**
 * @author: Meki Cheraoui
 * See COPYING for copyright and distribution information.
 * This class represents NDNTime Objects
 */

/**
 * @constructor
 */
var NDNTime = function NDNTime(input) {
	this.NANOS_MAX = 999877929;
	
	if(typeof input =='number')
		this.msec = input;
	else{
		if(LOG>1) console.log('UNRECOGNIZED TYPE FOR TIME');
	}
};


NDNTime.prototype.getJavascriptDate = function(){
	var d = new Date();
	d.setTime( this.msec );
	return d
};

	/**
	 * Create a NDNTime
	 * @param timestamp source timestamp to initialize from, some precision will be lost
	 */


	/**
	 * Create a NDNTime from its binary encoding
	 * @param binaryTime12 the binary representation of a NDNTime
	 */
/*NDNTime.prototype.setDateBinary = function(
	//byte [] 
		binaryTime12) {


	if ((null == binaryTime12) || (binaryTime12.length == 0)) {
		throw new IllegalArgumentException("Invalid binary time!");
	}
	

	value = 0;
	for(i = 0; i < binaryTime12.length; i++) {
		value = value << 8;
		b = (binaryTime12[i]) & 0xFF;
		value |= b;
	}

	//this.date = new Date(value);

};

//byte[]
NDNTime.prototype.toBinaryTime = function() {

	return this.msec; //unsignedLongToByteArray(this.date.getTime());

}*/
/*
unsignedLongToByteArray= function( value) {
	if( 0 == value )
		return [0];

	if( 0 <= value && value <= 0x00FF ) {
		//byte [] 
		bb = new Array[1];
		bb[0] = (value & 0x00FF);
		return bb;
	}

	
	//byte [] 
	out = null;
	//int
	offset = -1;
	for(var i = 7; i >=0; --i) {
		//byte
		b = ((value >> (i * 8)) & 0xFF);
		if( out == null && b != 0 ) {
			out = new Array(i+1);//byte[i+1];
			offset = i;
		}
		if( out != null )
			out[ offset - i ] = b;
	}
	return out;
}*/
	
