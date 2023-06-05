import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";

function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        height: "100%",
        padding: "10px 10px",
      }}
    >
      <CircularProgress
        variant="determinate"
        color={props.color}
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        color={props.color}
        sx={{
          animationDuration: "550ms",
          position: "absolute",
          left: 10,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={40}
        thickness={4}
        value={props.progress}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          className="percentage"
        >{`${props.progress}`}</Typography>
      </Box>
    </Box>
  );
}

export default CircularProgressWithLabel;
