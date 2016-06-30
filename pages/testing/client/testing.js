//create a "class" for complex numbers...


//create a constructor with two fields: re, im
function ComplexNumber(re,im){
this.re = re;
this.im = im;
}

//doubles the real and imagineary parts of element
ComplexNumber.prototype.double = function () {
this.re = 2*this.re;
this.im = 2*this.im;
}

//write the instance method, square()  which squares the complex number (a+ib)^2 =a^2-b^2 + i(2ab)
ComplexNumber.prototype.square = function() {
const re1 = this.re*this.re - this.im*this.im;
const im1 = 2*this.re*this.im;
this.re = re1;
this.im = im1;
}

const num=new ComplexNumber(1,2);
num.double();
num.square();

console.dir(num);
console.dir(ComplexNumber);


Template.testing.helpers({
num: function(){return num;}


});
