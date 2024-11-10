import * as React from "react";

interface ClientSelectorProps {
    selectedClient: number;
    onClientChange: (clientId: number) => void;
}

interface ClientSelectorState { }

const ClientSelector: React.FC<ClientSelectorProps> = ({
    selectedClient,
    onClientChange,
}) => {
    return (
        <div>
            <h2>Client Seç</h2>
            <button
                onClick={() => onClientChange(1)}
                disabled={selectedClient === 1}
            >
                Client 1
            </button>
            <button
                onClick={() => onClientChange(2)}
                disabled={selectedClient === 2}
            >
                Client 2
            </button>
        </div>
    );
};

export default ClientSelector;
