//

var wordCount = function(temp,word) {
  // var occurence_count = (string_input.match(/word_to_count/g) || []).length;
  // toword_to_count = " " + word_to_count + " ";
  var word_whole = " "+word+" ";
  var count = (temp.match(word_whole) || []).length;
  // debugger;
  return count;
};
 var wordReplace = function(string_input,word_input,word_replace) {

   var modifiedString = string_input.replace(/word_input/g,word_replace);

   return modifiedString;
};


 $(document).ready(function() {
   $("form#word-replace").submit(function(event) {
     var string_input = parse($("input#string_input").val())
     var word_input = parse($("input#word_input").val())
     var word_input = parse($("input#word_input").val())
     var result = wordReplace(string_input,word_input,word_replace)


     $("#new-string").text(result)
     $("#result").show()

     event.preventDefault()
   });
 });
