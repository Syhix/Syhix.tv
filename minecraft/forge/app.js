let table = document.getElementsByTagName("table")[0];

function calculDate(date) {
    let croppedDate = date.split(" ")[0].split("-");
    let currentDate = {
        "jour": new Date().getDate(),
        "mois": new Date().getMonth() + 1,
        "année": new Date().getFullYear(),
    }
    let updateDate = {
        "jour": croppedDate[2],
        "mois": croppedDate[1],
        "année": croppedDate[0],
    }
    let diff = {
        "jour": currentDate.jour - updateDate.jour,
        "mois": currentDate.mois - updateDate.mois,
        "année": currentDate.année - updateDate.année,
    }
    let updateInterval = ""
    if (diff.jour < 0) {
        diff.mois -= 1
        diff.jour += 30
    }
    if (diff.mois < 0) {
        diff.année -= 1
        diff.mois += 12
    }
    if (diff.année > 0) {
        updateInterval += diff.année + " year(s) ago"
    }
    else if (diff.mois > 0) {
        updateInterval += diff.mois + " month(s) ago"
    }
    else if (diff.jour > 0) {
        updateInterval += diff.jour + " day(s) ago"
    }
    else if (updateInterval == "") {
        updateInterval = "Today"
    }
    return updateInterval
}

let inputSearch = document.getElementsByTagName("input")[0];
inputSearch.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        table.innerHTML =
            "<tr>    <th> id</th>    <th>version</th>    <th>dateTime</th>    <th>url</th></tr > "
        searchID(inputSearch.value)
    }
});

function searchID(versionInput) {
    fetch("https://syhix.tv/minecraft/forge/versions.php").then(data => data.json()).then(data => {
        if (versionInput) {
            data.forEach(element => {
                if (element.id.includes(versionInput)) {
                    let row = table.insertRow();
                    row.insertCell().innerHTML = element.id;
                    row.insertCell().innerHTML = element.version;
                    row.insertCell().innerHTML =
                        `<div class='tooltip'>${element.dateTime.toString().split(" ")[0]}<span class='tooltiptext'>${calculDate(element.dateTime)}</span></div>`;

                    row.insertCell().innerHTML = `<a href=${element.url}> Link</a >`;
                }
            });
        }
        else {
            data.forEach(element => {
                let row = table.insertRow();
                row.insertCell().innerHTML = element.id;
                row.insertCell().innerHTML = element.version;
                row.insertCell().innerHTML =
                    `<div class='tooltip'>${element.dateTime.toString().split(" ")[0]}<span class='tooltiptext'>${calculDate(element.dateTime)}</span></div>`;

                row.insertCell().innerHTML = `<a href=${element.url}> Link</a >`;
                // row.style.borderColor = randomColor()
            })
        }
    });
}

searchID()