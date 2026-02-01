        // Mobile menu toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        function toggleServices() {
            const dropdown = document.getElementById('services-dropdown');
            dropdown.classList.toggle('hidden');
        }
        const nav = document.getElementById('main-nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add(
                'backdrop-blur-lg',
                'bg-white/80',
                'shadow-md'
            );
        } else {
            nav.classList.remove(
                'backdrop-blur-lg',
                'bg-white/80',
                'shadow-md'
            );
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        const items = document.querySelectorAll('.accordion-item');

        items.forEach(item => {
            const trigger = item.querySelector('.accordion-trigger');
            const content = item.querySelector('.accordion-content');
            const icon = trigger.querySelector('i');

            trigger.addEventListener('click', () => {
                items.forEach(i => {
                    i.querySelector('.accordion-content').classList.add('hidden');
                    i.querySelector('i').classList.replace('fa-minus', 'fa-plus');
                });

                content.classList.remove('hidden');
                icon.classList.replace('fa-plus', 'fa-minus');
            });
        });

        /* Auto-open first item */
        if (items.length) {
            items[0].querySelector('.accordion-content').classList.remove('hidden');
            items[0].querySelector('i').classList.replace('fa-plus', 'fa-minus');
        }
    });

    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', () => {
          card.classList.toggle('is-flipped');
        });
      });