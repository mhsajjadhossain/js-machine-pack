(function () {
    // modal wrapper function
    !function () {
        let openModalBtn = document.querySelectorAll('[data-modal-target]');
        let closeModalBtn = document.querySelectorAll('[data-close-btn]');
        let overlay = document.querySelector('.mod_overlay');

        // modal is opening here by clicking on open button   

        openModalBtn.forEach(button => {
            button.addEventListener('click', () => {
                let modal = document.querySelector(button.dataset.modalTarget)
                openModal(modal);
            })
        })

        // modal opening function
        function openModal(modal) {
            if (modal === null) {
                return
            }
            modal.classList.add('active');
            overlay.classList.add('active');
        }
        // modal closing function
        function closeModal(modal) {
            if (modal === null) {
                return
            }
            modal.classList.remove('active');
            overlay.classList.remove('active');
        }
        // modal is closing here by clicking on close button
        closeModalBtn.forEach(button => {
            button.addEventListener('click', () => {
                let modal = document.querySelector(button.dataset.closeBtn)
                closeModal(modal);
            })
        });
        // closing modals by clicking overlay
        overlay.addEventListener('click', () => {
            let modals = document.querySelectorAll('.modal_wrap.active');
            modals.forEach(modal => {
                closeModal(modal);
            })
        })
    }()
    // Hover me wrapper
    !function () {
        let hovBtn = document.querySelectorAll('[data-hover-target]');
        // class adding function
        function classAdding(element) {
            element.classList.add('active');
        }
        // class removing function
        function classRemove(element) {
            element.classList.remove('active');
        }
        // mouse enter event
        hovBtn.forEach(button => {
            button.addEventListener('mouseenter', () => {
                let element = document.querySelector(button.dataset.hoverTarget);
                classAdding(element);
            })
        })
        // mouse leave event
        hovBtn.forEach(button => {
            button.addEventListener('mouseleave', () => {
                let element = document.querySelector(button.dataset.hoverTarget);
                classRemove(element);
            })
        })
    }()




})()