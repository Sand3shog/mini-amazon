import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const Test = () => {
  let [count, setCount] = useState(1);

  //use Effect
  // useEffect(function)

  // ? react component: mounting, updating and unmounting
  // useEffect(function, [])  //dependency array
  // useEffect(function, [a, b, c])  //dependency array with values
  return (
    <Box>
        <Typography variant='h1'>{count}</Typography>

        <Button
            variant='contained'
            color='primary'
            onClick={() => {
                let newCount = count + 1;
            setCount(newCount);
        }}
        >
        increase count
        </Button>

        <Button
            variant='contained'
            color="warning"
            onClick={() => {
                let newCount = count - 1;
            setCount(newCount);
        }}
        >
        Decrease count
        </Button>
    </Box>
    )

}

export default Test;