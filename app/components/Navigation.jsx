'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export default function Navigation() {
    const { user, isLoading } = useUser();

    if (isLoading) return null;

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    Your App
                </Link>
                <div className="space-x-4">
                    {user ? (
                        <>
                            <Link href="/dashboard">Dashboard</Link>
                            <Link href="/profile">Profile</Link>
                            <a href="/api/auth/logout">Logout</a>
                        </>
                    ) : (
                        <a href="/api/auth/login">Login</a>
                    )}
                </div>
            </div>
        </nav>
    );
} 