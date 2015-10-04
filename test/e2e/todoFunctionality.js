/* globals casper, document */
casper.test.begin('App is setup correctly', 2, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    test.assertExists('.todo-list', 'List should exist');
    test.assertExists('.todo-form', 'Form should exist');
    
    
  });
  casper.then(function() {
    //adds a todo tests if it was added correctly then deletes it and checks deletion worked
    this.fill("form.todo-form", {
      todo: "casperjs"
    }, true);
    test.assertExists('.todo-list', 'List should exist');
    test.assertExists('.todo-form', 'Form should exist');
    
    test.assertEval(function() {
        return __utils__.findAll("li.todo-item").length === 1;
    }, "A todo was added");

    test.assertEval(function() {
      var listHtml = __utils__.findAll("li.todo-item")[0];
      var inputTagText = listHtml.getElementsByTagName("input")[0].value;
        return inputTagText === "casperjs";
    }, "The todo text was added correctly");

    this.click('button.todo-remove');

    test.assertEval(function() {
        return __utils__.findAll("li.todo-item").length === 0;
    }, "A todo was removed");


  });
  casper.then(function() {
    //adds two todos tests if it was added correctly then deletes them and checks deletion worked
    
    this.fill("form.todo-form", {
      todo: "casperjs"
    }, true);
    this.fill("form.todo-form", {
      todo: "casperjs2"
    }, true);
    test.assertEval(function() {
        return __utils__.findAll("li.todo-item").length === 2;
    }, "two todos were added");

    this.click('button.todo-remove');
    this.click('button.todo-remove');

    test.assertEval(function() {
        return __utils__.findAll("li.todo-item").length === 0;
    }, "two todos were removed");

  })

  casper.then(function() {
    this.fill("form.todo-form", {
      todo: "casperjs"
    }, true);

    this.click('button.todo-done');


    test.assertEval(function() {
      //check if class was added to li todo-item with class value todo-item--done
      var listHtml = __utils__.findAll("li.todo-item")[0];
      var classList = listHtml.classList;
      return classList[1] === "todo-item--done";
    }, "todos was checked off");

    this.click('button.todo-done');

    test.assertEval(function() {
      //check if class was added to li todo-item with class value todo-item--done
      var listHtml = __utils__.findAll("li.todo-item")[0];
      var classList = listHtml.classList;
      return !classList[1];
    }, "todos was unchecked");

    this.click('button.todo-remove');

  })

  casper.then(function() {
    //adds a todo tests if it was added correctly then deletes it and checks deletion worked
    this.fill("form.todo-form", {
      todo: ""
    }, true);
    test.assertExists('.todo-list', 'List should exist');
    test.assertExists('.todo-form', 'Form should exist');
    
    test.assertEval(function() {
        return __utils__.findAll("li.todo-item").length === 0;
    }, "A empty todo was not added");


  });


  casper.run(function() {
    test.done();
  });
});


