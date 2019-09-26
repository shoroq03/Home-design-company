var helpYou = confirm("can help you to design your house or choosing for you");
var output;

if (helpYou == true) {
    output = 'contant us to help you';

} else {
    output = 'visit our  website and hope you enjoy';
}
document.write('<h1>' + output + '</h1>')

var order = comfirm('buy above 1000$ for free dilivery');
function buyAbove(money){ 
    // input
  
    var dilivery;
    if (money>=1000) {
        var dilivery = ('free dilivery');
       
    } else {
        var dilivery = ('enjoy for buying');
    }
    //output

    document.write('<h3>' + buyAbove() + '<h3>');
}
