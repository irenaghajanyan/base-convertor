module.exports = {
convertToBinary: function(input) {
   let numToConvert = input;
   let binString = "";
   while(numToConvert>0) {
      let binNum = (numToConvert % 2);
      binString = "" + binNum + binString;
      numToConvert = Math.floor(numToConvert/2);
   }
   return binString;
},


convertToHex: function(input) {
   let numToConvert =  input ;
   let hexString = "" ;
   while(numToConvert>0) {
      let hexNum= (numToConvert % 16);
      hexString = "" + hexNum + hexString ;
      numToConvert = Math.floor(numToConvert/16)

   }
   return hexString;
}

}