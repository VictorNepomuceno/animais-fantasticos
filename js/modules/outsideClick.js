export default function outsideClick(element, events, callback) {
  const outside = "data-outside";
  const html = document.documentElement;

  if (!element.hasAttribute(outside)) {
    events.forEach((item) => {
      setTimeout(() => {
        html.addEventListener(item, handleOutsideClick);
      });
    });
    element.setAttribute(outside, " ");
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((item) => {
        html.removeEventListener(item, handleOutsideClick);
      });
      callback();
    }
  }
}
