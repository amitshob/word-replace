//

var wordCount = function(string_input,word_input) {
  var word_whole = " "+word+" ";
  var count = (temp.match(/\bword_whole\g) || []).length;
  // debugger;
  return count;
};
 var wordReplace = function(string_input,word_input,word_replace) {
   var modifiedString = string_input.replace(/word_input/g,word_replace);
   return modifiedString;
};


 $(document).ready(function() {
   $("form#word-replace").submit(function(event) {
     var string_input = $("input#string_input").val()
     var word_input = $("input#word_input").val()
     var word_replace = $("input#word_replace").val()
     var result = wordReplace(string_input,word_input,word_replace)


     $("#new-string").text(result)
     $("#result").show()

     event.preventDefault()
   });
 });
