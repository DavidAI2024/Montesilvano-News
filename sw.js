self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating.');
});

self.addEventListener('push', (event) => {
    console.log('Push notification received:', event);

    const data = event.data.json();
    const options = {
        body: data.body,
        icon: data.icon
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});
