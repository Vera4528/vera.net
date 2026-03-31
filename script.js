function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));

    // Show the selected page
    const page = document.getElementById(pageId);
    page.classList.remove('hidden');

    // Load external HTML
    if (pageId === 'about') {
        loadPage('about', 'aboutme.html');
    } else if (pageId === 'project') {
        loadPage('project', 'projects.html');
    } else if (pageId === 'contacts') {
        loadPage('contacts', 'contacts.html');
    }
}

function loadPage(sectionId, filePath) {
    const section = document.getElementById(sectionId);
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(html => section.innerHTML = html)
        .catch(err => section.innerHTML = `<p>Error loading page: ${err}</p>`);
}

function search() {
    const input = document.getElementById("searchInput").value;
    alert("You searched for: " + input);
}