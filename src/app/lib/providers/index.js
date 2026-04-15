"use client"
import TimelineProvider from '@/app/context/context';
import React from 'react';

const Providers = ({children}) => {
    return (
         <TimelineProvider>
              {children}
         </TimelineProvider>
    );
};

export default Providers;