import React from 'react';

const Loading: React.FC = (): JSX.Element => {
    return (
        <div className="bg-[rgba(255,255,255,.5)] w-screen h-screen flex justify-center items-center">
            <img src="/public/assets/images/loading.svg" alt="Loading"/>
        </div>
    );
}

export default Loading;