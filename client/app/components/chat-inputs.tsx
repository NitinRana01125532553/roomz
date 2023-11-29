"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import socket from "./socket-connection";
import { useRecoilState, useRecoilValue } from "recoil";
import { messagesArray, roomIdAtom, usernameAtom } from "../atoms/atoms";

const ChatInputs = () => {

    const [messageContent, setMessageContent] = useState("");

    const username = useRecoilValue(usernameAtom);

    const roomId = useRecoilValue(roomIdAtom);

    const [messages, setMessages] = useRecoilState(messagesArray);

    const messageInfo = {
        username: username,
        roomId: roomId,
        messageContent: messageContent,
    }

    const sendMessage = async (e: any) => {
        await socket.emit("message", messageInfo);
        setMessages(prev => [...prev, messageInfo]);
        setMessageContent(prev => "");
    }

    return (
        <div className="flex flex-row gap-4">
            <Input 
                value={messageContent}
                onChange={(e: any) => {
                    setMessageContent(prev => e.target.value);
                }} 
                placeholder="Enter your Message...."
            />

            <Button type="submit" onClick={sendMessage}>Send</Button>
        </div>
    );   
}

export default ChatInputs;