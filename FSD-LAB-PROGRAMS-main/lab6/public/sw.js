self.addEventListener("push", event => {

  const data = event.data?.json() || {
    title:"Push Notification",
    body:"This came from service worker"
  }

  event.waitUntil(
    self.registration.showNotification(data.title,{
      body:data.body
    })
  )

})