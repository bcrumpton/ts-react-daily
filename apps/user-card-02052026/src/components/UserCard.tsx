export interface User {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar?: string;
  isOnline: boolean;
}

function UserCard({ name, role, email, avatar, isOnline }: User) {
  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
  }

  const splitName = name.split(' ');
  return (
    <div className="user-card">
      <div className="user-img">
        <img className="avatar" src={avatar ? avatar : `https://ui-avatars.com/api/?name=${splitName[0]}+${splitName[1]}&size=150&background=6366f1&color=fff`} />
      </div>
      <div className="user-content">
        <p>Name: {name}</p>
        <p>Role: {role}</p>
        <p>
          Email:
          <a
            href={`mailto:${email}`}>
            {email}
          </a>
          <button className="copy-btn" onClick={() => { copy(email) }}>
            <svg
              className="copy-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80"
              data-name="Layer 1">
              <path d="M68.5 0H27.68c-6.34 0-11.5 5.16-11.5 11.5v3.7H11.5C5.16 15.2 0 20.36 0 26.7v40.82c0 6.34 5.16 11.5 11.5 11.5h40.82c6.34 0 11.5-5.16 11.5-11.5v-3.7h4.68c6.34 0 11.5-5.16 11.5-11.5V11.5C80 5.16 74.84 0 68.5 0Zm-7.68 67.52c0 4.69-3.81 8.5-8.5 8.5H11.5c-4.69 0-8.5-3.81-8.5-8.5V26.7c0-4.69 3.81-8.5 8.5-8.5h40.82c4.69 0 8.5 3.81 8.5 8.5zM77 52.32c0 4.69-3.81 8.5-8.5 8.5h-4.68V26.7c0-6.34-5.16-11.5-11.5-11.5H19.18v-3.7c0-4.69 3.81-8.5 8.5-8.5H68.5c4.69 0 8.5 3.81 8.5 8.5z" />
              <path d="M46.93 30.41H16.89c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h30.04c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5zM46.93 45.61H16.89c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h30.04c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5zM46.93 60.82H16.89c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h30.04c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
            </svg>
          </button>
        </p>
        <p>Online: <span style={{
          display: "inline-block",
          width: 10,
          height: 10,
          backgroundColor: isOnline ? "#3aff44" : "#808080",
          borderRadius: "50%",
        }} /></p>
      </div>
    </div>
  )
}

export default UserCard