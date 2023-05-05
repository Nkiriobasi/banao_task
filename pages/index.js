import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import TabView from "../components/TabView";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />

      <main className='pt-[72px]'>
        <Header />
        <TabView />
      </main>
    </div>
  )
}
