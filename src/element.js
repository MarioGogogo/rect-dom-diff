/**
 * @Author: lovewcc
 * @Date:   2019-04-09T00:10:06+08:00
 * @Last modified by:   lovewcc
 * @Last modified time: 2019-04-09T00:27:34+08:00
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
function render() {}

export { createElement, render };
