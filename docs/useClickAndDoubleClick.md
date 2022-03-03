# `useClickAndDoubleClick`

React hook that allows registering event handlers for both `click` and `dblclick` events.

## Usage

```jsx
import { useState } from 'react';
import { useClickAndDoubleClick } from 'use-click-and-double-click';

const Demo = () => {
  const [message, setMessage] = useState('not clicked yet');

  const onClickFn = () => setMessage('click');
  const onDblClickFn = () => setMessage('dblClick');
  const [handleClick, handleDoubleClick] = useClickAndDoubleClick(onClickFn, onDblClickFn)

  return (
    <div>
      <div>
        { message }
      </div>

      <button
        onClick={ handleClick }
        onDoubleClick={ handleDoubleClick }
      >
        Click Me
      </button>
    </div>
  );
};
```
