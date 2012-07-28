/*
 * Vector Class
 * 
 * Heavily based on/borrowed from a kind soul at pastbin.com
 * http://pastebin.com/h5PSDR0g
 *
 * Thank you!
 */
Vector = function Vector(x, y) {
	this.x = x;
	this.y = y;
   
	/**
	 * Set or calculate the length of the Vector.
	 * @param newLen Number
	 * @return Number
	 */
	this.len = function Length(newLen) {
		if(!isNaN(newLen)) {
			var length = this.len();
			var xnorm = this.x / length;
			var ynorm = this.y / length;
			this.x = xnorm * newLen;
			this.y = ynorm * newLen;
			
		}
		return Math.sqrt((this.x * this.x) + (this.y * this.y));
	}
	
	/**
	 * Ensure that this Vector's length is no larger than the given value.
	 * @param maxLen Number
	 * @return Vector
	 */
	this.trunc = function Truncate(maxLen) {
		if (this.len() > maxLen) {
			this.len(maxLen);
		}
		return this;
	}
	
	/**
	 * Ensure that this Vector's length is no larger than the given maximum and
	 * no smaller than the given minimum.
	 * @param 
	 * @return Vector
	 */
	this.clamp = function Clamp(min, max) {
		var l = this.len();
		if(l<min) this.len(min);
		if(l>max this.len(max);
	}
	
	/**
	 * Add the given value to this Vector.
	 * @param v Number or Vector
	 * @return Vector
	 */
	this.add = function Add(v) {
		if(typeof(v) == "number") {
			this.x+=v;
			this.y+=v;
		} else {
			this.x+=v.x;
			this.y+=v.y;
		}
		return this;
	}
   
	/**
	 * Substract the given value from this Vector.
	 * @param v Number or Vector
	 * @return Vector
	 */
	this.sub = function Substract(v) {
		if(typeof(v) == "number") {
			this.x-=v;
			this.y-=v;
		} else {
			this.x-=v.x;
			this.y-=v.y;
		}
		return this;
	}
   
	/**
	 * Calculate a vector dot product
	 * @param v A vector
	 * @return The dot p roduct
	 */
	this.dot = function DotProduct(v) {
		return (this.x * v.x + this.y * v.y);
	}
	
	/**
	 * Multiply this vector by the given one.
	 * @param v Number or Vector
	 * @return Vector
	 */
	this.mult = function Multiply(v) {
		if(typeof(v) == "number") {
			this.x*=v;
			this.y*=v;
		} else {
			this.x*=v.x;
			this.y*=v.y;
		}
		return this;
	}
	
	/** 
	 * Divide this vector's x/y by another's.
	 * @param v Number or Vector
	 * @return Vector
	 */
	this.div = function Divide(v) {
		if(typeof(v) == "number") {
			this.x/=v;
			this.y/=v;
		} else {
			this./=v.x;
			this./=v.y;
		}
		return this;
	}
   
	/**
	 * Normalize the vector.
	 * http://www.fundza.com/vectors/normalize/index.html
	 * http://programmedlessons.org/VectorLessons/vch04/vch04_4.html
	 * @param void
	 * @return vector
	 */
	this.normalize = function Normalize() {
		var length = this.len();
		this.x = this.x / length;
		this.y = this.y / length;
		return this;
	}
   
	/**
	 * Calculate the perpendicular vector (normal)
	 * http://en.wikipedia.org/wiki/Perpendicular_vector
	 * @param void
	 * @return vector 
	 */
	this.perp = function Perp() {
		return new Vector(-this.y, this.x);
	}
	
	/**
	 * Create and return a copy of this Vector.
	 * @return vector
	 */
	this.clone = function Clone() {
		return new Vector(this.x, this.y);
	}
}