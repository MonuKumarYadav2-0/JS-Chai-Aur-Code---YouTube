const accountId=127;
let accountEmail="monumaner70@gmail.com";
var accountPassword="123456";
accountCity="jaipur";
let accountState;

/*
We should never use the var, because it has problem of block scope and functional scope...
*/

 accountEmail="monumaner74@gmail.com";
 accountPassword="121212";
 accountCity="Bhopal";

 console.table([accountId,accountEmail,accountPassword,accountCity,accountState])