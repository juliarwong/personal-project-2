const myApp = {
    init() {
        // Define the API endpoint URL
        const apiUrl = "https://api.openbrewerydb.org/v1/breweries";

        // Fetch data from the API
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            // Display the data on the page
            const dataContainer = document.getElementById("dataContainer");
            data.forEach((item) => {
            const itemElement = document.createElement("div");
            itemElement.innerHTML = `<h2>${item.name}</h2><p>${item.street}, ${item.city}, ${item.state}</p>`;
            dataContainer.appendChild(itemElement);
            });
        })
        .catch((error) => console.error(error));
    },
};

// Initialize the app
myApp.init();
