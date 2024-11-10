import React, { useState } from 'react';

interface TemplateComponentProps {
    title: string;
    initialCount: number;
}

interface TemplateComponentState {
    count: number;
}

const TemplateComponent: React.FC<TemplateComponentProps> = React.memo(
    ({ title, initialCount }) => {
        const [state, setState] = useState<TemplateComponentState>({
            count: initialCount,
        });

        const incrementCount = () => {
            setState((prevState) => ({
                ...prevState,
                count: prevState.count + 1,
            }));
        };

        return (
            <div>
                <h1>{title}</h1>
                <p>Sayacı: {state.count}</p>
                <button onClick={incrementCount}>Artır</button>
            </div>
        );
    }
);

export default TemplateComponent;
