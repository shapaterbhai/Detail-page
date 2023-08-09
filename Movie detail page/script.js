       // JavaScript to show/hide the scrolling hidden bar and make the header sticky

        // Get the header element
        const header = document.querySelector('header');

        // Get the scrolling bar element
        const scrollingBar = document.getElementById('scrolling-bar');

        // Function to handle the intersection observer
        function handleIntersection(entries) {
            const [entry] = entries;
            if (entry.isIntersecting) {
                // Hide the scrolling bar and reset the header position
                scrollingBar.style.display = 'none';
                header.style.position = 'static';
            } else {
                // Show the scrolling bar and make the header sticky
                scrollingBar.style.display = 'block';
                header.style.position = 'sticky';
                header.style.top = '0';
            }
        }

        // Set up the intersection observer
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Adjust this threshold based on your requirement
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        // Start observing the header element
        observer.observe(header);