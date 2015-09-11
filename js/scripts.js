// //
//
// var wordCount = function(temp,word) {
//   // var occurence_count = (string_input.match(/word_to_count/g) || []).length;
//   // toword_to_count = " " + word_to_count + " ";
//   var word_whole = " "+word+" ";
//   var count = (temp.match(/word_whole/g) || []).length;
//   // debugger;
//   return count;
// };
 var wordReplace = function(string,word,replace) {

   var modifiedString = string.replace(/word/g,replace);

   return modifiedString;

 };
