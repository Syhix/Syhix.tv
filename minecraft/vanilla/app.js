let table = document.getElementsByTagName("table")[0];

fetch("https://syhix.tv/minecraft/vanilla/versions.php").then(data => data.json()).then(data => {
    data.forEach(element => {
        // if (element.id == "46.0.14") {
        let row = table.insertRow();
        row.insertCell().innerHTML = element.id;
        row.insertCell().innerHTML = element.releaseTarget
        row.insertCell().innerHTML = element.timeRelease
        row.insertCell().innerHTML = `<a href=${element.server}> server</a >`;
        // }
    });

});