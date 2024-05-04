// Using fetch API
document.querySelectorAll('.sidebar a').forEach(menuItem => {
  menuItem.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor link behavior
    const contentUrl = menuItem.getAttribute('href'); // Extract markdown filename

    fetch(contentUrl)
      .then(response => response.text())
      .then(data => {
        document.querySelector('.content').innerHTML = data;
      })
      .catch(error => console.error(error));
  });
});

// Using jQuery (if preferred)
$(document).ready(function() {
  $('.sidebar a').click(function(event) {
    event.preventDefault();
    var contentUrl = $(this).attr('href');

    $.get(contentUrl, function(data) {
      $('.content').html(data);
    });
  });
});
