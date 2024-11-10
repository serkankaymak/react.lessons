import * as React from "react";


interface ChatBoxProps {
    clientId: number;
}

interface ChatBoxState { }

const ChatBox: React.FC<ChatBoxProps> = ({ clientId }) => {
    const messages: { [key: number]: string[] } = {
        1: ['Client 1: Merhaba!', 'Client 1: Nasılsınız?'],
        2: ['Client 2: Selam!', 'Client 2: Ne var ne yok?'],
    };

    return (
        <div>
            <h2>ChatBox - Client {clientId}</h2>
            <ul>
                {messages[clientId].map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </div>
    );
};

export default ChatBox;
