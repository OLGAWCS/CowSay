const userInfo = require('./information.js');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hello, I'm a ${userInfo.info.name} from ${userInfo.info.campus} campus`,
    e: "oO",
    T: "U "
}));