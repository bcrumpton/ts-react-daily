import { useState, useEffect } from 'react'
import './App.css'
import UserCard, { type User } from './components/UserCard'

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const simFetch = () => {
      setTimeout(() => {
        setUsers([{
          id: "1",
          name: "Sarah Chen",
          role: "Senior Frontend Developer",
          email: "sarah.chen@company.com",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
          isOnline: true
        },
        {
          id: "2",
          name: "Marcus Johnson",
          role: "Product Designer",
          email: "marcus.johnson@company.com",
          isOnline: false
        },
        {
          id: "3",
          name: "Elena Rodriguez",
          role: "DevOps Engineer",
          email: "elena.rodriguez@company.com",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
          isOnline: true
        },
        {
          id: "4",
          name: "David Kim",
          role: "Backend Developer",
          email: "david.kim@company.com",
          isOnline: true
        },
        {
          id: "5",
          name: "Priya Patel",
          role: "UX Researcher",
          email: "priya.patel@company.com",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
          isOnline: false
        },
        {
          id: "6",
          name: "Alex Thompson",
          role: "Engineering Manager",
          email: "alex.thompson@company.com",
          isOnline: true
        }])
        console.log('set users ran');
        setLoading(false);
      }, 2000);
    }

    simFetch();
  }, []);

  return (
    <>
      <div className='container'>
        <h1>TS React Dailies</h1>
        {loading && <p>Loading...</p>}
        <div className='user-grid'>
          {!loading && users.map(user => {
            return <UserCard key={user.id} id={user.id} email={user.email} name={user.name} avatar={user.avatar} role={user.role} isOnline={user.isOnline} />
          })}
        </div>
      </div>
    </>
  )
}

export default App
