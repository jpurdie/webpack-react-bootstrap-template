import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function LikeButton() {
  const [count, setCount] = useState(0);

  // // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`;
  // });

  return (
    <Button variant="primary" onClick={() => setCount(count + 1)}>
      Click me {count}
    </Button>
  );
}

export default LikeButton;
