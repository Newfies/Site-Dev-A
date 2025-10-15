document.addEventListener("DOMContentLoaded", () => {
  const fileBox = document.getElementById("filebox");
  const fileInput = document.getElementById("fileInput");

  // 🖱️ Click → open file picker
  fileBox.addEventListener("click", () => {
    fileInput.click();
  });

  // 📁 File chosen manually
  fileInput.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      fileBox.innerHTML = `
        <p class="text-2xl">Selected File:</p>
        <p class="text-lg mt-2 text-gray-300">${file.name}</p>
      `;
    }
  });

  // 🎯 Dragging a file over
  fileBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    fileBox.classList.add("bg-[#2a2a2a]", "border-[#fff]");
  });

  // ❌ Drag leaves area
  fileBox.addEventListener("dragleave", () => {
    fileBox.classList.remove("bg-[#2a2a2a]", "border-[#fff]");
  });

  // 📥 File dropped
  fileBox.addEventListener("drop", (e) => {
    e.preventDefault();
    fileBox.classList.remove("bg-[#2a2a2a]", "border-[#fff]");

    const file = e.dataTransfer.files[0];
    if (file) {
      fileBox.innerHTML = `
        <p class="text-2xl">Dropped File:</p>
        <p class="text-lg mt-2 text-gray-300">${file.name}</p>
      `;
    }
  });
});
