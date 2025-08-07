// Home.jsx
import React, { useState } from 'react';
import Button from './Button';

const Home = () => {
    const [color, setColor] = useState('olive');
    const colors = [
        'red', 'green', 'blue', 'orange', 'pink', 'yellow', 'gray', 'purple'
    ];

    return (
        <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-between gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
                    {colors.map((c) => (
                        <Button
                            key={c}
                            color={c}
                            onClick={() => setColor(c)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
