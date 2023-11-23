import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';

export default function Admin() {
    const navigate = useNavigate();

    useEffect(() => {
        const isAdmin = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (!isAdmin) {
            navigate('/', { replace: true });
        }
    }, [navigate]);

    return (
        <div>
            <Sidebar />
        </div>
    );
};

