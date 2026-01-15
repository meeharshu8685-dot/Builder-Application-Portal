import * as React from 'react';
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

interface LottieIconProps {
    url: string;
    className?: string;
    loop?: boolean;
}

const LottieIcon: React.FC<LottieIconProps> = ({ url, className, loop = true }) => {
    const [animationData, setAnimationData] = useState<any>(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAnimationData(data))
            .catch((err) => console.error('Error loading Lottie:', err));
    }, [url]);

    if (!animationData) return <div className={className} />;

    return (
        <Lottie
            animationData={animationData}
            loop={loop}
            className={className}
        />
    );
};

export default LottieIcon;
