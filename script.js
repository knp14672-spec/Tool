const btn = document.getElementById("generateBtn");
const output = document.getElementById("output");

btn.addEventListener("click", async () => {
  const userInput = document.getElementById("userInput").value.trim();

  if (!userInput) {
    output.innerHTML = "⚠ Please enter your details first!";
    return;
  }

  output.innerHTML = "⏳ Generating resume... Please wait...";

  const apiKey = "YOUR_HUGGINGFACE_API_KEY"; // 👉 અહીં તમારી Hugging Face Key નાખો

  try {
    const response = await fetch("https://api-inference.huggingface.co/models/gpt2", {
      method: "POST",
      headers: {
        Authorization: Bearer ${apiKey},
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: Write a professional resume based on this info:\n${userInput}
      })
    });

    const data = await response.json();

    if (data && data[0] && data[0].generated_text) {
      output.innerHTML = <pre>${data[0].generated_text}</pre>;
    } else {
      output.innerHTML = "⚠ Failed to generate resume. Please check your API key or try again.";
    }
  } catch (error) {
    output.innerHTML = "❌ Error connecting to AI service.";
    console.error(error);
  }
}};
});
const apiKey = 
process.env.HUGGINGFACE_API_KEY;
