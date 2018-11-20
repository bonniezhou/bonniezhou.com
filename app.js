import {MDCLineRipple} from '@material/line-ripple';

class UnderlinedLink {
  constructor(root) {
    this.root_ = root;
    this.lineRipple_ = new MDCLineRipple(root.querySelector('.mdc-line-ripple'));

    this.root_.addEventListener('mouseover', () => this.lineRipple_.activate());
    this.root_.addEventListener('mouseout', () => this.lineRipple_.deactivate());
  }
}
  
// Workaround until :focus-visible supported in all browsers
// https://css-tricks.com/keyboard-only-focus-styles/
class Anchor {
  constructor(root) {
    this.root_ = root;
    this.isClicked_ = false;

    this.root_.addEventListener('focus', () => {
      if (this.isClicked_) return;
      this.root_.classList.add('focus-visible');
    });
    this.root_.addEventListener('mousedown', () => {
      this.isClicked_ = true;
      this.root_.classList.remove('focus-visible');
    });
    this.root_.addEventListener('blur', () => {
      if (this.isClicked_) this.isClicked_ = false;
      this.root_.classList.remove('focus-visible');
    });
  }
}

const linkElements = document.querySelectorAll('.underlined-link');
linkElements.forEach((linkEl) => new UnderlinedLink(linkEl));

const anchorElements = document.querySelectorAll('a');
anchorElements.forEach((a) => new Anchor(a));
