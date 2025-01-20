import React from 'react';
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from 'next/navigation';

const Dashboard = async () => {
    try {
        const session = await getSession();
        if (!session) {
            redirect('/api/auth/login');
        }

        return (
            <div className="p-4">
                <h1 className="text-2xl mb-4">Welcome {session.user.name}</h1>
                <div className="flex gap-4">
                    <a 
                        href="/api/auth/logout" 
                        className="text-blue-500 hover:text-blue-700"
                    >
                        Logout
                    </a>
                    <a 
                        href="/profile" 
                        className="text-blue-500 hover:text-blue-700"
                    >
                        View Profile
                    </a>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Authentication error:', error);
        return (
            <div className="p-4 text-red-500">
                An error occurred while authenticating. Please try again later.
            </div>
        );
    }
};

export default Dashboard;