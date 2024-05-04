// Using fetch API
document.querySelectorAll('.sidebar a').forEach(menuItem => {
  menuItem.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor link behavior
    const contentUrl = menuItem.getAttribute('href').replace('.md', '.html'); // Replace .md with .html

    fetch(contentUrl)
      .then(response => response.text())
      .then(data => {
        const iframe = document.querySelector('.content iframe');
        const iframeDocument = iframe.contentWindow.document; // Access the iframe document

        // Set attributes of the HTML content inside the iframe
        iframeDocument.documentElement.setAttribute('dir', 'rtl'); // Set text direction to right-to-left
        iframeDocument.documentElement.setAttribute('lang', 'he'); // Set language to Hebrew

        // Inject the fetched data into the iframe document
        iframeDocument.open();
        iframeDocument.write(data);
        iframeDocument.close();
      })
      .catch(error => console.error(error));
  });
});

// Using jQuery (if preferred)
$(document).ready(function() {
  $('.sidebar a').click(function(event) {
    event.preventDefault();
    var contentUrl = $(this).attr('href').replace('.md', '.html'); // Replace .md with .html

    $.get(contentUrl, function(data) {
      const iframe = $('.content iframe')[0]; // Get the native iframe element
      const iframeDocument = iframe.contentWindow.document; // Access the iframe document

      // Set attributes of the HTML content inside the iframe
      iframeDocument.documentElement.setAttribute('dir', 'rtl'); // Set text direction to right-to-left
      iframeDocument.documentElement.setAttribute('lang', 'he'); // Set language to Hebrew

      // Inject the fetched data into the iframe document
      iframeDocument.open();
      iframeDocument.write(data);
      iframeDocument.close();
    });
  });
});
