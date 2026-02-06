export interface Integration {
  id: string;
  name: string;
  status: 'connected' | 'disconnected' | 'error';
  lastSynced: string | null // iso timestamp or null if never synced
}

const statusColors: Record<Integration['status'], string> = {
  connected: '#22c55e',
  disconnected: '#9ca3af',
  error: '#ef4444'
}

function IntegrationCard({ name, status, lastSynced }: Integration) {
  const monthLookup = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = lastSynced ? new Date(lastSynced) : null;
  const year = date?.getFullYear();
  const month = date ? date?.getMonth() + 1 : null;
  const day = date?.getDay();
  const formattedDate = `${month ? monthLookup[month] : null} ${day}, ${year}`;
  return (
    <div className="int-card">
      <p>Name: {name}</p>
      <p>
        Status:
        <span
          style={{
            display: 'inline-block',
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: statusColors[status],
            marginRight: 8,
            marginLeft: 8
          }} />
        {status}
      </p>
      <p>Last Synced: {lastSynced ? formattedDate : "N/A"}</p>
    </div>
  )
}

export default IntegrationCard