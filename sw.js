self.addEventListener('push', function(e) {
    var options = {
      body: 'Channelier | Notification Testing!',
      icon: 'https://channelier.com/image/data/logo.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      },
      actions: [
        {
            action: 'visit', title: 'Visit our website',
            icon: 'images/checkmark.png'
        },
        {   action: 'close', title: 'Close',
            icon: 'images/xmark.png'
        },
      ]
    };
    e.waitUntil(
      self.registration.showNotification('Welcome to Channelier!', options)
    );
  });