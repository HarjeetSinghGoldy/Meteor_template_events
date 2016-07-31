if (Meteor.isClient) {
  // Template.layout.events({
  //   'click button': function (event, template) {
  //     $('body').css('background-color', 'red');
  //   },
  //   'mouseenter #redButton': function (event, template) {
  //     // start fancy animation
  //   }
  // });
  Template.layout.events({
    'click button': function (event, template) {
      $('body').css('background-color', 'red');
    },
    /////////event prevent Default
    'click a': function (event, template) {
      event.preventDefault();
      // do not follow the link
      console.log('Please do not leave yet');
    }

  });
  Template.green.events({
    'click button': function (event, template) {
      event.stopImmediatePropagation();
      console.log(event.isPropagationStopped());
      $('body').css('background-color', 'green');
    }
  });
}

if (Meteor.isServer) {

}