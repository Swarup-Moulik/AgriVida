
    function loadPage(url) {
        console.log(`Loading: ${url}`);
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('info1').innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading page:', error);
                document.getElementById('info1').innerHTML = '<p style="color: red;">Failed to load content. Please try again.</p>';
            });
    }

