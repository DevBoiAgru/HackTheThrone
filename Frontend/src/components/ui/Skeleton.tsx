import React from 'react';
import styles from './Skeleton.module.css';
import { clsx } from 'clsx';

interface SkeletonProps {
    width?: string | number;
    height?: string | number;
    variant?: 'text' | 'circular' | 'rectangular';
    className?: string;
    style?: React.CSSProperties;
}

const Skeleton = ({ width, height, variant = 'rectangular', className, style }: SkeletonProps) => {
    const skeletonClasses = clsx(
        styles.skeleton,
        styles[variant],
        className
    );

    return (
        <div
            className={skeletonClasses}
            style={{
                width,
                height,
                ...style,
            }}
        />
    );
};

export default Skeleton;
