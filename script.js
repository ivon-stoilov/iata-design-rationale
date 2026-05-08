document.addEventListener('DOMContentLoaded', () => {
    const categoryContainer = document.getElementById('category-list');
    const faqList = document.getElementById('faq-list');
    const searchInput = document.getElementById('global-search');

    let currentCategory = 'all';

    // Helper: Simple Title Case
    function toTitleCase(str) {
        return str.toLowerCase().split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    }

    // 1. Generate Sidebar Categories
    faqData.forEach(section => {
        const li = document.createElement('li');
        li.className = 'category-item';
        // Use full category name to match anchors
        li.textContent = section.category;
        
        li.addEventListener('click', () => {
            document.querySelectorAll('.category-item').forEach(c => c.classList.remove('active'));
            li.classList.add('active');
            currentCategory = section.category;
            renderFAQs();
        });
        
        categoryContainer.appendChild(li);
    });

    // Explicit 'ALL Questions' click handler (already in HTML but adding logic)
    const allBtn = document.querySelector('[data-category="all"]');
    allBtn.addEventListener('click', () => {
        document.querySelectorAll('.category-item').forEach(c => c.classList.remove('active'));
        allBtn.classList.add('active');
        currentCategory = 'all';
        renderFAQs();
    });

    // 2. Render FAQ Rows
    function renderFAQs() {
        faqList.innerHTML = '';
        
        faqData.forEach((section, index) => {
            if (currentCategory !== 'all' && section.category !== currentCategory) return;

            // In 'All' view, show category anchors outside the container
            if (currentCategory === 'all') {
                const anchor = document.createElement('div');
                anchor.className = 'category-anchor';
                anchor.textContent = section.category;
                faqList.appendChild(anchor);
            }

            // Each group gets its own container in 'all' view or just one in category view
            const container = document.createElement('div');
            container.className = 'faq-white-container';
            faqList.appendChild(container);

            const sectionList = document.createElement('div');
            sectionList.className = 'faq-list-group';
            container.appendChild(sectionList);

            section.items.forEach(item => {
                item.subItems.forEach(sub => {
                    const row = document.createElement('div');
                    row.className = 'faq-row';

                    row.innerHTML = `
                        <div class="faq-question-trigger">
                            <h3>${sub.q}</h3>
                            <div class="icon-toggle">+</div>
                        </div>
                        <div class="faq-answer-content">
                            <div class="answer-inner">
                                <div class="answer-wrapper">
                                    <div class="answer-text">${sub.a}</div>
                                    ${sub.rationale ? `
                                        <div class="rationale-block">
                                            <span class="rationale-label">Design Rationale</span>
                                            <div class="rationale-text">${sub.rationale}</div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    `;

                    row.querySelector('.faq-question-trigger').addEventListener('click', () => {
                        row.classList.toggle('active');
                    });

                    sectionList.appendChild(row);
                });
            });
        });
    }

    // Initial render
    renderFAQs();

    // 3. Search Logic
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const rows = document.querySelectorAll('.faq-row');

        rows.forEach(row => {
            const text = row.innerText.toLowerCase();
            row.style.display = text.includes(term) ? 'block' : 'none';
        });
    });
});
