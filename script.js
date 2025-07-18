// Make the clicked blog post link in the sidebar stay highlighted 
const links = document.querySelectorAll('.sidebar a');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    // Remove "active" from all
    links.forEach(link => link.classList.remove('active'));
    // Add "active" to the clicked one
    this.classList.add('active');
  });
});