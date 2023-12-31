import React from "react";
import { useQuery } from "@apollo/client";
import ClickToWin from "./components/ClickToWin";
import { GET_CURRENT_GAME } from "./querys/querys";
// import LastUser from "./components/LastUser";
import { Grid } from "@mui/material";
import "./App.css";
import { useCountdown } from "./hooks/useCountdown";
import { DateTime } from "luxon";

// const ShowUsers = (): React.ReactNode => {
//   const { loading, error, data } = useQuery(GET_USERS);

//   if (loading) return <p>Loading...</p>;
//   if (error != null) return <p>Error : {error.message}</p>;

//   return (
//     <ul>
//       {data.getAllUsers.map((user: UserI, index: number) => (
//         <li key={index}>{user.name} {user.surname}</li>
//       ))}
//     </ul>
//   );
// };

const Counter = ({ targetDate }: any): React.ReactNode => {
  const { seconds, miliseconds } = useCountdown(targetDate);
  const currentDate = DateTime.now().setZone("UTC").toMillis();

  if (currentDate >= targetDate) {
    // Ganador -> Comenzar nuevo juego
    return <div>expirado</div>;
  } else {
    return (
      <div>
        {seconds} : {miliseconds}
      </div>
    );
  }
};

const App = (): React.ReactNode => {
  const { loading, error, data } = useQuery(GET_CURRENT_GAME);

  if (loading) return <p>Loading...</p>;
  if (error != null) return <p>Error : {error.message}</p>;

  return (
    <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center" sx={{ minHeight: "100vh" }}>
      <Grid item>
        Game Id {data.getCurrentGame.id} / Creado poner fecha
      </Grid>
      <Grid item>
        Gana {data.getCurrentGame.amount} pesos!
      </Grid>
      <Grid item>
        <Counter targetDate={Number(data.getCurrentGame.targetTime)} />
      </Grid>
      <Grid item>
      Total de clicks: {data.getCurrentGame.totalClicks ?? 0}
      </Grid>
      <Grid item>
      <ClickToWin gameId={data.getCurrentGame.id}/>
      </Grid>
    </Grid>
  );
};

export default App;
