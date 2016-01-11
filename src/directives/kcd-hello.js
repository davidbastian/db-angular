
export default ngModule => {

  ngModule.directive('kcdHello', () => {
    require('./kcd-hello.scss');
    return {
      restrict: 'E',
      scope: {},
      template: require('./kcd-hello.html'),
      controllerAs: 'vm',

      controller: function() {
        var vm = require('json!./header.json');

       console.log(vm)
        
      }

    };
  });
};
