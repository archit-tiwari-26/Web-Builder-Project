
function toggleSafeDiwali() {
    const safeDiwaliContent = document.getElementById('safe-diwali-content');
    if (safeDiwaliContent.style.display === "none" || safeDiwaliContent.style.display === "") {
        safeDiwaliContent.style.display = "block";
    } else {
        safeDiwaliContent.style.display = "none";
    }
}

function showSweet() {
    const sweetContainer = document.getElementById('sweet-container');
    sweetContainer.innerHTML = `
        <p>Here's Some!</p>
        <img src="https://www.parsidairyfarm.com/cdn/shop/files/KajuKatli.jpg?v=1699528323" alt="Diwali Sweet" class="sweet-image">
    `;
    sweetContainer.style.display = "block";
    sweetContainer.style.transition = "opacity 1s ease-in-out";
    sweetContainer.style.opacity = 1;
}
