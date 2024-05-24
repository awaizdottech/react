function customRender(element, location) {
  const newElement = document.createElement(element.type);
  newElement.innerHTML = element.children;
  for (const prop in element.props) {
    if (prop === "children") continue;
    newElement.setAttribute(prop, element.props[prop]);
  }
  location.append(newElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
}; // this is similar to what jsx is actually converted into by bundlers (CRA, vite etc)

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer); // takes args where 1st arg is what needs to be inserted and 2nd is where to insert it
