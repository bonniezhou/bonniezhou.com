import {MDCLineRipple} from '@material/line-ripple';

class Link {
  constructor(root) {
    this.root_ = root;
    this.lineRipple_ = new MDCLineRipple(root.querySelector('.mdc-line-ripple'));

    this.root_.addEventListener('mouseover', () => this.lineRipple_.activate());
    this.root_.addEventListener('mouseout', () => this.lineRipple_.deactivate());
  }
}

const linkElements = document.querySelectorAll('.underlined-link');
linkElements.forEach((linkEl) => {
  new Link(linkEl);
});
