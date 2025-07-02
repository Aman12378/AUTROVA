const config = {
    location: {
        lat: 28.5525, // Dadri, Uttar Pradesh latitude
        lng: 77.5550, // Dadri, Uttar Pradesh longitude
        address: "Dadri, Gautam Buddha Nagar, Uttar Pradesh, India", // Updated address
        phone: "+1 (555) 123-4567",
        email: "info@AUTORVA.com"
    }
};

// Function to update location
function updateLocation(lat, lng, address) {
    config.location.lat = lat;
    config.location.lng = lng;
    config.location.address = address;
    
    // Update all location elements on the page
    updateLocationElements();
}

// Function to update location elements
function updateLocationElements() {
    const addressElements = document.querySelectorAll('.location-address');
    const mapElements = document.querySelectorAll('.location-map');
    
    addressElements.forEach(element => {
        element.textContent = config.location.address;
    });
    
    mapElements.forEach(element => {
        const iframe = element.querySelector('iframe');
        if (iframe) {
            // Using OpenStreetMap embed which doesn't require an API key
            iframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=${config.location.lng-0.01},${config.location.lat-0.01},${config.location.lng+0.01},${config.location.lat+0.01}&layer=mapnik&marker=${config.location.lat},${config.location.lng}`;
        }
    });
}

// Export the configuration
window.config = config;
window.updateLocation = updateLocation; 
 