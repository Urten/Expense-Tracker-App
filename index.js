const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    };

    console.log("Sending data:", formData);

    try {
        const response = await axios.post("http://localhost:3000/users/signup", formData);
        console.log("Response:", response.data);
    } catch (err) {
        console.error("Error:", err);
    }
});
