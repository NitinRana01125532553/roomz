"use client"

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { roomIdAtom, usernameAtom } from "../atoms/atoms";

const Inputs = () => {

    const [Username, setUsername] = useRecoilState(usernameAtom);
    const [roomId, setRoomId] = useRecoilState(roomIdAtom);

    return (
        <div className="flex flex-col gap-6 w-full">
            <Input type="text" placeholder="Username" onChange={(e: any) => setUsername(prev => e.target.value)}/>
            <Input type="text" placeholder="Room Id"  onChange={(e: any) => setRoomId(prev => e.target.value)}/>
        </div>
    );
}

export default Inputs;