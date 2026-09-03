/* quick note: yoinked wiki from JSimple xD
   https://github.com/geo-mzn/JSimple/wiki
*/
window.jsbot = window.jsbot || {};

jsbot.config = {
  name: "My Chatbot"
  unknownMsg: "I am not coded to respond to that prompt."
  saveMemories: true
};

jsbot.ai = function(input,expected,response){if(input.contains(expected)){return `${jsbot.config.name}: ${response}`;}if(typeof jsbot.config.unknownMsg==="string"){return jsbot.config.unknownMsg;}else if(Array.isArray(jsbot.config.unknownMsg)){return jsbot.config.unknownMsg[Math.floor(Math.random() * jsbot.config.unknownMsg.length)];};}
jsbot.cmd = function(input,cmdName,cmdCode){if(input===`/${cmdName}`){cmdCode();}}
