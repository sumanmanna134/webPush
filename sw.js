self.addEventListener('push', ()=> {
    self.registration.sendNotification('test_message', {});
});
