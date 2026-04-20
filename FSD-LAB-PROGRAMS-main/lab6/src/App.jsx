import { useState } from "react"

function App() {

  const [permission, setPermission] = useState(Notification.permission)
  const [message, setMessage] = useState("")

  const requestPermission = async () => {

    if (!("Notification" in window)) {
      alert("Browser does not support notifications")
      return
    }

    const result = await Notification.requestPermission()
    setPermission(result)

    if(result === "granted"){
      setMessage("Notifications enabled successfully")
    }

  }

  const refreshPermission = () => {
    setPermission(Notification.permission)
  }

  const showBrowserNotification = () => {

    if (permission !== "granted") {
      alert("Please enable notifications first")
      return
    }

    new Notification("🔥 Browser Notification", {
      body: "This notification is shown directly from the page",
      icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
    })

  }

  const showPushNotification = async () => {

    if (permission !== "granted") {
      alert("Please enable notifications first")
      return
    }

    const reg = await navigator.serviceWorker.getRegistration()

    if (reg) {

      reg.showNotification("🚀 Push Notification", {
        body: "Push notification sent via service worker",
        icon: "https://cdn-icons-png.flaticon.com/512/1163/1163337.png"
      })

    }

  }

  return (

    <div style={{
      background:"#f4f6f8",
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontFamily:"Arial"
    }}>

      <div style={{
        background:"white",
        padding:"40px",
        width:"420px",
        borderRadius:"10px",
        boxShadow:"0 10px 25px rgba(0,0,0,0.1)",
        textAlign:"center"
      }}>

        <h2>Lab 6: Browser and Push Notifications</h2>

        <p>
          Permission status: <strong>{permission}</strong>
        </p>

        {message && (
          <p style={{color:"#0d6efd"}}>
            {message}
          </p>
        )}

        <button onClick={requestPermission} style={btn}>
          Request Notification Permission
        </button>

        <button onClick={refreshPermission} style={btn}>
          Refresh Permission Status
        </button>

        <button onClick={showBrowserNotification} style={btn}>
          Show Browser Notification
        </button>

        <button onClick={showPushNotification} style={btn}>
          Show Push Notification
        </button>

        <p style={{
          marginTop:"20px",
          fontSize:"14px",
          color:"#555"
        }}>
          Browser notifications are shown directly by the page, while push
          notifications are shown via the service worker.
        </p>

      </div>

    </div>

  )

}

const btn = {
  display:"block",
  width:"100%",
  margin:"12px 0",
  padding:"12px",
  background:"#1e63c6",
  color:"white",
  border:"none",
  borderRadius:"6px",
  fontSize:"15px",
  cursor:"pointer"
}

export default App