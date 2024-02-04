import React from "react";
import Link from 'next/link'
import { Home, Settings, Users, CreditCard, Info, Search, Truck, Archive } from 'lucide-react';
import avatar from "../assets/phavatar.jpg";

const listOptionClass = "px-2 w-full h-[10%] bg-lightborder rounded-[0.4vh] text-[2vh] flex flex-row items-center font-semibold hover:text-darklighterforeground transition duration-300"

export default function Sidebar(props) {
  var name = "smolf";
  var rank = "Administrator";
  return (
    <main className="h-full bg-lightback w-[32vh] border-r-[0.2vh] border-lightborder">
      <div className="w-full h-1/6">
        <div className="h-full flex flex-row items-center justify-center ml-[3vh]">
            <img src={avatar.src} className="w-[4.5vh] h-[4.5vh] rounded-[20%] mr-3" />
            <div className="mr-6 w-[22vh]">
                <div className="text-[2vh] w-full">Velkommen, <a className="dark:text-darklighterforeground font-bold">{name}</a></div>
                <div className="text-[1.5vh] leading-[1vh] mb-[0.75vh]">{rank}</div>
            </div>
        </div>
      </div>
      <div id="pageSelector" className="w-full h-4/6 flex flex-col px-[3vh] gap-[1.3vh]">
        <Link href="/pages/home" className={listOptionClass}><Home className="w-[3vh] mr-[1vh]"/><div>Home</div></Link>
        <Link href="/pages/personregister" className={listOptionClass}><Archive className="w-[3vh] mr-[1vh]"/><div>Person Register</div></Link>
        <Link href="/pages/cardatabase" className={listOptionClass}><Truck className="w-[3vh] mr-[1vh]"/><div>Køretøjs Database</div></Link>
        <Link href="/pages/warrents" className={listOptionClass}><Search className="w-[3vh] mr-[1vh]"/><div>Efterlysninger</div></Link>
        <Link href="/pages/board" className={listOptionClass}><Info className="w-[3vh] mr-[1vh]"/><div>Opslagstavle</div></Link>
        <Link href="/pages/fines" className={listOptionClass}><CreditCard className="w-[3vh] mr-[1vh]"/><div>Bødetakster</div></Link>
        <Link href="/pages/employees" className={listOptionClass}><Users className="w-[3vh] mr-[1vh]"/><div>Ansatte</div></Link>
        <Link href="/pages/settings" className={listOptionClass}><Settings className="w-[3vh] mr-[1vh]"/><div>Indstillinger</div></Link>
      </div>
      <div className="w-full h-1/6 px-[3vh] py-[3vh]">
        <div className="w-full h-full bg-darkerror hover:bg-lighterror hover:scale-[101%] active:scale-[97%] transition duration-150 text-white rounded-[0.4vh] flex items-center justify-center font-semibold text-[2vh]"><div>Panik Knap!</div></div>
      </div>
    </main>
  );
}