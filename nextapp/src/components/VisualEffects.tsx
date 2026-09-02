'use client';

import React from 'react';

interface PulseLoaderProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export const PulseLoader: React.FC<PulseLoaderProps> = ({
  className = '',
  size = 'md',
  color = 'primary',
}) => {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  const colorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    muted: 'bg-muted-foreground',
  };

  return (
    <div className={`flex space-x-2 ${className}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${sizeClasses[size]} ${colorClasses[color as keyof typeof colorClasses] || 'bg-primary'} rounded-full animate-pulse`}
          style={{
            animationDelay: `${i * 0.15}s`,
            animationDuration: '1.5s',
          }}
        />
      ))}
    </div>
  );
};

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = '',
  from = 'primary',
  to = 'primary/70',
}) => {
  return (
    <span className={`bg-gradient-to-r from-${from} to-${to} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

interface ShimmerCardProps {
  children?: React.ReactNode;
  className?: string;
}

export const ShimmerCard: React.FC<ShimmerCardProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-muted/50 via-muted to-muted/50 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shimmer" />
      {children}
    </div>
  );
};

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  speed = 100,
  className = '',
}) => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const VisualEffects = {
  PulseLoader,
  GradientText,
  ShimmerCard,
  TypingEffect,
};

export default VisualEffects;
