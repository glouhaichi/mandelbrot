'use strict';

var Complex = function (real, imaginary) {
    this.real = (typeof real === 'number' ? real : 0);
    this.imaginary = (typeof imaginary === 'number' ? imaginary : 0);
};
Complex.prototype.absolute = function() {
    return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
};
Complex.add = function(a, b) {
    return new Complex(a.real + b.real, a.imaginary + b.imaginary);
};
Complex.negative = function(a) {
    return new Complex(-a.real, -a.imaginary);
};
Complex.subtract = function(a, b) {
    return Complex.add(a, Complex.negative(b));
};
Complex.multiply = function(a, b) {
    return new Complex(a.real*b.real-a.imaginary*b.imaginary, a.real*b.imaginary+a.imaginary*b.real);
};
Complex.outOfSquare = function(complex, length) {
    return (Math.abs(complex.real) >= length || Math.abs(complex.imaginary) >= length);
};
