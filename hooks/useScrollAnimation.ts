'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationOptions {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  once?: boolean;
}

/**
 * Custom hook for scroll-based animations
 * @param animationType - Type of animation to apply
 * @param options - ScrollTrigger options
 */
export function useScrollAnimation(
  animationType: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'stagger',
  options: ScrollAnimationOptions = {}
) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const {
      start = 'top 80%',
      end = 'bottom 20%',
      scrub = false,
      markers = false,
      once = true,
    } = options;

    // Initial state based on animation type
    let initialState = {};
    let animatedState = {};

    switch (animationType) {
      case 'fadeIn':
        initialState = { opacity: 0 };
        animatedState = { opacity: 1, duration: 0.8, ease: 'power2.out' };
        break;
      case 'slideUp':
        initialState = { opacity: 0, y: 60 };
        animatedState = { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' };
        break;
      case 'slideLeft':
        initialState = { opacity: 0, x: 60 };
        animatedState = { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' };
        break;
      case 'slideRight':
        initialState = { opacity: 0, x: -60 };
        animatedState = { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' };
        break;
      case 'scale':
        initialState = { opacity: 0, scale: 0.9 };
        animatedState = { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' };
        break;
      case 'stagger':
        // Stagger will be handled separately for children
        break;
    }

    // Set initial state
    if (animationType !== 'stagger') {
      gsap.set(element, initialState);
    }

    // Create ScrollTrigger animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start,
      end,
      scrub,
      markers,
      once,
      onEnter: () => {
        if (animationType === 'stagger') {
          // Animate children with stagger
          const children = element.children;
          gsap.fromTo(
            children,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              stagger: 0.15,
            }
          );
        } else {
          gsap.to(element, animatedState);
        }
      },
    });

    // Cleanup
    return () => {
      scrollTrigger.kill();
    };
  }, [animationType, options]);

  return elementRef;
}

/**
 * Hook for number counter animation
 * @param endValue - The final number to count to
 * @param duration - Animation duration in seconds
 */
export function useCounterAnimation(endValue: number, duration: number = 2) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const counterObject = { value: 0 };

    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(counterObject, {
          value: endValue,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            element.textContent = Math.round(counterObject.value).toString();
          },
        });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [endValue, duration]);

  return elementRef;
}
