self.addEventListener('install', event => {
    console.log('Service Worker installato');
});

self.addEventListener('activate', event => {
    console.log('Service Worker attivato');
});

self.addEventListener('push', event => {
    const data = event.data.json();
    const options = {
        body: data.body,
        icon: 'path_to_icon.png',
        vibrate: [100, 50, 100],
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});
