// Using fetch API
document.querySelectorAll('.sidebar a').forEach(menuItem => {
  menuItem.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor link behavior
    const contentUrl = menuItem.getAttribute('href').replace('.md', '.html');

    fetch(contentUrl)
      .then(response => response.text())
      .then(data => {
        document.querySelector('.content').innerHTML = data;
        document.querySelector('.content').setAttribute('dir', 'rtl'); // Set text direction to right-to-left
        document.querySelector('.content').setAttribute('lang', 'he'); // Set language to Hebrew
      })
      .catch(error => console.error(error));
  });
});

// Using jQuery (if preferred)
$(document).ready(function() {
  $('.sidebar a').click(function(event) {
    event.preventDefault();
    var contentUrl = $(this).attr('href').replace('.md', '.html');

    $.get(contentUrl, function(data) {
      $('.content').html(data);
      $('.content').attr('dir', 'rtl'); // Set text direction to right-to-left
      $('.content').attr('lang', 'he'); // Set language to Hebrew
    });
  });
});
