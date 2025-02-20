document.getElementById("exploreBtn").addEventListener("click", function() {
    alert("Explore the latest articles and tutorials!");
});

const updates = [
    "New Blog: Understanding Django Models!",
    "Added a new tutorial on JavaScript for Beginners!",
    "Upcoming: Learn how to build a secure VPN!"
];

let updateList = "<ul>";
updates.forEach(update => {
    updateList += `<li>${update}</li>`;
});
updateList += "</ul>";

document.getElementById("updates").innerHTML = updateList;
