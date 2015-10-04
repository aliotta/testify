describe('API integration', function(){
  var server;

  before(function () { server = sinon.fakeServer.create(); });
  after(function () {
    todo.setup.restore();
    server.restore();
  });

  it('todo.setup receives an array of todos when todo.init is called', function () {
    var stub = sinon.stub(todo, 'setup');
    stub.returnsArg(0);
    //var spy = sinon.spy(todo, 'setup');
    todo.init();
    server.requests[0].respond(
      200,
      { "Content-Type": "text/plain" },
      JSON.stringify({todos: [{ name: 'Client-side unit tests',  done: true}]})
    );
    var sent = JSON.stringify({todos: [{ name: 'Client-side unit tests',  done: true}]});
    assert(stub.calledOnce, "was not called once")
    assert(stub.calledWith(JSON.parse(sent).todos), "was not called correctly")

  });
});
