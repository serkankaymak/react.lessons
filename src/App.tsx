import React, { useState } from 'react';
import ChatBox from './components/ChatBox';
import ClientSelector from './components/ClientSelector';

interface AppProps { }

interface AppState {
    selectedClient: number;
}

const App: React.FC<AppProps> = () => {
    const [state, setState] = useState<AppState>({
        selectedClient: 1,
    });

    const handleClientChange = (clientId: number) => {
        setState({ selectedClient: clientId });
    };

    return (
        <div className="container">
            <div className="row">   <h1> Chat Uygulaması</h1>  </div>
            <div className="row">

                <div className="col-4">
                    <ClientSelector
                        selectedClient={state.selectedClient}
                        onClientChange={handleClientChange}
                    />
                </div>

                <div className="col-8">
                    <ChatBox clientId={state.selectedClient} />
                </div>

            </div>


        </div>
    );
};

export default App;
