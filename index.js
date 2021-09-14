document.addEventListener("DOMContentLoaded", function () {

    sites = {
        0: "app",
        1: "blog",
        2: "shop",
        3: "notes"
    }

    const navbar = document.getElementById('navbar')
    const appName = document.getElementById('appName')


    for (site in sites) {
        tempDiv = document.createElement('div')
        tempDiv.className = "links";
        tempDiv.innerHTML = sites[site]
        navbar.appendChild(tempDiv)
    }

    appName.innerHTML = sites["1"]


})
