angular.module('ng-fastclick', []).run(function() {
    var needsClick = FastClick.prototype.needsClick;
  FastClick.prototype.needsClick = function(target) { 
    if ( (target.className || '').indexOf('pac-item') > -1 ) {
      return true;
    } else if ( (target.parentNode.className || '').indexOf('pac-item') > -1) {
      return true;
    } else {
      return needsClick.apply(this, arguments);
    }
  };

  FastClick.attach(document.body);
});

