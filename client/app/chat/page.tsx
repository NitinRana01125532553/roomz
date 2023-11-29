import ChatInputs from "../components/chat-inputs";
import ChatMessages from "../components/chat-messages";

const Chat = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="w-full p-6 pt-4 pb-4 bg-black text-white font-bold text-xl">
                Roomz
            </div>
            <div className="flex-1">
                <ChatMessages />
            </div>
            <div className="p-4">
                <ChatInputs />
            </div>
        </div>
    ); 
}

export default Chat;