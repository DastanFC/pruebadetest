self.addEventListener('push', function(evento) {
  const datos = evento.data ? evento.data.json() : { title: 'Test', body: 'Notificación' };
  
  const opciones = {
    body: datos.body || 'Tienes una notificación nueva',
    icon: '/icon-192.png',
    vibrate: [200, 100, 200]
  };
  
  evento.waitUntil(
    self.registration.showNotification(datos.title || '🔔 Recomendador', opciones)
//                                                               
  );
});

self.addEventListener('notificationclick', function(evento) {
  evento.notification.close();
});

self.addEventListener('install', function() {
  console.log('Service Worker instalado');
  self.skipWaiting();
});
