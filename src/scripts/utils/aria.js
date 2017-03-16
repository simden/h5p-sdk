import {attributeEquals, toggleAttribute, toggleVisibility} from '../utils/elements';

/**
 * Returns true if aria-expanded=true on element
 *
 * @param {HTMLElement} element
 * @function
 */
const isExpanded = attributeEquals("aria-expanded", 'true');

/**
 * Toggles aria-hidden on 'collapsible' when aria-expanded changes on 'toggler',
 * and toggles aria-expanded on 'toggler' on click
 *
 * @param {HTMLElement} element
 */
export const initCollapsible = (element) => {
  // elements
  const toggler = element.querySelector('[aria-controls][aria-expanded]');
  const collapsibleId = toggler.getAttribute('aria-controls');
  const collapsible = element.querySelector(`#${collapsibleId}`);

  // set observer on title for aria-expanded
  let observer = new MutationObserver(() => toggleVisibility(isExpanded(toggler), collapsible));

  observer.observe(toggler, {
    attributes: true,
    attributeOldValue: true,
    attributeFilter: ["aria-expanded"]
  });

  // Set click listener that toggles aria-expanded
  toggler.addEventListener('click', () => toggleAttribute("aria-expanded", toggler));

  // initialize
  toggleVisibility(isExpanded(toggler), collapsible);
};