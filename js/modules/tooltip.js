export default function initToolTip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  const onMouseMove = {
    handleEvent(event) {
      this.toolTipBox.style.top = `${event.pageY + 20}px`;
      this.toolTipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.toolTipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function createToolTipBox(element) {
    const toolTipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    toolTipBox.classList.add('toolTip');
    toolTipBox.innerText = text;

    document.body.appendChild(toolTipBox);

    return toolTipBox;
  }

  function onMouseOver(event) {
    const toolTipBox = createToolTipBox(this);
    toolTipBox.style.top = `${event.pageY}px`;
    toolTipBox.style.left = `${event.pageX}px`;

    onMouseMove.toolTipBox = toolTipBox;
    this.addEventListener('mousemove', onMouseMove);
    onMouseLeave.toolTipBox = toolTipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
