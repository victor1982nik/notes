import "./App.css";
import { AppBar } from "./components/AppBar/AppBar";
import { SideBar } from "./components/SideBar/SideBar";
import { WorkSpace } from "./components/WorkSpace/WorkSpace";
import { getFields } from "./components/api/quintaAPI";
const notices = [
  {
    id: "1",
    title: "title 1",
    text: "text notice 1",
    createdAt: new Date().toString(),
  },
  {
    id: "2",
    title: "title 2",
    text: "text notice 2",
    createdAt: Date.now().toString(),
  },
  {
    id: "3",
    title: "title 3",
    text: "text notice 3",
    createdAt: Date.now().toString(),
  },
];

function App() {
  getFields().then(console.log);

  return (
    <div className="App">
      <AppBar isNoticeSelected={null} />
      <main className="main">
        <SideBar notices={notices} />
        <WorkSpace />
      </main>
    </div>
  );
}

export default App;
