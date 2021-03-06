window.Konacha = {
  reset: function() {
    document.body = document.createElement('body');
    document.body.id = 'konacha';
  }
};

(function(){

  var QUnitAPI = [
    'QUnit',
    'module',
    'test',
    'asyncTest',
    'start',
    'stop',
    'expect',
    'deepEqual',
    'notDeepEqual',
    'equal',
    'notEqual',
    'strictEqual',
    'notStrictEqual',
    'ok',
    'throws'
  ];

  for (var i = 0; i < QUnitAPI.length; i++) {
    window[QUnitAPI[i]] = top[QUnitAPI[i]];
  }

}());

// In order to isolate top-level before hooks,
// the specs in each iframe are wrapped in an anonymous suite.
//mocha.suite = Mocha.Suite.create(mocha.suite);
//mocha.suite.path = document.documentElement.getAttribute("data-path");

// Override mocha.ui so that the pre-require event is emitted
// with the iframe's `window` reference, rather than the parent's.
//mocha.ui = function (name) {
  //this._ui = Mocha.interfaces[name];
  //if (!this._ui) throw new Error('invalid interface "' + name + '"');
  //this._ui = this._ui(this.suite);
  //this.suite.emit('pre-require', window, null, this);
  //return this;
//};


// Show only the current iframe.
//mocha.suite.beforeAll(function () {
  //var contexts = parent.document.getElementsByClassName("test-context");
  //for (var i = 0; i < contexts.length; ++i) {
    //if (contexts[i].contentWindow == window) {
      //contexts[i].style.display = "block";
    //} else {
      //contexts[i].style.display = null;
    //}
  //}
//});

//mocha.suite.beforeEach(function () {
  //Konacha.reset();
//});
