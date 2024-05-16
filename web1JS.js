document.addEventListener('DOMContentLoaded', () => {
    fetch('webMockD1.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const servicesList = document.getElementById('services-list');
            data.services.forEach(service => {
                const serviceItem = document.createElement('div');
                serviceItem.classList.add('service-item');
                serviceItem.innerHTML = `
                    <h3>${service.name}</h3>
                    <p>${service.description}</p>
                    <p><strong>Price:</strong> ${service.price}</p>
                `;
                servicesList.appendChild(serviceItem);
            });
        })
        .catch(error => console.error('Error loading services:', error));
});
