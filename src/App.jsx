import React, { useEffect, useState } from "react";
import "./App.css";
import Stack from "@mui/material/Stack";
import { Box, Button } from "@mui/material";

const App = () => {
  const [count, setCount] = useState(0);
  const [miliseconds, setMilliseconds] = useState(0);
  const [lastCheckTime, setLastCheckTime] = useState(null);

  const handleClick = (increment) => {
    let currentTime = new Date().getTime();
    if (lastCheckTime === null) {
      setMilliseconds(0);
    } else {
      let timeDifference = currentTime - lastCheckTime;
      setMilliseconds(timeDifference);
    }
    setLastCheckTime(currentTime);

    setCount((preCount) =>
      increment ? preCount + 1 : Math.max(0, preCount - 1)
    );
  };

  //? this code only for changing state of increment and decrement
  // const handleIncrement = () => {
  //   try {
  //     setCount(count + 1);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleDecrement = () => {
  //   if (count === 0) {
  //     setCount(0);
  //   } else {
  //     setCount(count - 1);
  //   }
  // };

  const handleRefresh = () => {
    setCount(0);
    setMilliseconds(0);
    setLastCheckTime(null);
  };

  useEffect(() => {
    handleClick();
  }, []);
  return (
    <div className="app">
      <div className="container">
        <div
          className="total_amount_card"
          style={{
            backgroundImage: `linear-gradient(to right,  rgba(253, 230, 90, 100%), rgba(204, 254, 87, 100%))`,
          }}
        >
          <div className="right">
            <svg
              style={{ cursor: "pointer" }}
              onClick={handleRefresh}
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="17"
              height="17"
            >
              <path d="M21.962,12.875A10.03,10.03,0,1,1,19.122,5H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.985,11.985,0,1,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1h0A.982.982,0,0,0,21.962,12.875Z" />
            </svg>
          </div>
          <div className="card_text">
            <h3 className="total_amount_heading">{count}</h3>
          </div>
        </div>

        <form>
          <div className="button_collection">
            <Stack spacing={2} direction="row">
              <Button
                variant="outlined"
                className="btn_one"
                color="gray"
                onClick={() => {
                  handleClick(true);
                }}
              >
                +
              </Button>
              <Button
                variant="outlined"
                className="btn_two"
                color="gray"
                onClick={() => {
                  handleClick(false);
                }}
              >
                -
              </Button>
            </Stack>
          </div>
          <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
            {miliseconds} ms
          </Box>
        </form>
      </div>
    </div>
  );
};

export default App;
