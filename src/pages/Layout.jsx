import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="app-layout">
        <Header />
        <main className="app-content">
            <Outlet />
        </main>
        <Footer />
    </div>
  );
}