import * as React from 'react';
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { useInView } from 'react-intersection-observer';

interface LottieIconProps {
    url: string;
    className?: string;
    loop?: boolean;
    fallbackIcon?: string;
}

const LottieIcon: React.FC<LottieIconProps> = ({ url, className, loop = true, fallbackIcon }) => {
    const [animationData, setAnimationData] = useState<any>(null);
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    const [error, setError] = useState(false);

    useEffect(() => {
        setError(false);
        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((data) => setAnimationData(data))
            .catch((err) => {
                console.error(`Error loading Lottie from ${url}:`, err);
                setError(true);
            });
    }, [url]);

    if (error && fallbackIcon) {
        return (
            <div className={`${className} flex items-center justify-center text-4xl sm:text-5xl opacity-80 grayscale`}>
                {fallbackIcon}
            </div>
        );
    }

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
