/*
this can reference different things depending on where it is in the code.
If you use this inside an objects curlybrackets, it's referencing the
objects variables. But if you make a function inside the object and use this,
it's not going to be referencing the object but instead the global object.
You can reference the object inside a function, but then you need to pass
in the this as an argument after the function. That lets the function know
when you reference the 'this' inside the function, that it's supposed to
use the object instead of the global object.
 */

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};

video.showTags();
