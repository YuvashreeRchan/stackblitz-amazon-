document.addEventListener("DOMContentLoaded", function ()
{
    const toggleButton = document.querySelector(".toggle-button");
    const navList = document.querySelector("#top-nav ul");
    toggleButton.addEventListener("click", function () 
    {
    navList.classList.toggle("active");
    });
});
