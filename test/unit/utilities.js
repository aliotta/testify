var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){

    it('should have all the necessary methods', function(){

    });
  });
});

describe('the todo.util methods', function() {
  it('should have all the necessary methods', function(){
    assert.typeOf(todo.util.trimTodoName, "function")
    expect(typeof todo.util.isValidTodoName).to.be.equal("function")
    expect(typeof todo.util.getUniqueId).to.be.equal("function")
  });
  it('trimTodoName should replace whitespace of file', function(){
    todo.util.trimTodoName("   Hi   There    Alex    ").should.have.length(18)
    expect(todo.util.trimTodoName("   Hi   There    Alex    ")).to.be.equal("Hi   There    Alex")
  });
  it('isValidTodoName should check is todo name is valid', function(){
    expect(todo.util.isValidTodoName("AA")).to.be.equal(true)
    expect(todo.util.isValidTodoName("A")).to.be.not.equal(true)
  });
  it('getUniqueId should generate a unique id', function(){
    expect(todo.util.getUniqueId()).to.be.equal(1)
    expect(todo.util.getUniqueId()).to.be.equal(2)
  });
  it("should have access to chai\'s property method", function(){
    var object = {'test': true}
    expect(object).to.have.property('test')
  })

});
