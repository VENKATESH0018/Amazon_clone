document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const changeColorBtn = document.getElementById("changeColorBtn");
    const colors = ['bg-[#37475A]', 'bg-[#222F3D]', 'bg-[#0F1111]', 'bg-[#E6E6E6]'];
    
    let currentColorIndex = 0;

    changeColorBtn.addEventListener("click", () => {
        // Remove the current background color classes
        colors.forEach(color => {
            container.classList.remove(color);
        });

        // Update the current color index
        currentColorIndex = (currentColorIndex + 1) % colors.length;

        // Add the new background color class
        container.classList.add(colors[currentColorIndex]);

        // Append a new paragraph
        const newParagraph = document.createElement("p");
        newParagraph.textContent = `You changed the color to ${colors[currentColorIndex].replace('bg-', '')}!`;
        newParagraph.className = 'text-sm text-black my-2';
        container.appendChild(newParagraph);
    });
});
