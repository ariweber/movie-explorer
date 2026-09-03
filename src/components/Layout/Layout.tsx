import { Outlet } from "react-router";
import Header from "../Header/Header";
import "./Layout.css";
export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
