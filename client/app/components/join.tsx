import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Inputs from "./inputs";
import Link from "next/link";
import JoinButton from "./joinButton";

const Join = () =>  {
    return (
        <div className="flex h-screen items-center justify-center p-8"> 
            <div className="w-[400px] flex flex-col items-center justify-center gap-6">
                <h1 className="text-4xl text-center font-bold font-sans pb-6">Join the Chat Room</h1>
                <Inputs />
                <JoinButton />
            </div>
        </div>
    );
}

export default Join;