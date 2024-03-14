/* ------------------------ */
/*         rgbToHex         */
/* ------------------------ */
const rgbToHex = (rgbString) => {
  const rgbArray = rgbString
    .match(/\d+/g)
    .map(Number);
  const toHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1
      ? "0" + hex
      : hex;
  };
  return (
    "#" +
    toHex(rgbArray[0]) +
    toHex(rgbArray[1]) +
    toHex(rgbArray[2])
  );
};

/* ------------------------ */
/*     DOM fully loaded     */
/* ------------------------ */
document.addEventListener(
  "DOMContentLoaded",
  function () {
    const button =
      document.querySelector(".btn");
    const styleEl =
      document.querySelector("style");

    // Get the list of CSS rules
    // from the stylesheet
    const cssRuleList =
      styleEl.sheet.cssRules;

    // Find the CSS rule for
    // the ':hover' state of the '.btn' class
    const hoverRule = Array.from(
      cssRuleList
    ).find(
      (rule) =>
        rule.selectorText === ".btn:hover"
    );

    // Update the `background-color`
    // of the hover state
    const updateButtonColor = (color) => {
      if (hoverRule) {
        hoverRule.style.backgroundColor =
          color;
        console.log(
          rgbToHex(
            hoverRule.style.backgroundColor
          )
        );
      }
    };

    // Change the hover
    // from `#2ecc71` to `#e74c3c`
    // when the mouse leaves the button
    button.addEventListener(
      "mouseleave",
      () => updateButtonColor("#e74c3c")
    );
  }
);
