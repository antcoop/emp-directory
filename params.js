
const btn = {
  event: {
    MouseEvent: {
      target: "element",
      action: null
    }
  },
  addEventListener: function(event, cb) {
    if (event === "click") {
      cb(this.event.MouseEvent);
    } else {
      return null;
    }
  }
};

btn.addEventListener('click', handleClick);

function handleClick(e) {
  console.log(arguments);
}