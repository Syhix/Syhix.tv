let table = document.getElementsByTagName("table")[0];

fetch("https://syhix.tv/minecraft/forge/versions.php").then(data => data.json()).then(data => {
    data.forEach(element => {
        // if (element.id == "46.0.14") {
        let row = table.insertRow();
        row.insertCell().innerHTML = element.id;
        row.insertCell().innerHTML = element.version
        row.insertCell().innerHTML = element.dateTime
        row.insertCell().innerHTML = `<a href=${element.url}> Installer</a >`;
        // }
    });

});