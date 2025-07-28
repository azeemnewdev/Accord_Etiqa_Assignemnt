'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faGear } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation';

export default function BottomNav() {
    const router = useRouter();
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-md">
            <ul className="flex justify-around max-w-md mx-auto">
                <li>
                    <button onClick={() => router.push(`/`)} className="flex flex-col items-center py-2 text-gray-600 hover:text-blue-600">
                        <FontAwesomeIcon icon={faStar}/>
                        <span className="text-xs">Trending</span>
                    </button>
                </li>
                <li>
                    <button  onClick={() => router.push(`/settings`)}  className="flex flex-col items-center py-2 text-gray-600 hover:text-blue-600">
                        <FontAwesomeIcon icon={faGear}/>
                        <span className="text-xs">Settings</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}
