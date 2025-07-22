 function showScreenshots() {

            const gallery = document.getElementById('screenshotGallery');

            gallery.classList.toggle('screenshot-active');

        }

        

        function openScreenshot(img) {

            const modal = document.getElementById('screenshotModal');

            const modalImg = document.getElementById('modalImage');

            modal.style.display = 'block';

            modalImg.src = img.src;

        }

        

        function closeScreenshot() {

            document.getElementById('screenshotModal').style.display = 'none';

        }

        

        // Close modal when clicking outside the image

        document.getElementById('screenshotModal').addEventListener('click', function(e) {

            if (e.target === this) {

                closeScreenshot();

            }

        });

        

        // Close modal with Escape key

        document.addEventListener('keydown', function(e) {

            if (e.key === 'Escape') {

                closeScreenshot();

            }

        });
