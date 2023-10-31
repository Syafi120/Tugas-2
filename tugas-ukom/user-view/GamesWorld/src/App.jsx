import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/dashboard/layouts/Index";
import GameListLayout from "./pages/dashboard/layouts/GameListLayout.jsx";
import Home from "./pages/home/Home";
// import Users from "./pages/dashboard/users/Users";
import UserCommentLayout from "./pages/dashboard/layouts/UserCommentLayout";
import AddGame from "./pages/dashboard/post/AddGame";
import EditGame from "./pages/dashboard/post/EditGame";
import Login from "./pages/login/Login"
import Test from "./pages/home/Test";

// GAME DETAIL

import Detail from './pages/home/Details/Detail';
import Detail1 from './pages/home/Details/Detail1';
import Detail2 from './pages/home/Details/Detail2';
import Detail5 from './pages/home/Details/Detail5';
import Detail6 from './pages/home/Details/Detail6';
import Detail9 from './pages/home/Details/Detail9';
import Detail10 from './pages/home/Details/Detail10';
import Detail11 from './pages/home/Details/Detail11';

//      CATEGORIES

import Fps from "./pages/home/Categori/FPS/Fps";
import Mmorpg from "./pages/home/Categori/MMORPG/Mmorpg";
import Race from "./pages/home/Categori/RACE/Race";
import Batlle from "./pages/home/Categori/BattleRoyale/Battle";
import Horror from "./pages/home/Categori/HORROR/Horror";
import Farm from "./pages/home/Categori/FarmSim/Farm";
import Adventure from "./pages/home/Categori/ADVENTURE/Adventure";
import Casual from "./pages/home/Categori/CASUAL/Casual";

function App() {



  return (
    <Router>
      <Routes>

        {/* LOGIN */}

        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin/homepage" element={<Index />}></Route>
        <Route path="/admin" element={<Login />}></Route>

        {/* ADMIN */}
      
        <Route path="/admin/addgame" element={<AddGame />}></Route>
        <Route path="/admin/editgame" element={<EditGame />}></Route>
        <Route path="/gamelist" element={<GameListLayout />}></Route>
        <Route path="/usercomment" element={<UserCommentLayout />}></Route>

        {/* Home */}

        <Route path="/" element={<Test />}></Route>

        {/* GAME DETAIL */}

        <Route path="/apexlegend" element={<Detail />}></Route>
        <Route path="/codmw3" element={<Detail1 />}></Route>
        <Route path="/cs2" element={<Detail2 />}></Route>
        <Route path="/lostsaga" element={<Detail5 />}></Route>
        <Route path="/pointblank" element={<Detail6 />}></Route>
        <Route path="/dreadout" element={<Detail9 />}></Route>
        <Route path="/pamali" element={<Detail10 />}></Route>
        <Route path="/coralisland" element={<Detail11 />}></Route>

        {/* CATEGORI */}

        <Route path="/Categori/fps" element={<Fps />}></Route>
        <Route path="/Categori/mmorpg" element={<Mmorpg />}></Route>
        <Route path="/Categori/race" element={<Race />}></Route>
        <Route path="/Categori/battleroyale" element={<Batlle />}></Route>
        <Route path="/Categori/horror" element={<Horror />}></Route>
        <Route path="/Categori/farm" element={<Farm />}></Route>
        <Route path="/Categori/adventure" element={<Adventure />}></Route>
        <Route path="/Categori/casual" element={<Casual />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
