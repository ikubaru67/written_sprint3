document.getElementById("card").addEventListener("click", () => {
  const shortText = document.getElementById("short-text");
  const fullText = document.getElementById("full-text");
  const button = document.getElementById("toggle-button");
  const resultContainer = document.getElementById("result");

  if (fullText.style.display === "none") {
    fullText.style.display = "block";
    shortText.style.display = "none";
    button.textContent = "Read Less";

    // Operasi filter, map, dan reduce
    const words = [
      "apple",
      "banana",
      "grape",
      "mango",
      "pineapple",
      "orange",
      "kiwi",
      "strawberry",
      "blueberry",
      "watermelon",
    ];

    const longWords = words.filter((word) => word.length > 5);
    const uppercasedWords = longWords.map((word) => word.toUpperCase());
    const resultString = uppercasedWords.reduce(
      (acc, word) => acc + ", " + word
    );

    // Buat card baru di dalam result
    resultContainer.innerHTML = `
        <div id="result-card">
          <p>Nama-nama buah yang jumlah hurufnya melebihi 5: ${resultString}</p>
        </div>
      `;
  } else {
    fullText.style.display = "none";
    shortText.style.display = "block";
    button.textContent = "Read More";

    // Hapus hasil ketika card ditutup
    resultContainer.innerHTML = "";
  }
});
