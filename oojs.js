// #1

var string =
{

  pluralize : function(word)
  {
    if (word[word.length-1] == 'y')
      {
        return word.substr(0,word.length-1)+"ies";
      }
    else
      {
        return word+'s';
      }
  }

};

string.pluralize("bully");

// #2

function Book({title,quantity,price}){
    this.title = title;
    this.quantity = quantity;
    this.price = price;
}
Book.prototype.getSubtotal = function() {
  return this.quantity * this.price;
}

function ShoppingCart(list)
{
  this.bookList = list;
}

ShoppingCart.prototype.add = function(book) {
  this.bookList.push(book);
}

ShoppingCart.prototype.getTotal = function() {
  return this.bookList.reduce(function(sum,book){
    return sum+book.getSubtotal();
  },0);
}

var oojsBook = new Book({ title: 'Object Oriented JavaScript', quantity: 2, price: 10 });
console.log(oojsBook.title); // Object Oriented JavaScript
console.log(oojsBook.quantity); // 2
console.log(oojsBook.price); // 10
console.log(oojsBook.getSubtotal()); // 20

var book1 = new Book({ title: 'Object Oriented JavaScript', quantity: 1, price: 10 });
var book2 = new Book({ title: 'JavaScript Web Applications', quantity: 2, price: 15 });
var book3 = new Book({ title: 'PHP Object Oriented Solutions', quantity: 1, price: 20 });
var book4 = new Book({ title: 'Head First Java', quantity: 5, price: 20 });

var cart = new ShoppingCart([book1, book2]);
cart.add(book3);
cart.add(book4);
var subtotal = cart.getTotal();
console.log(subtotal); // 160

// #3

Array.prototype.map2 = function(callBackFunction)
{
  var newList = [];
  for(var i in this)
  {
    newList[i] = callBackFunction(this[i]);
  }
  return newList;
}


var numbers = [1, 2, 3, 4, 5];
var numbersDoubled = numbers.map2(function(number) {
  return number * 2;
});
console.log(numbersDoubled); // should equal [2, 4, 6, 8, 10]
