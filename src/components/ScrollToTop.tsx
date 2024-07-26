"use client"
import React from 'react'
import { useEffect, useState } from "react";
function ScrollToTop() {
    const [isVissible, setIsVissible] = useState<boolean>(false);
    const scrollToTop = () => {
        window.scrollTo(
            {
                top:0,
                behavior: "smooth"
            });
    };
    const toggleVisibility = () => {
        (window.scrollY > 300) ? setIsVissible(true) : setIsVissible(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, [])
    return (
        <>
            {
                isVissible ? <button className='rounded-full bg-transparent  p-5 fixed bottom-8 right-5 z-50' onClick={() => scrollToTop()} ><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1464 6.85355C11.3417 7.04882 11.6583 7.04882 11.8536 6.85355C12.0488 6.65829 12.0488 6.34171 11.8536 6.14645L7.85355 2.14645C7.65829 1.95118 7.34171 1.95118 7.14645 2.14645L3.14645 6.14645C2.95118 6.34171 2.95118 6.65829 3.14645 6.85355C3.34171 7.04882 3.65829 7.04882 3.85355 6.85355L7.5 3.20711L11.1464 6.85355ZM11.1464 12.8536C11.3417 13.0488 11.6583 13.0488 11.8536 12.8536C12.0488 12.6583 12.0488 12.3417 11.8536 12.1464L7.85355 8.14645C7.65829 7.95118 7.34171 7.95118 7.14645 8.14645L3.14645 12.1464C2.95118 12.3417 2.95118 12.6583 3.14645 12.8536C3.34171 13.0488 3.65829 13.0488 3.85355 12.8536L7.5 9.20711L11.1464 12.8536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></button> : undefined
            }
        </>
    )
}

export default ScrollToTop
