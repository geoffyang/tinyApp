document.addEventListener("DOMContentLoaded", function () {

    sites = ["app", "blog", "shop", "notes"]

    const navbar = document.getElementById('navbar')

    for (site of sites) {
        tempDiv = document.createElement('div')
        tempDiv.className = "links";
        tempDiv.innerHTML = site
        navbar.appendChild(tempDiv)
    }


})
