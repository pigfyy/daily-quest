"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { useClerk } from "@clerk/nextjs";

export default function Header() {
  const { signOut } = useClerk();

  const handleLogOut = () => {
    signOut();
  };

  return (
    <header className="w-full shadow-md z-10">
      <div className="flex justify-between py-3 px-3 mx-auto items-center lg:px-0 lg:w-2/3">
        <div className="flex gap-2">
          <div>
            <Image
              src="/dailyquest.png"
              alt="Daily Quest"
              width={32}
              height={32}
            />
          </div>
          <span className="text-lg font-black my-auto">DailyQuest</span>
        </div>
        <div className="">
          <Button variant="outline" size="icon" onClick={handleLogOut}>
            <LogOut />
          </Button>
        </div>
      </div>
    </header>
  );
}
