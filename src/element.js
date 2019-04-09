/**
 * @Author: lovewcc
 * @Date:   2019-04-09T00:10:06+08:00
 * @Last modified by:   lovewcc
 * @Last modified time: 2019-04-09T13:00:38+08:00
 */

class Element {
  constructor(type, props, children) {
    this.type = type;
    this.props = props;
    this.children = children;
  }
}

function createElement(type, props, children) {
  return new Element(type, props, children);
}

//render方法将虚拟dom转化成真是dom
function render(eleObj) {
  let el = document.createElement(eleObj.type);
  for (let key in eleObj.props) {
    //设置属性的方法
    setAttr(el, key, eleObj.props[key]);
  }
  //开始遍历儿子
  let childs = eleObj.children;
  childs.forEach(child => {
    child =
      child instanceof Element ? render(child) : document.createTextNode(child);
    // 可以继续递归
    el.appendChild(child);
  });

  return el;
}

function setAttr(node, key, value) {
  switch (key) {
    case "value":
      if (
        node.tagName.toUpperCase() === "INPUT" ||
        node.tagName.toUpperCase() === "TEXTAREA"
      ) {
        node.value = value;
      }
      break;
    case "className":
      node.setAttribute(key, value);
      break;
    case "style":
      node.style.cssText = value;
      break;
    default:
      node.setAttribute(key, value);
      break;
  }
}
// 虚拟dom的页面加载
function renderDom(el, target) {
  target.appendChild(el);
}

export { createElement, render, Element, renderDom };
