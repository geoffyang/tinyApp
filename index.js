document.addEventListener("DOMContentLoaded", function () {

    sites = ["app",
        "blog",
        "shop",
        "notes"
    ]

    let currentDisplay = 0

    const navbar = document.getElementById('navbar')
    let appName = document.getElementById('appName')
    const leftArrow = document.getElementById('left_arrow')
    const rightArrow = document.getElementById('right_arrow')


    for (site in sites) {
        tempDiv = document.createElement('div')
        tempDiv.className = "links";
        tempDiv.innerHTML = sites[site]
        navbar.appendChild(tempDiv)
    }

    rightArrow.addEventListener('click', () => {
        (currentDisplay === sites.length) ? currentDisplay = 0 : currentDisplay++;
        appName.innerHTML = sites[currentDisplay]

    })

    appName.innerHTML = sites[currentDisplay]


})
