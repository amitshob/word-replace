describe('wordCount', function(){
  it("should take a string input and word and give the number of occurences of that word in the string", function(){
    expect(wordCount("Welcome to heaven","to")).to.eql(1);
  });
});

describe('wordReplace', function(){
  it("should take a string input and word and replace the occurences of that word in the string", function(){
    expect(wordReplace("Welcome to heaven","to","in")).to.eql("Welcome in heaven");
  });

  it('should find and replace more than a single occurance', function() {
    expect(wordReplace("Welcome to heaven to","to","in")).to.equal('Welcome in heaven in');
  });

  it('should not replace word of dissimalr case', function(){
    expect(wordReplace("Welcome to heaven","welcome","train")).to.equal('Welcome to heaven');
  });
});
