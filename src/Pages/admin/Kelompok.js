import React, { useState } from 'react'
import Dashboard from './Dashboard';
import Absensi from './Absensi';

export default function Kelompok() {
    const [showBack, setShowBack] = useState(false);
    const [showAbsensi, setShowAbsensi] = useState(false);

    const handleBack = () => {
        setShowBack(true);
    }
    const handleAbsensi = () => {
        setShowAbsensi(true);
    }

    return (
        <div className='flex flex-wrap justify-center items-center'>
            {
                showBack ? (
                    <Dashboard />
                ) : showAbsensi ? (
                    <Absensi />
                ) : <div className='text-center'><h1 className='mb-5'>Halaman Kelompok</h1>
                    <div className="relative overflow-x-auto mb-5 shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-black-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-white dark:bg-slate-100 dark:text-black-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Kelompok
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b border-t dark:bg-slate-50 dark:border-gray-500">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-dark">
                                        Kelompok 1
                                    </th>
                                    <td className="px-6 py-4 text-center">
                                        <button onClick={handleAbsensi} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Lihat Absensi</button>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-slate-50 dark:border-gray-500">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-dark">
                                        Kelompok 2
                                    </th>
                                    <td className="px-6 py-4 text-center">
                                        <button onClick={handleAbsensi} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Lihat Absensi</button>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-slate-50 dark:border-gray-500">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-dark">
                                        Kelompok 3
                                    </th>
                                    <td className="px-6 py-4 text-center">
                                        <button onClick={handleAbsensi} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Lihat Absensi</button>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-slate-50 dark:border-gray-500">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-dark">
                                        Kelompok 4
                                    </th>
                                    <td className="px-6 py-4 text-center">
                                        <button onClick={handleAbsensi} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Lihat Absensi</button>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-slate-50 dark:border-gray-500">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-dark">
                                        Kelompok 5
                                    </th>
                                    <td className="px-6 py-4 text-center">
                                        <button onClick={handleAbsensi} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Lihat Absensi</button>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-slate-50 dark:border-gray-500">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-dark">
                                        Kelompok 6
                                    </th>
                                    <td className="px-6 py-4 text-center">
                                        <button onClick={handleAbsensi} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Lihat Absensi</button>

                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-slate-50 dark:border-gray-500">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-dark">
                                        Kelompok 7
                                    </th>
                                    <td className="px-6 py-4 text-center">
                                        <button onClick={handleAbsensi} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Lihat Absensi</button>

                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-slate-50 dark:border-gray-500">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-dark">
                                        Kelompok 8
                                    </th>
                                    <td className="px-6 py-4 text-center">
                                        <button onClick={handleAbsensi} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Lihat Absensi</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div>

                        </div>
                    </div>
                    <button onClick={handleBack} className='text-blue-400'>Back</button>
                </div>
            }
        </div>

    )
}
