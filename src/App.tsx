import React from "react";
import Card, { CardVariant } from "./component/Card";

const App = () => {
  return (
    <div>
      <Card width="200px" height="200px" variant={CardVariant.outlined}>
        <button>Hey!</button>
      </Card>
    </div>
  );
};

export default App;
