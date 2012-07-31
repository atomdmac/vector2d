/**
 * Vector2d Class
 * 
 * Heavily based on/borrowed from a kind soul at pastbin.com
 * http://pastebin.com/h5PSDR0g
 *
 * Thank you!
 */
Vector2d = function Vector2d(x, y) {
	this.x = x;
	this.y = y;
	
	/**
	 * Return the slope of the vector.
	 * @return Number
	 */
	this.slope = function Slope() {
		// Account for vertical/horizontal line.
		if(this.x==0) return null;
		if(this.y==0) return 0;
		// Otherwise, calculate and return slope.
		return (this.y/this.x);
	}
   
	/**
	 * Set or calculate the length of the Vector2d.
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
	 * Scale the x component of the Vector while keeping the ratio with the y 
	 * component.
	 * @param n Number
	 * @return Number
	 */
	this.lenx = function ScaleX( n ) {
		// Calculate new Y component based on current slope.
		var slope = this.clone().normalize().slope();
		
		// Account for verticle/horiztonal lines.
		var newY;
		if(slope != null) {
			newY = n * slope;
		} else {
			newY = 0;
		}
		
		// Apply changes.
		this.x = n;
		this.y = newY;
		// Return.
		return this;
	}
	
	/**
	 * Scale the x component of the Vector while keeping the ratio with the y 
	 * component.
	 * @param n Number
	 * @return Number
	 */
	this.leny = function ScaleY( n ) {
		// Calculate new x property (i.e. n / slope).
		var slope = this.clone().normalize().slope();
		
		// Account for horizontal lines.
		var newX;
		if(slope != 0) {
			newX = n / slope;
		} else {
			newX = 0;
		}
		// Apply changes.
		this.x = newX;
		this.y = n;
		// Return.
		return this;
	}
	
	/**
	 * Ensure that this Vector2d's length is no larger than the given value.
	 * @param maxLen Number
	 * @return Vector2d
	 */
	this.trunc = function Truncate(maxLen) {
		if (this.len() > maxLen) {
			this.len(maxLen);
		}
		return this;
	}
	
	/**
	 * Ensure that this Vector2d's length is no larger than the given maximum and
	 * no smaller than the given minimum.
	 * @param 
	 * @return Vector2d
	 */
	this.clamp = function Clamp(min, max) {
		var l = this.len();
		if(l<min) this.len(min);
		if(l>max) this.len(max);
	}
	
	/**
	 * Add the given value to this Vector2d.
	 * @param v Number or Vector2d
	 * @return Vector2d
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
	 * Substract the given value from this Vector2d.
	 * @param v Number or Vector2d
	 * @return Vector2d
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
	 * Calculate a Vector2d dot product
	 * @param v A Vector2d
	 * @return The dot p roduct
	 */
	this.dot = function DotProduct(v) {
		return (this.x * v.x + this.y * v.y);
	}
	
	/**
	 * Multiply this Vector2d by the given one.
	 * @param v Number or Vector2d
	 * @return Vector2d
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
	 * Divide this Vector2d's x/y by another's.
	 * @param v Number or Vector2d
	 * @return Vector2d
	 */
	this.div = function Divide(v) {
		if(typeof(v) == "number") {
			this.x/=v;
			this.y/=v;
		} else {
			this.x/=v.x;
			this.y/=v.y;
		}
		return this;
	}
   
	/**
	 * Normalize the Vector2d.
	 * http://www.fundza.com/vectors/normalize/index.html
	 * http://programmedlessons.org/VectorLessons/vch04/vch04_4.html
	 * @return Vector2d
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
	 * @return Vector2d 
	 */
	this.perp = function Perp() {
		return new Vector2d(-this.y, this.x);
	}
	
	/**
	 * Create and return a copy of this Vector2d.
	 * @return Vector2d
	 */
	this.clone = function Clone() {
		return new Vector2d(this.x, this.y);
	}
}