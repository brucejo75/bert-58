import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  bert(message, type) {
    Bert.alert(message, type);
  }
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
  'click .bert'(event, instance) {
    const message = $(event.target).attr('message');
    const type = $(event.target).text();
    Bert.alert(type, type);
  }
});
