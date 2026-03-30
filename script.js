function showPage(pageId) {
    const pages = document.querySelectorAll('.page');

    pages.forEach(page => {
        page.classList.add('hidden');
    });

    document.getElementById(pageId).classList.remove('hidden');
}

function search() {
    const input = document.getElementById("searchInput").value;
    alert("You searched for: " + input);
}