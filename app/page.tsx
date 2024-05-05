import Calendar from "@/components/Calendar";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { SignIn, SignUp } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { LogOut } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function Home() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  return (
    <div className="h-screen overflow-y-auto flex flex-col">
      <Header />
      <main className="flex-1 overflow-y-auto">
        <div className="p-10 max-w-[60%] mx-auto w-full">
          <Calendar />
        </div>
      </main>
    </div>
  );
}
