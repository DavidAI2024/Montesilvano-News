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
        icon: data.icon,
        tag: data.tag,
        actions: data.actions
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

self.addEventListener('notificationclick', event => {
    const action = event.action;

    if (action === 'complete') {
        console.log('Promemoria completato');
    } else if (action === 'snooze') {
        console.log('Promemoria rimandato');
    }

    event.notification.close();
});
