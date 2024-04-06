//your code here!
document.addEventListener('DOMContentLoaded', function() {
  const list = document.getElementById('infi-list');

  // Function to add list items
  function addItems(count) {
    for (let i = 0; i < count; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `Item ${list.children.length + 1}`;
      list.appendChild(listItem);
    }
  }

  // Initially add 10 items
  addItems(10);

  // Function to check if the user has scrolled to the bottom of the list
  function checkScroll() {
    // Check if scroll position is at the bottom of the list
    if (list.scrollTop + list.offsetHeight >= list.scrollHeight) {
      addItems(2); // Add 2 more items if user has reached the bottom
    }
  }

  // Event listener for scroll events on the list
  list.addEventListener('scroll', checkScroll);
});