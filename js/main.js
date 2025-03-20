// Function to populate the grid with sorted projects
function populateProjects() {
    const gridContainer = document.getElementById('grid-view');
    const textList = document.getElementById('text-list');
    
    // Convert projects object to array for sorting
    const projectsArray = Object.entries(projects).map(([id, project]) => {
        return { id, ...project };
    });
    
    // Sort projects by date (newest first)
    projectsArray.sort((a, b) => b.sortDate - a.sortDate);
    
    // Clear existing content
    gridContainer.innerHTML = '';
    textList.innerHTML = '';
    
    // Add projects to grid
    projectsArray.forEach((project, index) => {
        // Create grid item
        const gridItem = document.createElement('div');
        gridItem.className = 'project';
        gridItem.dataset.category = project.categoryClass;
        gridItem.onclick = function() { openProject(project.id); };
        
        // Create image
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;
        gridItem.appendChild(img);
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'project-overlay';
        overlay.textContent = project.title;
        gridItem.appendChild(overlay);
        
        // Add to grid
        gridContainer.appendChild(gridItem);
        
        // Add to text list with comma and category class
        const textItem = document.createElement('span');
        textItem.className = `text-item ${project.categoryClass}`;
        textItem.onclick = function() { openProject(project.id); };
        textItem.textContent = project.title;
        textList.appendChild(textItem);
        
        // Add comma after each item (except the last one)
        if (index < projectsArray.length - 1) {
            const comma = document.createElement('span');
            comma.className = 'comma';
            comma.textContent = ',';
            textList.appendChild(comma);
        }
    });
}

// Initialize the page
window.onload = function() {
    populateProjects();
    
    // Show text view by default
    showText();
    
    // Apply Art filter by default instead of "All"
    filterProjects('category-art');
};

// View control functions
function showGrid() {
    // ... function body from original file ...
}

function showText() {
    // ... function body from original file ...
}

function toggleInfo() {
    // ... function body from original file ...
}

// More efficient project filtering
function filterProjects(category) {
    // Update active state of filter buttons
    document.querySelectorAll('.category-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Toggle visibility of category filters based on selection
    const filters = {
        music: document.getElementById('filter-music'),
        art: document.getElementById('filter-art'),
        tech: document.getElementById('filter-tech')
    };
    
    if (category === 'all') {
        // Hide category filters when "All" is selected
        Object.values(filters).forEach(filter => filter.style.display = 'none');
        // Activate the "All" filter
        document.getElementById('filter-all').classList.add('active');
    } else {
        // Show all category filters when a specific category is selected
        Object.values(filters).forEach(filter => filter.style.display = 'inline-block');
        // Activate the selected filter
        document.getElementById(`filter-${category.replace('category-', '')}`).classList.add('active');
    }
    
    // Use dataset for faster filtering
    document.querySelectorAll('.project').forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.classList.remove('filtered-out');
        } else {
            item.classList.add('filtered-out');
        }
    });
    
    // Apply similar logic to text items
    document.querySelectorAll('.text-item').forEach(item => {
        item.classList.remove('highlighted', 'filtered-out');
        
        if (category !== 'all') {
            if (item.classList.contains(category)) {
                item.classList.add('highlighted');
            } else {
                item.classList.add('filtered-out');
            }
        }
    });
}

// ... all other JavaScript functions from the original file ... 