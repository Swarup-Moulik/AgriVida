document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".toggle-icon"); // Select all elements with the class "toggle-icon"

    icons.forEach(icon => {
        icon.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent the link from reloading the page

            // Toggle between the two classes
            if (icon.classList.contains("ri-shopping-cart-2-line")) {
                icon.classList.remove("ri-shopping-cart-2-line");
                icon.classList.add("ri-check-line");
            } else {
                icon.classList.remove("ri-check-line");
                icon.classList.add("ri-shopping-cart-2-line");
            }
        });
    });
});
