import React from "react";
import Card, { CardVariant } from "./component/Card";
import UserList from "./component/UserList";
import { IUser } from "./types/types";

const App = () => {
  const users: IUser[] = [
    {
      id: 1,
      name: "A",
      email: "a@mail.ru",
      address: { city: "Ac", street: "As", zipcode: "Azip" },
    },
    {
      id: 2,
      name: "B",
      email: "b@mail.ru",
      address: { city: "Bc", street: "Bs", zipcode: "Bzip" },
    },
  ];

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
