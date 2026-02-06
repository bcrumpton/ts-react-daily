import { useState, useEffect } from 'react'
import './App.css'
import IntegrationCard, { type Integration } from "./components/Integration"

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [igData, setIgData] = useState<Integration[]>([])

  useEffect(() => {
    const simulateFetch = () => {
      setTimeout(() => {
        setIgData([
          {
            id: "1",
            name: "Klaviyo",
            status: "connected",
            lastSynced: "2026-02-04T23:47:34.346Z"
          },
          {
            id: "2",
            name: "Mailchimp",
            status: "disconnected",
            lastSynced: "2026-02-04T23:47:34.346Z"
          },
          {
            id: "3",
            name: "Shopify",
            status: "connected",
            lastSynced: "2026-02-04T23:47:34.346Z"
          },
          {
            id: "4",
            name: "Drizzle",
            status: "error",
            lastSynced: null
          }
        ])
        setLoading(false);
      }, 2000);
    }

    simulateFetch();
  }, []);


  return (
    <>
      <div className="container">
        <h3>Integrations</h3>
        <div className="int-grid">
          {loading && <p>Loading...</p>}
          {!loading && igData.map(item => {
            return <IntegrationCard key={item.id} id={item.id} name={item.name} status={item.status} lastSynced={item.lastSynced} />
          })}
        </div>
      </div>
    </>
  )
}

export default App
