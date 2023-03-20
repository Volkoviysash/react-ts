import axios from "axios";
import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./component/Card";
import UserList from "./component/UserList";
import { IUser } from "./types/types";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <Card width="200px" height="200px" variant={CardVariant.outlined}>
        <button>Hey!</button>
      </Card>
      <UserList users={users}></UserList>
    </div>
  );
};

export default App;
