import React, { useState } from 'react';
import { Avatar, Card, Skeleton } from 'antd';
const { Meta } = Card;
const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        loading={loading}
      >
        <Meta
          avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>
    </>
  );
};
export default App;