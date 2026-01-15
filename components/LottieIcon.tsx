import * as React from 'react';
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { useInView } from 'react-intersection-observer';

interface LottieIconProps {
    url: string;
    className?: string;
    loop?: boolean;
}

const LottieIcon: React.FC<LottieIconProps> = ({ url, className, loop = true }) => {
    const [animationData, setAnimationData] = useState<any>(null);
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAnimationData(data))
            .catch((err) => console.error('Error loading Lottie:', err));
    }, [url]);

    if (!animationData) return <div ref={ref} className={className} />;

    return (
        <div ref={ref} className={className}>
            <Lottie
                animationData={animationData}
                loop={loop}
                autoplay={inView}
            />
        </div>
    );
};

export default LottieIcon;
