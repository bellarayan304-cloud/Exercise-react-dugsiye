
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [searchName, setSearchName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchName.trim()) {
      setUsers([]);
      return;
    }

    const fetchUser = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.github.com/search/users?q=${searchName}`
        );

        const data = await response.json();

        console.log(data);

        if (!response.ok) {
          setUsers([]);
          return;
        }

        setUsers(data.items);
      } catch (error) {
        console.log(error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [searchName]);

  const handalin = () => {
    setSearchName(name);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter GitHub username"
        />

        <button onClick={handalin}>Search</button>
      </div>

      {loading && <p>Searching...</p>}

      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h2>{user.login}</h2>

              <img
                src={user.avatar_url}
                width="100"
                alt={user.login}
              />

              <br />

              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
              >
                View GitHub Profile
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;